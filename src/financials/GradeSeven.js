
'use strict'

import React from 'react'
import converter from 'number-to-words';
import ProfileTool from '../elements/ProfileTool'
import Search from '../elements/Search'

export default class GradeTwo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      studentDetails: props.studentDetails,
      filteredInfo: props.studentDetails
    }
    this.handleDataSearch = this.handleDataSearch.bind(this)
  }

  handleDataSearch (data) {
    let result = this.state.studentDetails
    const stringContains = (haystack, needle) => {
      return haystack ? haystack.toLowerCase().includes(needle.toLowerCase()) : false
    }

    if (data.word.length > 0) {
      result = result.filter((studentDetail) => {
        if (stringContains(studentDetail.schoolInfo.studentID, data.word) ||
          stringContains(studentDetail.schoolInfo.firstname, data.word) ||
          stringContains(studentDetail.schoolInfo.middlename, data.word) ||
          stringContains(studentDetail.schoolInfo.lastname, data.word) ||
          stringContains(studentDetail.schoolInfo.class, data.word) ||
          stringContains(studentDetail.schoolInfo.enrollmentStatus, data.word)) {
          return true
        }
        return false
      })
    }
    this.setState({filteredInfo: result})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({filteredInfo: nextProps.studentDetails})
  }

  render() {
    let props = this.props;
    const filteredInfo = this.state.filteredInfo
    let {closeProfile} = props
    const complete = filteredInfo.filter(studentDetail => !!studentDetail.schoolInfo && !!studentDetail.complete && studentDetail.schoolInfo.class === 'Grade Seven')

    return (
      <div className='student-profile'>
        <div className='student-data'>
          <ProfileTool closeProfile={closeProfile} />
          <h4>Student Profile</h4>
          <Search onSearch={this.handleDataSearch} />
          <hr />
          <GradeStudents limit={1} docs={complete} {...props} />
        </div>
      </div>
    )
  }  
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
            <td><button className='btn' style={{ marginLeft: '66rem' }} type='button' onClick={() => printDiv() }><i className='fa fa-print fa-2x' aria-hidden='true' /></button></td>
          </tr>
        </tfoot>
        )
      : null

    return docs.length === 0
      ? <em>No Info</em>
      : (
        <div>
          <iframe id='printf' name='printf' frameBorder='0' allowFullScreen style={{ display: 'none' }}>
          </iframe> 
        <div id='printMe'>
          <table>
            <tbody className='profile'>
              <div >
              {docs.map((studentDetail) => <NameDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <IdDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <GradeDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <GenderDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <TotalFeeDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <InstallmentOneDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <InstallmentTwoDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <InstallmentThreeDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <InstallmentFourDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <TotalPaidDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <TotalInstallmentDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}              
              </div>
            </tbody>

            <br />
            <tbody style={{ marginTop: '4rem' }}>
              <div style={{ marginLeft: '75px' }}>
              {docs.map((studentDetail) => <FirstReceipt key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <SecondReceipt key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <ThirdReceipt key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
              {docs.map((studentDetail) => <FourthReceipt key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}            
              </div>
            </tbody>

          </table>
        </div>
        <div style={{ marginTop: '3rem' }}>
          
          {pagination}
          </div>
        </div>
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
      <td style={styles.studentStyles}>{studentDetail.schoolInfo.studentID}</td>
    </tr>
  )
}

function GradeDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Class:</td>
      <td style={styles.studentStyles}>{studentDetail.schoolInfo.class}</td>
    </tr>
  )
}

function GenderDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Gender:</td>
      <td style={styles.studentStyles}>{studentDetail.schoolInfo.gender}</td>
    </tr>
  )
}

function InstallmentOneDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>First Installment:</td>
      <td style={styles.studentStyles}>{'$' + studentDetail.schoolInfo.fee01_amount + '.00'}</td>
    </tr>
  )
}

function InstallmentTwoDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Second Installment:</td>
      <td style={styles.studentStyles}>{'$' + studentDetail.schoolInfo.fee02_amount + '.00'}</td>
    </tr>
  )
}

function InstallmentThreeDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Third Installment:</td>
      <td style={styles.studentStyles}>{'$' + studentDetail.schoolInfo.fee03_amount + '.00'}</td>
    </tr>
  )
}

function InstallmentFourDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Fourth Installment:</td>
      <td style={styles.studentStyles}>{'$' + studentDetail.schoolInfo.fee04_amount + '.00'}</td>
    </tr>
  )
}

function TotalFeeDataRow (props) {
  let {studentDetail} = props

  return (
    <tr className='separate'>
      <td className='title-padding'>Total Fee:</td>
      <td style={{fontWeight: 'bold', paddingLeft: '4rem', textAlign: 'left' }}>{'$' + studentDetail.schoolInfo.totalFee + '.00'}</td>
    </tr>
  )
}

