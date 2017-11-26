'use strict'

import React from 'react'
import classnames from 'classnames'
import ProfileTool from './ProfileTool'

export default function GradeTwelve (props) {
  let {closeProfile} = props
  const complete = props.studentDetails.filter(studentDetail => !!studentDetail.complete && studentDetail.registrationInfo.currentClass === 'Grade Twelve')
  return (
    <div className='student-data'>
      <div className=''>
        <ProfileTool closeProfile={closeProfile} />
        <h4>Student Profile</h4>
        <GradeStudents limit={1} docs={complete} {...props} />
      </div>
    </div>
  )
}

export class GradeStudents extends React.Component {
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
    const pagination = this.props.limit
      ? (
        <tfoot>
          <tr>
            <td colSpan='2'><button className='btn' type='button' onClick={this.previousPage} disabled={!this.hasPreviousPage()}>Previous</button></td>
            <td colSpan='3' style={{textAlign: 'right'}}><button className='btn' type='button' onClick={this.nextPage} disabled={!this.hasNextPage()}>Next</button></td>
          </tr>
        </tfoot>
        )
      : null

    return docs.length === 0
      ? <em>No Info</em>
      : (
        <table className='profile'>
          <tbody>
            {docs.map((doc) => <PicDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <NameDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <IdDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <GradeDataRow key={doc._id} doc={doc} {...this.props} />)}
            {docs.map((doc) => <GenderDataRow key={doc._id} doc={doc} {...this.props} />)}
          </tbody>
          {pagination}
        </table>
    )
  }
}

function PicDataRow (props) {
  let {doc} = props

  return (
    <tr>
      <td className='picture'><img src='../static/images/techsol-new-logo.jpg' alt='No picture' /></td>
    </tr>
  )
}
function NameDataRow (props) {
  let {doc} = props

  return (
    <tr>
      <td className='name'>{doc.registrationInfo.firstname}&nbsp;{doc.registrationInfo.middlename}&nbsp;{doc.registrationInfo.lastname}</td>
    </tr>
  )
}

function IdDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Student ID:</td>
      <td>{doc.regID}</td>
    </tr>
  )
}

function GradeDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Class:</td>
      <td>{doc.registrationInfo.currentClass}</td>
    </tr>
  )
}

function GenderDataRow (props) {
  let {doc} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Gender:</td>
      <td>{doc.registrationInfo.sex}</td>
    </tr>
  )
}
