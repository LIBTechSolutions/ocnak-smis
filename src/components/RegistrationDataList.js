'use strict'

import React from 'react'
import classnames from 'classnames'

export default class RegistrationDataList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startIndex: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }

  getEndIndex () {
    return this.state.startIndex + this.props.limit
  }

  nextPage () {
    this.setState((prevState, props) => {
      return {startIndex: Math.min(props.docs.length - 1, prevState.startIndex + props.limit)}
    })
  }

  previousPage () {
    this.setState((prevState, props) => {
      return {startIndex: Math.max(0, prevState.startIndex - props.limit)}
    })
  }

  hasPreviousPage () {
    return this.state.startIndex > 0
  }

  hasNextPage () {
    return this.state.startIndex + this.props.limit < this.props.docs.length
  }

  render () {
    const docs = this.props.limit
      ? this.props.docs.slice(this.state.startIndex, this.getEndIndex())
      : this.props.docs
    const classes = classnames(this.props.className, 'table-list')
    const pagination = this.props.limit
      ? (
        <tfoot>
          <tr>
            <td colSpan='2'><button className='btn' type='button' onClick={this.previousPage} disabled={!this.hasPreviousPage()}>Previous</button></td>
            <td colSpan='5' style={{textAlign: 'right'}}><button className='btn' type='button' onClick={this.nextPage} disabled={!this.hasNextPage()}>Next</button></td>
          </tr>
        </tfoot>
        )
      : null

    return docs.length === 0
      ? <em>No Info added yet</em>
      : (
        <table className={classes}>
          <thead>
            <tr>
              <th>Registration ID</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {docs.map((studentDetail) => <DataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
          </tbody>
          {pagination}
        </table>
    )
  }
}

function DataRow (props) {
  let {studentDetail, viewDoc, selectedCase} = props

  return (
    <tr onClick={viewDoc(studentDetail._id)} className={selectedCase === studentDetail._id ? 'selected' : ''}>
      <td>{studentDetail.schoolInfo.studentID}</td>
      <td>{studentDetail.schoolInfo.firstname}</td>
      <td>{studentDetail.schoolInfo.middlename}</td>
      <td>{studentDetail.schoolInfo.lastname}</td>
      <td>{studentDetail.schoolInfo.gender}</td>
      <td>{studentDetail.schoolInfo.class}</td>
      <td>{studentDetail.schoolInfo.enrollmentStatus}</td>
    </tr>
  )
}
