'use strict'

import React, {Component} from 'react'
import Attendance from './Attendance'

export default class AttendanceSection extends Component {

  render () {
    let props = this.props
    let AttendanceList = props.attendances.map((attendance) => {
      if (!attendance.hidden) {
        return (<Attendance {...attendance} {...props} />)
      }
    })

    return (
      <fieldset disabled={!props.edit}>
        <legend>Attendance Entry</legend>
        {AttendanceList}
        <hr />
        <button className='btn' type='button'
          disabled={!props.canShowAttendance} onClick={e => props.handleShow()}>
          <i className='icon-add' />Add Attendance
        </button>
      </fieldset>
    )
  }
}
