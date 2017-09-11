'use strict'

import React from 'react'

export default class YesNoDialog extends React.Component {
  render () {
    let {title, confirm, abort, confirmText, abortText} = this.props

    return (
      <div className='alert--dialog'>
        <div className='dialog__title'>{title}</div>
        <div className='dialog__actions'>
          <button onClick={confirm} className='dialog__button success'>
            <span className='button-title'>YES</span>
            <span className='button-text'>{confirmText}</span>
          </button>
          <button onClick={abort} className='dialog__button warning'>
            <span className='button-title'>NO</span>
            <span className='button-text'>{abortText}</span>
          </button>
        </div>
      </div>
    )
  }
}

