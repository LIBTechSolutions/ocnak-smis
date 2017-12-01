'use strict'

import React from 'react'
import classnames from 'classnames'

export default class User extends React.Component {
  constructor (props) {
    super(props)

    this.state = { open: false }

    this.logout = this.logout.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  logout (e) {
    e.preventDefault()
    this.props.logout()
  }

  toggleOpen (e) {
    e.preventDefault()
    this.setState((prevState) => ({open: !prevState.open}))
  }

  render () {
    let dropdownClass = classnames({
      'navbar__dropdown': true,
      'dropdown': true,
      'open': this.state.open
    })
    return (
      <div>
        <p style={{ color: 'white', marginLeft: '600px'}}>{this.props.user.user} <a style={{ textDecoration: 'none', marginLeft: '100px'}} onClick={this.logout} href='#'>Logout</a></p>
      </div>
    )
  }
}
