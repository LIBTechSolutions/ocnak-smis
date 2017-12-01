'use strict'

import React from 'react'
import classnames from 'classnames'

export default function FormToolbar (props) {
  let {isNewCase, canSubmit, edit, toggleEdit, confirmClose} = props

  let title = isNewCase
    ? 'New Registration'
    : 'ID ' + props.docId

  let headerClass = classnames({
    'eidsr-form__header': true,
    'new-case': isNewCase
  })

  let buttons = edit
    ? (<span>
      <button className='btn btn--cancel' type='button' onClick={isNewCase ? confirmClose : toggleEdit}>Cancel</button>
      <button className='btn' type='submit' disabled={!canSubmit}><i className='icon-check' />Save</button>
    </span>)
    : (<button className='btn btn--edit' type='button' onClick={toggleEdit}><i className='icon-edit-view' />Edit</button>)

  return (
    <div className={headerClass}>
      <h3 className='eidsr-form__title'>{title}</h3>
      <div className='eidsr-form__actions'>
        {buttons}
        <a href='#' onClick={confirmClose} className='btn btn--minimal btn--close'><i className='icon-close' /></a>
      </div>
    </div>
  )
}
