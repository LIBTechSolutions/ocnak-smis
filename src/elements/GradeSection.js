'use strict'

import React, {Component} from 'react'
import Gradek1_k2 from './Gradek1_k2'
import Grade1_6 from './Grade1_6'
import Grade7_9 from './Grade7_9'
import Grade10_12 from './Grade10_12'

export default class GradeSection extends Component {

  render () {
    let props = this.props
    let GradeList = props.grades.map((grade) => {
      if (!grade.hidden && props.class === 'Kindergarten One' ) {
        return (<Gradek1_k2 {...grade} {...props} />)
      }
    if (!grade.hidden &&  props.class === 'Kindergarten Two') {
        return (<Gradek1_k2 {...grade} {...props} />)
      }
        if (!grade.hidden &&  props.class === 'Grade One') {
        return (<Grade1_6 {...grade} {...props} />)
      } if (!grade.hidden &&  props.class === 'Grade Two') {
        return (<Grade1_6 {...grade} {...props} />)
      } if (!grade.hidden &&  props.class === 'Grade Three') {
        return (<Grade1_6 {...grade} {...props} />)
      }
        if (!grade.hidden &&  props.class === 'Grade Four') {
        return (<Grade1_6 {...grade} {...props} />)
      } if (!grade.hidden &&  props.class === 'Grade Five') {
        return (<Grade1_6 {...grade} {...props} />)
      } if (!grade.hidden &&  props.class === 'Grade Six') {
        return (<Grade1_6 {...grade} {...props} />)
      }
      if (!grade.hidden &&  props.class === 'Grade Seven') {
        return (<Grade7_9 {...grade} {...props} />)
      } if (!grade.hidden &&  props.class === 'Grade Eight') {
        return (<Grade7_9 {...grade} {...props} />)
      } if (!grade.hidden &&  props.class === 'Grade Nine') {
        return (<Grade7_9 {...grade} {...props} />)
      }
      if (!grade.hidden &&  props.class === 'Grade Ten') {
        return (<Grade10_12 {...grade} {...props} />)
      } if (!grade.hidden &&  props.class === 'Grade Eleven') {
        return (<Grade10_12 {...grade} {...props} />)
      } if (!grade.hidden &&  props.class === 'Grade Twelve') {
        return (<Grade10_12 {...grade} {...props} />)
      }     
    })

    return (
      <fieldset disabled={!props.edit}>
        <legend>Grade Entry</legend>
        {GradeList}
        <hr />
        <button className='btn' type='button'
          disabled={!props.canShowGrade} 
          onClick={
            e => props.handleShow()}>
          <i className='icon-add' />Add Grade
        </button>
      </fieldset>
    )
  }
}
