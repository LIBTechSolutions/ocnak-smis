'use strict'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from '../components/App'
import * as CaseActions from '../actions/cases'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

class AppContainer extends React.Component {
  constructor (props) {
    super(props)

    this.caseDb = this.props.caseDb
    this.remoteDb = this.props.remoteDb
    this.remoteSync = null

    this.state = {
      user: null,
      onlineStatus: 'offline',
      loginErrorVisible: false
    }

    this.checkLogin = this.checkLogin.bind(this)
    this.logout = this.logout.bind(this)
    this.updateOnlineStatus = this.updateOnlineStatus.bind(this)
  }

  checkLogin (user) {
    const {config} = this.props

    if (user in config.allowed_users) {
      this.login(Object.assign({user}, config.allowed_users[user]))
    } else {
      this.loginFail()
    }
  }

  login (user) {
    this.setState({user, loginErrorVisible: false})
  }

  logout () {
    this.setState({user: null})
  }

  loginFail () {
    this.setState({loginErrorVisible: true})
  }

  isLoggedIn () {
    return !!this.state.user
  }

  updateOnlineStatus () {
    let onlineStatus = window.navigator.onLine ? 'online' : 'offline'
    this.setState({onlineStatus})
  }

  componentDidMount () {
    window.addEventListener('online', this.updateOnlineStatus)
    window.addEventListener('offline', this.updateOnlineStatus)

    this.startRemoteSync()
  }

  componentWillUnmount () {
    window.removeEventListener('online', this.updateOnlineStatus)
    window.removeEventListener('offline', this.updateOnlineStatus)

    this.stopRemoteSync()
  }

  render () {
    return <App {...this.state} {...this.props}
      checkLogin={this.checkLogin}
      loggedIn={this.isLoggedIn()}
      logout={this.logout}
    />
  }

  startRemoteSync () {
    console.log('starting remote sync')
    this.remoteSync = this.caseDb.sync(this.remoteDb, {
      live: true,
      retry: true
    }).on('complete', () => {
      console.log('Remote sync complete', this.remoteSync)
    }).on('error', (err) => {
      console.log(err)
    })
  }

  stopRemoteSync () {
    this.remoteSync && this.remoteSync.cancel()
  }
}

function mapStateToProps (state) {
  return {
    idsrCases: state.idsrCases
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(CaseActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
