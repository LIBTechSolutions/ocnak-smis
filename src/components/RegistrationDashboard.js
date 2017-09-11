'use strict'

import React from 'react'
import classnames from 'classnames'
import RegistrationDataPage from './RegistrationDataPage'
import RegistrationForm from './RegistrationForm'

export default class RegistrationDashboard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      docId: null,
      edit: false,
      savedStatusVisible: false,
      confirmCloseDialogVisible: false,
      view: 'full-view'
    }

    this.viewDoc = this.viewDoc.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.toggleHasChanged = this.toggleHasChanged.bind(this)
    this.createCase = this.createCase.bind(this)
    this.confirmClose = this.confirmClose.bind(this)
    this.cancelClose = this.cancelClose.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.saveCase = this.saveCase.bind(this)
  }

  viewDoc (docId) {
    return (e) => {
      this.setState({
        docId,
        isNewCase: false,
        edit: false,
        hasChanged: false,
        savedStatusVisible: false,
        view: 'split-view'
      })
    }
  }

  toggleEdit () {
    this.setState((prevState, props) => {
      return {edit: !prevState.edit}
    })
  }

  toggleHasChanged () {
    this.setState({hasChanged: true})
  }

  confirmClose (e) {
    if (this.state.hasChanged) {
      e.preventDefault()
      this.setState({confirmCloseDialogVisible: true})
    } else {
      return this.closeForm(e)
    }
  }

  cancelClose (e) {
    e.preventDefault()

    this.setState({
      confirmCloseDialogVisible: false
    })
  }

  closeForm (e) {
    e.preventDefault()
    this.setState({
      docId: null,
      hasChanged: false,
      confirmCloseDialogVisible: false,
      view: 'full-view'
    })
  }

  createCase (e) {
    e.preventDefault()
    this.setState({
      docId: null,
      isNewCase: true,
      hasChanged: false,
      edit: true,
      savedStatusVisible: false,
      view: 'split-view'
    })
  }

  saveCase (idsrCase) {
    let action = this.state.isNewCase
      ? this.props.actions.insertCase
      : this.props.actions.updateCase

    action(idsrCase, true)

    this.setState({
      docId: idsrCase._id,
      hasChanged: false,
      savedStatusVisible: true,
      edit: false
    })
  }

  render () {
    let dashboardClass = classnames('dashboard', this.state.view, {
      'show-modal': this.state.confirmCloseDialogVisible
    })
    return (
      <div id='dashboard' className={dashboardClass}>
        <RegistrationDataPage
          viewDoc={this.viewDoc}
          createCase={this.createCase}
          selectedCase={this.state.docId}
          {...this.props} />
        <RegistrationForm
          toggleEdit={this.toggleEdit}
          confirmClose={this.confirmClose}
          cancelClose={this.cancelClose}
          closeForm={this.closeForm}
          createCase={this.createCase}
          saveCase={this.saveCase}
          toggleHasChanged={this.toggleHasChanged}
          {...this.state}
          {...this.props} />
      </div>
    )
  }
}
