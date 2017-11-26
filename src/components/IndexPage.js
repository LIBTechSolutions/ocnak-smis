'use strict'

import React from 'react'
import classnames from 'classnames'

export default class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.authenticate = this.authenticate.bind(this)
  }

  authenticate (event) {
    event.preventDefault()
    let elements = event.target.elements
    let email = elements.namedItem('email').value

    this.setState({loginAlertDeactivated: false})

    this.props.checkLogin(email)
  }

  render () {
    let {loginErrorVisible} = this.props
    let emailChangeHandlers = {}
    let loginAlert = ''

    if (loginErrorVisible) {
      let alertClasses = classnames('login-alert', 'alert-danger', {
        active: !this.state.loginAlertDeactivated
      })
      loginAlert = <span className={alertClasses}>Invalid Email:</span>
      emailChangeHandlers.onChange = () => {
        this.setState({loginAlertDeactivated: true})
      }
    }

    return (
      <div className='home'>
        <form action='' onSubmit={this.authenticate}>
          <div className='logo'>
            <h1>Powered by<span>Techsol</span></h1>
          </div>
          <div className='login'>
            <h2>School Management System</h2>
            {loginErrorVisible && loginAlert}
            <input {...emailChangeHandlers} name='email' type='email' placeholder='E-mail address' autoFocus required />
            <button type='submit' className='btn'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}