function TotalPaidDataRow (props) {
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
        <td style={styles.studentStyles}>{'$' + totalFeePaid + '.00'}</td>
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
      <td className='title-padding'>Balance Fee:</td>
      <td style={styles.studentStyles}>{'$' + balanceFee + '.00'}</td>
    </tr>
  )
}

function FirstReceipt (props) {
  let {studentDetail} = props

  let data = studentDetail.schoolInfo.fee01_feeDate === '' ? <em style={{ visibility: 'hidden' }}>NO DATE ADDED YET</em> : studentDetail.schoolInfo.fee01_feeDate
  

  return studentDetail.schoolInfo.fee01_amount === ''
  ? <em style={{ paddingRight: '30rem', visibility: 'hidden' }}>No payment has been made for this period</em>
  : (
    <tr style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}>
      <div>
      <div style={{ border: '1px solid black', marginBottom: '3rem', marginTop: '3rem', marginRight: '15px', paddingLeft: '2rem', paddingTop: '2rem' }}>
      <tr>
        <td colSpan='2' style={styles.receiptHeader}>OFFICIAL RECEIPT</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left' }}>Receipt #: {studentDetail.schoolInfo.receipt1}</td>
        <td style={{ paddingLeft: '4rem', paddingRight: '30rem', display: 'inline'}}>Date: {data}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Received from: {studentDetail.schoolInfo.firstname}&nbsp;{studentDetail.schoolInfo.middlename}&nbsp;{studentDetail.schoolInfo.lastname}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Amount in words: {converter.toWords(studentDetail.schoolInfo.fee01_amount).toUpperCase() + ' Liberian Dollars'}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Purpose: First Installment Payment of Academic Year School Fees</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left',  paddingTop: '1.5rem', paddingBottom: '3rem' }}>Amount: {'$' + studentDetail.schoolInfo.fee01_amount + '.00 ' + 'LRD'}</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left', visibility: 'hidden' }}>Receipt #: This text should be hidden</td>
        <td style={{ textAlign: 'center', paddingLeft: '2rem' }}><div style={{ borderTop: '1px solid black', width: '50%' }}>{props.user.fullName}</div></td>
      </tr>
      </div>
      </div>
    </tr>
  )
}

function SecondReceipt (props) {
  let {studentDetail} = props

  let data = studentDetail.schoolInfo.fee02_feeDate === '' ? <em style={{ visibility: 'hidden' }}>NO DATE ADDED YET</em> : studentDetail.schoolInfo.fee02_feeDate
  

  return studentDetail.schoolInfo.fee02_amount === ''
  ? <em style={{ paddingRight: '30rem', visibility: 'hidden' }}>No payment has been made for this period</em>
  : (
    <tr style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}>
      <div>
      <div style={{ border: '1px solid black', marginBottom: '3rem', marginTop: '3rem', marginRight: '15px', paddingLeft: '2rem', paddingTop: '2rem' }}>
      <tr>
        <td colSpan='2' style={styles.receiptHeader}>OFFICIAL RECEIPT</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left' }}>Receipt #: {studentDetail.schoolInfo.receipt2}</td>
        <td style={{ paddingLeft: '4rem', paddingRight: '30rem', display: 'inline'}}>Date: {data}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Received from: {studentDetail.schoolInfo.firstname}&nbsp;{studentDetail.schoolInfo.middlename}&nbsp;{studentDetail.schoolInfo.lastname}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Amount in words: {converter.toWords(studentDetail.schoolInfo.fee02_amount).toUpperCase() + ' Liberian Dollars'}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Purpose: Second Installment Payment of Academic Year School Fees</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left',  paddingTop: '1.5rem', paddingBottom: '3rem' }}>Amount: {'$' + studentDetail.schoolInfo.fee02_amount + '.00 ' + 'LRD'}</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left', visibility: 'hidden' }}>Receipt #: This text should be hidden</td>
        <td style={{ textAlign: 'center', paddingLeft: '2rem' }}><div style={{ borderTop: '1px solid black', width: '50%' }}>{props.user.fullName}</div></td>
      </tr>
      </div>
      </div>
    </tr>
  )
}

