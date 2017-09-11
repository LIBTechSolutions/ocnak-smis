'use strict'

import React from 'react'
import classnames from 'classnames'

export default function ProfileTool (props) {
  let {closeProfile} = props

  return (
    <div className='eidsr-form__header'>
      <div className='eidsr-form__actions'>
        <button className='btn btn--cancel' type='button' onClick={closeProfile}>Cancel</button>
        <a href='#' onClick={closeProfile} className='btn btn--minimal btn--close'><i className='icon-close' /></a>
      </div>
    </div>
  )
}
