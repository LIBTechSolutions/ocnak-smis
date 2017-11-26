'use strict'

import React, {Component} from 'react'
import Fee from './Fee'

export default class FeeSection extends Component {

  render () {
    let props = this.props
    let FeeList = props.fees.map((fee) => {
      if (!fee.hidden) {
        return (<Fee {...fee} {...props} />)
      }
    })

    return (
      <fieldset disabled={!props.edit}>
        <legend>Fee Entry</legend>
        {FeeList}
        <hr />
        <button className='btn' type='button'
          disabled={!props.canShowFee} onClick={e => props.handleShow()}>
          <i className='icon-add' />Add Fee
        </button>
      </fieldset>
    )
  }
}
