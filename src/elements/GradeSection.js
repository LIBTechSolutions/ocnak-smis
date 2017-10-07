'use strict'

import React, {Component} from 'react'
import Grade from './Grade'

export default class GradeSection extends Component {

  render () {
    let props = this.props
    let GradeList = props.grades.map((grade) => {
      if (!grade.hidden) {
        return (<Grade {...grade} {...props} />)
      }
    })

    return (
      <fieldset disabled={!props.edit}>
        <legend>Grade Entry</legend>
        {GradeList}
        <hr />
        <button className='btn' type='button'
          disabled={!props.canShowGrade} onClick={e => props.handleShow()}>
          <i className='icon-add' />Add Grade
        </button>
      </fieldset>
    )
  }
}