function ThirdReceipt (props) {
  let {studentDetail} = props

  let data = studentDetail.schoolInfo.fee03_feeDate === '' ? <em style={{ visibility: 'hidden' }}>NO DATE ADDED YET</em> : studentDetail.schoolInfo.fee03_feeDate
  

  return studentDetail.schoolInfo.fee03_amount === ''
  ? <em style={{ paddingRight: '30rem', visibility: 'hidden' }}>No payment has been made for this period</em>
  : (
    <tr style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}>
      <div>
      <div style={{ border: '1px solid black', marginBottom: '3rem', marginTop: '3rem', marginRight: '15px', paddingLeft: '2rem', paddingTop: '2rem' }}>
      <tr>
        <td colSpan='2' style={styles.receiptHeader}>OFFICIAL RECEIPT</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left' }}>Receipt #: {studentDetail.schoolInfo.receipt3}</td>
        <td style={{ paddingLeft: '4rem', paddingRight: '30rem', display: 'inline'}}>Date: {data}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Received from: {studentDetail.schoolInfo.firstname}&nbsp;{studentDetail.schoolInfo.middlename}&nbsp;{studentDetail.schoolInfo.lastname}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Amount in words: {converter.toWords(studentDetail.schoolInfo.fee03_amount).toUpperCase() + ' Liberian Dollars'}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Purpose: Third Installment Payment of Academic Year School Fees</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left',  paddingTop: '1.5rem', paddingBottom: '3rem' }}>Amount: {'$' + studentDetail.schoolInfo.fee03_amount + '.00 ' + 'LRD'}</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left', visibility: 'hidden' }}>Receipt #: This text should be hidden</td>
        <td style={{ textAlign: 'center', paddingLeft: '2rem' }}><div style={{ borderTop: '1px solid black', width: '50%' }}>{props.user.fullName}</div></td>
      </tr>
      </div>
      </div>
    </tr>
  )
}

function FourthReceipt (props) {
  let {studentDetail} = props

  let data = studentDetail.schoolInfo.fee04_feeDate === '' ? <em style={{ visibility: 'hidden' }}>NO DATE ADDED YET</em> : studentDetail.schoolInfo.fee04_feeDate
  

  return studentDetail.schoolInfo.fee04_amount === ''
  ? <em style={{ paddingRight: '30rem', visibility: 'hidden' }}>No payment has been made for this period</em>
  : (
    <tr style={{ borderTop: '1px solid black', borderBottom: '1px solid black' }}>
      <div>
      <div style={{ border: '1px solid black', marginBottom: '3rem', marginTop: '3rem', marginRight: '15px', paddingLeft: '2rem', paddingTop: '2rem' }}>
      <tr>
        <td colSpan='2' style={styles.receiptHeader}>OFFICIAL RECEIPT</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left' }}>Receipt #: {studentDetail.schoolInfo.receipt4}</td>
        <td style={{ paddingLeft: '4rem', paddingRight: '30rem', display: 'inline'}}>Date: {data}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Received from: {studentDetail.schoolInfo.firstname}&nbsp;{studentDetail.schoolInfo.middlename}&nbsp;{studentDetail.schoolInfo.lastname}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Amount in words: {converter.toWords(studentDetail.schoolInfo.fee04_amount).toUpperCase() + ' Liberian Dollars'}</td>
      </tr>
      <tr>
        <td colSpan='2' style={styles.receiptStyles1}>Purpose: Fourth Installment Payment of Academic Year School Fees</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left',  paddingTop: '1.5rem', paddingBottom: '3rem' }}>Amount: {'$' + studentDetail.schoolInfo.fee04_amount + '.00 ' + 'LRD'}</td>
      </tr>
      <tr>
        <td colSpan='2' style={{ textAlign: 'left', visibility: 'hidden' }}>Receipt #: This text should be hidden</td>
        <td style={{ textAlign: 'center', paddingLeft: '2rem' }}><div style={{ borderTop: '1px solid black', width: '50%' }}>{props.user.fullName}</div></td>
      </tr>
      </div>
      </div>
    </tr>
  )
}

let styles = {
  receiptStyles: {
    textAlign: 'right',
    verticalAlign: 'middle',
    paddingTop: '5rem',
    paddingBottom: '3rem',
    width: '100%',
    display: 'flex',
    paddingLeft: '16rem'
  },
  receiptHeader: {
    textAlign: 'right',
    verticalAlign: 'middle',
    paddingBottom: '2rem',
    width: '100%',
    display: 'flex',
    paddingLeft: '16rem'
  },
  receiptStyles1: {
    textAlign: 'left',
    paddingTop: '1.5rem'
  },
  studentStyles: {
    paddingLeft: '4rem',
    textAlign: 'left',
    display: 'inline'
  }
}


function printDiv(id) {
  var newWin = window.frames['printf'];
  let printContents = document.getElementById('printMe').innerHTML;
  newWin.document.write('<body onload=window.print()>' + printContents + '</body>');
  newWin.document.close();

  }



