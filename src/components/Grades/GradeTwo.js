
'use strict'

import React from 'react'
import classnames from 'classnames'
import ProfileTool from './ProfileTool'

export default function GradeTwo (props) {
  let {closeProfile} = props
  const complete = props.studentDetails.filter(studentDetail => !!studentDetail.schoolInfo && !!studentDetail.complete && studentDetail.schoolInfo.class === 'Nursary')

  return (
    <div className='student-profile'>
      <div className='student-data'>
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
            {docs.map((studentDetail) => <NameDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <IdDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <GradeDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <GenderDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <TotalFeeDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <InstallmentOneDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <InstallmentTwoDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <InstallmentThreeDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <InstallmentFourDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <TotalInstallmentDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
          </tbody>
          {pagination}
        </table>
    )
  }
}

function NameDataRow (props) {
  let {studentDetail} = props

  return (
    <tr>
      <td className='name'>{studentDetail.schoolInfo.firstname}&nbsp;{studentDetail.schoolInfo.middlename}&nbsp;{studentDetail.schoolInfo.lastname}</td>
    </tr>
  )
}

function IdDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Student ID:</td>
      <td>{studentDetail.schoolInfo.studentID}</td>
    </tr>
  )
}

function GradeDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Class:</td>
      <td>{studentDetail.schoolInfo.class}</td>
    </tr>
  )
}

function GenderDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Gender:</td>
      <td>{studentDetail.schoolInfo.gender}</td>
    </tr>
  )
}

function InstallmentOneDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>First Installment:</td>
      <td>{'$' + studentDetail.schoolInfo.fee01_amount + '.00'}</td>
    </tr>
  )
}

function InstallmentTwoDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Second Installment:</td>
      <td>{'$' + studentDetail.schoolInfo.fee02_amount + '.00'}</td>
    </tr>
  )
}

function InstallmentThreeDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Third Installment:</td>
      <td>{'$' + studentDetail.schoolInfo.fee03_amount + '.00'}</td>
    </tr>
  )
}

function InstallmentFourDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Fourth Installment:</td>
      <td>{'$' + studentDetail.schoolInfo.fee04_amount + '.00'}</td>
    </tr>
  )
}

function TotalFeeDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Total Fee:</td>
      <td style={{fontWeight: 'bold'}}>{'$' + studentDetail.schoolInfo.totalFee + '.00'}</td>
    </tr>
  )
}

function TotalInstallmentDataRow (props) {
  let {studentDetail} = props
  var data = [studentDetail.schoolInfo.fee01_amount, studentDetail.schoolInfo.fee02_amount,
    studentDetail.schoolInfo.fee03_amount, studentDetail.schoolInfo.fee04_amount].map(Number)
  let data2 = [studentDetail.schoolInfo.totalFee].map(Number)

  function getSum (total, num) {
    return total + num
  }
  let totalFeePaid = data.reduce(getSum)

  let balance = [data2, totalFeePaid]

  function getBalance (total, num) {
    return total - num
  }
  let balanceFee = balance.reduce(getBalance)

  return (
    <tr className='separate'>
      <td className='title-padding'>Total Paid:</td>
      <td>{'$' + totalFeePaid + '.00'}</td>

      <td className='title-padding'>Balance Fee:</td>
      <td>{'$' + balanceFee + '.00'}</td>
    </tr>
  )
}
