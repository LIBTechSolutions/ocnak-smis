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
      <div className='navbar__user'>
        <div className={dropdownClass}>
          <a id='dropdownMenu1' href='#' className='dropdown-toggle' data-toggle='dropdown' role='button' aria-expanded={this.state.open} onClick={this.toggleOpen}>
            <div className='user-icon'>
              <i className='user' aria-hidden='true' />
            </div>
            {this.props.user.user}<span className='caret' /></a>
          <ul className='dropdown-menu' role='menu' aria-labelledby='dropdownMenu1'>
            <li role='presentation'><a role='menuitem' tabIndex='-1' onClick={this.logout} href='#'>Logout</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
