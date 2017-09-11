
'use strict'

import React from 'react'
import classnames from 'classnames'
import ProfileTool from './ProfileTool'

export default function GradeOne (props) {
  let {closeProfile} = props
  const complete = props.idsrCases.filter(idsrCase => !!idsrCase.schoolInfo && !!idsrCase.complete && idsrCase.schoolInfo.class === 'Pre-Nursary')

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
            {docs.map((idsrCase) => <NameDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
            {docs.map((idsrCase) => <IdDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
            {docs.map((idsrCase) => <GradeDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
            {docs.map((idsrCase) => <GenderDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
            {docs.map((idsrCase) => <TotalFeeDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
            {docs.map((idsrCase) => <InstallmentOneDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
            {docs.map((idsrCase) => <InstallmentTwoDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
            {docs.map((idsrCase) => <InstallmentThreeDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
            {docs.map((idsrCase) => <InstallmentFourDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
            {docs.map((idsrCase) => <TotalInstallmentDataRow key={idsrCase._id} idsrCase={idsrCase} {...this.props} />)}
          </tbody>
          {pagination}
        </table>
    )
  }
}

function NameDataRow (props) {
  let {idsrCase} = props

  return (
    <tr>
      <td className='name'>{idsrCase.schoolInfo.firstname}&nbsp;{idsrCase.schoolInfo.middlename}&nbsp;{idsrCase.schoolInfo.lastname}</td>
    </tr>
  )
}

function IdDataRow (props) {
  let {idsrCase} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Student ID:</td>
      <td>{idsrCase.schoolInfo.studentID}</td>
    </tr>
  )
}

function GradeDataRow (props) {
  let {idsrCase} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Class:</td>
      <td>{idsrCase.schoolInfo.class}</td>
    </tr>
  )
}

function GenderDataRow (props) {
  let {idsrCase} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Gender:</td>
      <td>{idsrCase.schoolInfo.gender}</td>
    </tr>
  )
}

function InstallmentOneDataRow (props) {
  let {idsrCase} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>First Installment:</td>
      <td>{'$' + idsrCase.schoolInfo.fee01_amount + '.00'}</td>
    </tr>
  )
}

function InstallmentTwoDataRow (props) {
  let {idsrCase} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Second Installment:</td>
      <td>{'$' + idsrCase.schoolInfo.fee02_amount + '.00'}</td>
    </tr>
  )
}

function InstallmentThreeDataRow (props) {
  let {idsrCase} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Third Installment:</td>
      <td>{'$' + idsrCase.schoolInfo.fee03_amount + '.00'}</td>
    </tr>
  )
}

function InstallmentFourDataRow (props) {
  let {idsrCase} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Fourth Installment:</td>
      <td>{'$' + idsrCase.schoolInfo.fee04_amount + '.00'}</td>
    </tr>
  )
}

function TotalFeeDataRow (props) {
  let {idsrCase} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Total Fee:</td>
      <td style={{fontWeight: 'bold'}}>{'$' + idsrCase.schoolInfo.totalFee + '.00'}</td>
    </tr>
  )
}

function TotalInstallmentDataRow (props) {
  let {idsrCase} = props
  var data = [idsrCase.schoolInfo.fee01_amount, idsrCase.schoolInfo.fee02_amount,
    idsrCase.schoolInfo.fee03_amount, idsrCase.schoolInfo.fee04_amount].map(Number)
  let data2 = [idsrCase.schoolInfo.totalFee].map(Number)

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
