'use strict'

import React from 'react'

export default function Toolbar (props) {
  let {showForm, hideForm} = props

  return (
    <div className='eidsr-form__header'>
      <div className='eidsr-form__actions'>
        <button className='btn' type='button' onClick={hideForm}>Close Form</button>
        <button className='btn' onClick={showForm}>Show Form</button>
      </div>
    </div>
  )
}
