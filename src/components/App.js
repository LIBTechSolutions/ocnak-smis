'use strict'

import React from 'react'
import classnames from 'classnames'
import IndexPage from './IndexPage'
import User from '../elements/User'
import RegistrationDashboard from './RegistrationDashboard'
import HomePage from './HomePage'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      registration: false,
      fee: false,
      grade: false,
      home: true
    }
    this.handleRegistration = this.handleRegistration.bind(this)
    this.handleFee = this.handleFee.bind(this)
    this.handleGrade = this.handleGrade.bind(this)
    this.handleHome = this.handleHome.bind(this)
  }
  handleRegistration () {
    this.setState({
      registration: true,
      fee: false,
      grade: false,
      home: false
    })
  }
  handleFee () {
    this.setState({
      fee: true,
      registration: false,
      grade: false,
      home: false
    })
  }
  handleGrade () {
    this.setState({
      fee: false,
      registration: false,
      grade: true,
      home: false
    })
  }
  handleHome () {
    this.setState({
      home: true,
      fee: false,
      registration: false,
      grade: false
    })
  }

  render () {
    let props = this.props
    let dataContent = (<IndexPage checkLogin={props.checkLogin} loginErrorVisible={props.loginErrorVisible} />)
    let userStatus = ''
    let onlineStatus = ''

    if (props.loggedIn) {
      dataContent = (
        <div>
          <br />
          <br />
          <div className='eidsr-data__header'>
            <h3 className='eidsr-data__title'><button className='btn' type='button' onClick={this.handleHome}>Home</button></h3>
            <h3 className='eidsr-data__title'><button className='btn' type='button' onClick={this.handleRegistration}>Student Details</button></h3>
          </div>
          {this.state.registration ? <RegistrationDashboard {...props} /> : null}
          {this.state.home ? <HomePage {...props} /> : null}
        </div>
      )

      userStatus = (<User user={props.user} logout={props.logout} />)
      onlineStatus = (
        <div className={classnames('navbar__status', `status--${props.onlineStatus}`)}>
          <i className='status' />
          {props.onlineStatus}
        </div>
      )
    }
    return (
      <div className='app-container'>
        <header className='navbar'>
          <div className='navbar__header'>
            <h2>School Sync</h2>
          </div>
            <div style={{ marginLeft: '80px' }}>
              {userStatus}
            </div>
        </header>
        <div className='app-content'>{dataContent}</div>
        <footer />
      </div>
    )
  }
}
