'use strict'

import React from 'react'
import classnames from 'classnames'
import { findDOMNode } from 'react-dom'
import { FormGroup, ControlLabel, FormControl, HelpBlock, 
         Button, Well, Row, Col, Panel, Grid, Alert } from 'react-bootstrap'

export default class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.authenticate = this.authenticate.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  authenticate (event) {
    event.preventDefault()
    let email = findDOMNode(this.refs.email).value

    console.log(email)

    this.setState({loginAlertDeactivated: false})

    this.props.checkLogin(email)
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 4) return 'success';
    else if (length > 3) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render () {
    const wellStyles = { maxWidth: 500, margin: '20px auto 10px', backgroundColor: '#808080' }
    let {loginErrorVisible} = this.props
    let emailChangeHandlers = {}
    let loginAlert = ''

    if (loginErrorVisible) {
      let alertClasses = classnames({
        active: !this.state.loginAlertDeactivated
      })
      loginAlert = <Alert  bsStyle="danger" className={alertClasses}>Invalid username</Alert>
      emailChangeHandlers.onChange = () => {
        this.setState({loginAlertDeactivated: true})
      }
    }

    return (
      <div className='home'>
        <div className="well" style={wellStyles}>
        <Row>
        <Col>
          <Panel>
          <form action='' onSubmit={this.authenticate}>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              >
                <ControlLabel>SchoolRec</ControlLabel>
                {loginErrorVisible && loginAlert}
                <FormControl
                  type="text"
                  ref="email"
                  value={this.state.value}
                  placeholder="Username"
                  onChange={this.handleChange}
                  required
                />
                <FormControl.Feedback />
                <HelpBlock>Signin with your username</HelpBlock>
              </FormGroup>
              <Button style={{ marginLeft: '-4', width: '100%', textAligh: 'center', margin: 'auto' }} onClick={this.authenticate} type="submit" bsStyle="primary"><strong>Signin</strong></Button>
          </form>
          </Panel>
        </Col>
      </Row>
      </div>
      </div>
    )
  }
}
