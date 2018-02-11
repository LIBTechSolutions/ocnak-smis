
'use strict'

import React from 'react'
import Print from 'rc-print'
import ProfileTool from '../../elements/ProfileTool'

export default function GradeThree (props) {
  let {closeProfile} = props
  const complete = props.studentDetails.filter(studentDetail => !!studentDetail.schoolInfo && !!studentDetail.complete && studentDetail.schoolInfo.class === 'Grade Three')

  return (
    <div className='student-profile'>
      <div className='student-data'>
        <ProfileTool closeProfile={closeProfile} />
        <h4>Student Gradesheet</h4>
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
            <td colSpan='2'><button className='btn' type='button' onClick={this.nextPage} disabled={!this.hasNextPage()}>Next</button></td>
            <td colSpan='7' style={{textAlign: 'right'}}><button className='btn' style={{ marginLeft: '58rem' }} type='button' onClick={() => printDiv() }><i className='fa fa-print fa-2x' aria-hidden='true' /></button></td>
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
          <table style={styles.tableStyle}>
            <div style={{ marginRight: '100px', marginBottom: '75px' }}>
              <tbody>
                {docs.map((studentDetail) => <NameDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
                {docs.map((studentDetail) => <IdDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
                {docs.map((studentDetail) => <GradeDataRow key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
                
                
              </tbody>
            </div>
            <br />
            <div style={{ marginLeft: '100px', paddingRight: '10rem', paddingBottom: '3rem' }}>
            <tbody style={{border: '1px solid black'}}>
            {docs.map((studentDetail) => <GradeSheetHeader key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <Bible key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}            
            {docs.map((studentDetail) => <MathSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}            
            {docs.map((studentDetail) => <EnglishSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <GeneralScienceSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}            
            {docs.map((studentDetail) => <SocialStudiesSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <HealthScienceSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <ReadingSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <SpellingSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <PhonicsSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}            
            {docs.map((studentDetail) => <WritingSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <PhysicalEducationSubject key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}
            {docs.map((studentDetail) => <PeriodAverage key={studentDetail._id} studentDetail={studentDetail} {...this.props} />)}            
            </tbody>
            </div>
          </table>
        </div>
        <div style={styles.tableStyle}>
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
      <td style={styles.titlePadding}>Name:</td>
      <td style={styles.name}>{studentDetail.schoolInfo.firstname}&nbsp;{studentDetail.schoolInfo.middlename}&nbsp;{studentDetail.schoolInfo.lastname}</td>
    </tr>
  )
}

function IdDataRow (props) {
  let {studentDetail} = props

  return (
    <tr style={styles.separate}>
      <td style={styles.titlePadding}>ID:</td>
      <td>{studentDetail.schoolInfo.studentID}</td>
    </tr>
  )
}

function GradeDataRow (props) {
  let {studentDetail} = props

  return (
    <tr style={styles.separate}>
      <td style={styles.titlePadding}>Class:</td>
      <td style={styles.classPadding}>{studentDetail.schoolInfo.class}</td>
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
        <td >{'$' + totalFeePaid + '.00'}</td>
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
      <td>{'$' + balanceFee + '.00'}</td>
    </tr>
  )
}


function GradeSheetHeader (props) {
  let {studentDetail} = props
  
  return (
    <tr style={styles.fontStyle}>
      <td style={styles.titleStyle}>Subjects</td>
      <td style={styles.headerTitleStyle}>1<sup>st</sup><br/> Period</td>
      <td style={styles.subTitleStyle}>2<sup>nd</sup><br/> Period</td>
      <td style={styles.subTitleStyle}>3<sup>rd</sup><br/> Period</td>
      <td style={styles.headerTitleStyle}>1<sup>st</sup><br/> Sem. Exam</td>
      <td style={styles.headerTitleStyle}>Avg</td>
      <td style={styles.headerTitleStyle}>4<sup>th</sup><br/> Period</td>
      <td style={styles.headerTitleStyle}>5<sup>th</sup><br/> Period</td>
      <td style={styles.headerTitleStyle}>6<sup>th</sup><br/>Period</td>
      <td style={styles.headerTitleStyle}>2<sup>nd</sup><br/>Sem. Exam</td>
      <td style={styles.headerTitleStyle}>Avg</td>
      <td style={styles.headerTitleStyle}>Yearly<br/> Avg</td>
    </tr>
  )
}

function Bible (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_bible, studentDetail.schoolInfo.grade02_bible,
    studentDetail.schoolInfo.grade03_bible, studentDetail.schoolInfo.grade04_bible].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_bible, studentDetail.schoolInfo.grade06_bible,
    studentDetail.schoolInfo.grade07_bible, studentDetail.schoolInfo.grade08_bible].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>Bible</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_bible}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_bible}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_bible}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_bible}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_bible}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_bible}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_bible}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_bible}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}

function MathSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_math, studentDetail.schoolInfo.grade02_math,
    studentDetail.schoolInfo.grade03_math, studentDetail.schoolInfo.grade04_math].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_math, studentDetail.schoolInfo.grade06_math,
    studentDetail.schoolInfo.grade07_math, studentDetail.schoolInfo.grade08_math].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>Math</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_math}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_math}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_math}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_math}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_math}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_math}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_math}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_math}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}

function EnglishSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_english, studentDetail.schoolInfo.grade02_english,
    studentDetail.schoolInfo.grade03_english, studentDetail.schoolInfo.grade04_english].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_english, studentDetail.schoolInfo.grade06_english,
    studentDetail.schoolInfo.grade07_english, studentDetail.schoolInfo.grade08_english].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>English</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_english}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_english}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_english}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_english}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_english}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_english}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_english}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_english}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}

function GeneralScienceSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_generalScience, studentDetail.schoolInfo.grade02_generalScience,
    studentDetail.schoolInfo.grade03_generalScience, studentDetail.schoolInfo.grade04_generalScience].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_generalScience, studentDetail.schoolInfo.grade06_generalScience,
    studentDetail.schoolInfo.grade07_generalScience, studentDetail.schoolInfo.grade08_generalScience].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>General Science</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_generalScience}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_generalScience}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_generalScience}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_generalScience}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_generalScience}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_generalScience}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_generalScience}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_generalScience}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}


function SocialStudiesSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_socialStudies, studentDetail.schoolInfo.grade02_socialStudies,
    studentDetail.schoolInfo.grade03_socialStudies, studentDetail.schoolInfo.grade04_socialStudies].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_socialStudies, studentDetail.schoolInfo.grade06_socialStudies,
    studentDetail.schoolInfo.grade07_socialStudies, studentDetail.schoolInfo.grade08_socialStudies].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>Social Studies</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_socialStudies}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_socialStudies}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_socialStudies}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_socialStudies}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_socialStudies}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_socialStudies}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_socialStudies}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_socialStudies}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}



function HealthScienceSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_healthScience, studentDetail.schoolInfo.grade02_healthScience,
    studentDetail.schoolInfo.grade03_healthScience, studentDetail.schoolInfo.grade04_healthScience].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_healthScience, studentDetail.schoolInfo.grade06_healthScience,
    studentDetail.schoolInfo.grade07_healthScience, studentDetail.schoolInfo.grade08_healthScience].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>Health Science</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_healthScience}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_healthScience}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_healthScience}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_healthScience}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_healthScience}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_healthScience}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_healthScience}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_healthScience}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}

function ReadingSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_reading, studentDetail.schoolInfo.grade02_reading,
    studentDetail.schoolInfo.grade03_reading, studentDetail.schoolInfo.grade04_reading].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_reading, studentDetail.schoolInfo.grade06_reading,
    studentDetail.schoolInfo.grade07_reading, studentDetail.schoolInfo.grade08_reading].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>Reading</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_reading}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_reading}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_reading}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_reading}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_reading}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_reading}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_reading}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_reading}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}

function SpellingSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_spelling, studentDetail.schoolInfo.grade02_spelling,
    studentDetail.schoolInfo.grade03_spelling, studentDetail.schoolInfo.grade04_spelling].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_spelling, studentDetail.schoolInfo.grade06_spelling,
    studentDetail.schoolInfo.grade07_spelling, studentDetail.schoolInfo.grade08_spelling].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>Spelling</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_spelling}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_spelling}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_spelling}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_spelling}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_spelling}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_spelling}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_spelling}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_spelling}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}


function PhonicsSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_phonics, studentDetail.schoolInfo.grade02_phonics,
    studentDetail.schoolInfo.grade03_phonics, studentDetail.schoolInfo.grade04_phonics].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_phonics, studentDetail.schoolInfo.grade06_phonics,
    studentDetail.schoolInfo.grade07_phonics, studentDetail.schoolInfo.grade08_phonics].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>Phonics</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_phonics}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_phonics}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_phonics}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_phonics}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_phonics}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_phonics}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_phonics}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_phonics}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}

function WritingSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_writing, studentDetail.schoolInfo.grade02_writing,
    studentDetail.schoolInfo.grade03_writing, studentDetail.schoolInfo.grade04_writing].map(Number)

var peSemAverage2 = [studentDetail.schoolInfo.grade05_writing, studentDetail.schoolInfo.grade06_writing,
    studentDetail.schoolInfo.grade07_writing, studentDetail.schoolInfo.grade08_writing].map(Number)

function getSum (total, num) {
return total + num
}

function getAverage (total, num) {
return total / num
}


let semAverage1 = peSemAverage1.reduce(getSum)
let peAverage1 = [semAverage1, peSemAverage1.length]
let peGradeAverage1 = peAverage1.reduce(getAverage)
let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

let semAverage2 = peSemAverage2.reduce(getSum)
let peAverage2 = [semAverage2, peSemAverage2.length]
let peGradeAverage2 = peAverage2.reduce(getAverage)
let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

let yrAverage = peFinalAverage1 + peFinalAverage2
let peYrAverage = yrAverage / 2 
let finalyrAverage = Math.round(peYrAverage * 10) / 10
  
  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>Writing</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_writing}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_writing}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_writing}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_writing}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_writing}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_writing}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_writing}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_writing}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}

function PhysicalEducationSubject (props) {
  let {studentDetail} = props

  var peSemAverage1 = [studentDetail.schoolInfo.grade01_physicalEducation, studentDetail.schoolInfo.grade02_physicalEducation,
                      studentDetail.schoolInfo.grade03_physicalEducation, studentDetail.schoolInfo.grade04_physicalEducation].map(Number)
  
  var peSemAverage2 = [studentDetail.schoolInfo.grade05_physicalEducation, studentDetail.schoolInfo.grade06_physicalEducation,
                      studentDetail.schoolInfo.grade07_physicalEducation, studentDetail.schoolInfo.grade08_physicalEducation].map(Number)
  
  function getSum (total, num) {
    return total + num
  }

  function getAverage (total, num) {
    return total / num
  }


  let semAverage1 = peSemAverage1.reduce(getSum)
  let peAverage1 = [semAverage1, peSemAverage1.length]
  let peGradeAverage1 = peAverage1.reduce(getAverage)
  let peFinalAverage1 = Math.round(peGradeAverage1 * 10) / 10

  let semAverage2 = peSemAverage2.reduce(getSum)
  let peAverage2 = [semAverage2, peSemAverage2.length]
  let peGradeAverage2 = peAverage2.reduce(getAverage)
  let peFinalAverage2 = Math.round(peGradeAverage2 * 10) / 10

  let yrAverage = peFinalAverage1 + peFinalAverage2
  let peYrAverage = yrAverage / 2 
  let finalyrAverage = Math.round(peYrAverage * 10) / 10

  return (
    <tr style={styles.subFontStyle}>
      <td style={styles.titleStyle}>Physical Education</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade01_physicalEducation}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade02_physicalEducation}</td>
      <td style={styles.subTitleStyle}>{studentDetail.schoolInfo.grade03_physicalEducation}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade04_physicalEducation}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage1}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade05_physicalEducation}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade06_physicalEducation}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade07_physicalEducation}</td>
      <td style={styles.headerTitleStyle}>{studentDetail.schoolInfo.grade08_physicalEducation}</td>
      <td style={styles.headerTitleStyle}>{peFinalAverage2}</td>
      <td style={styles.headerTitleStyle}>{finalyrAverage}</td>
    </tr>
  )
}

function PeriodAverage (props) {
  let {studentDetail} = props

  var periodOne = [studentDetail.schoolInfo.grade01_bible, studentDetail.schoolInfo.grade01_math, studentDetail.schoolInfo.grade01_english, studentDetail.schoolInfo.grade01_generalScience, studentDetail.schoolInfo.grade01_socialStudies, studentDetail.schoolInfo.grade01_healthScience, studentDetail.schoolInfo.grade01_reading, studentDetail.schoolInfo.grade01_spelling, studentDetail.schoolInfo.grade01_phonics, studentDetail.schoolInfo.grade01_writing, studentDetail.schoolInfo.grade01_physicalEducation ].map(Number)
  
  var periodTwo = [studentDetail.schoolInfo.grade02_bible, studentDetail.schoolInfo.grade02_math, studentDetail.schoolInfo.grade02_english, studentDetail.schoolInfo.grade02_generalScience, studentDetail.schoolInfo.grade02_socialStudies, studentDetail.schoolInfo.grade02_healthScience, studentDetail.schoolInfo.grade02_reading, studentDetail.schoolInfo.grade02_spelling, studentDetail.schoolInfo.grade02_phonics, studentDetail.schoolInfo.grade02_writing, studentDetail.schoolInfo.grade02_physicalEducation ].map(Number)
  
  var periodThree = [studentDetail.schoolInfo.grade03_bible, studentDetail.schoolInfo.grade03_math, studentDetail.schoolInfo.grade03_english, studentDetail.schoolInfo.grade03_generalScience, studentDetail.schoolInfo.grade03_socialStudies, studentDetail.schoolInfo.grade03_healthScience, studentDetail.schoolInfo.grade03_reading, studentDetail.schoolInfo.grade03_spelling, studentDetail.schoolInfo.grade03_phonics, studentDetail.schoolInfo.grade03_writing, studentDetail.schoolInfo.grade03_physicalEducation ].map(Number)
  
  var periodFour = [studentDetail.schoolInfo.grade04_bible, studentDetail.schoolInfo.grade04_math, studentDetail.schoolInfo.grade04_english, studentDetail.schoolInfo.grade04_generalScience, studentDetail.schoolInfo.grade04_socialStudies, studentDetail.schoolInfo.grade04_healthScience, studentDetail.schoolInfo.grade04_reading, studentDetail.schoolInfo.grade04_spelling, studentDetail.schoolInfo.grade04_phonics, studentDetail.schoolInfo.grade04_writing, studentDetail.schoolInfo.grade04_physicalEducation ].map(Number)
  
    var periodFive = [studentDetail.schoolInfo.grade05_bible, studentDetail.schoolInfo.grade05_math, studentDetail.schoolInfo.grade05_english, studentDetail.schoolInfo.grade05_generalScience, studentDetail.schoolInfo.grade05_socialStudies, studentDetail.schoolInfo.grade05_healthScience, studentDetail.schoolInfo.grade05_reading, studentDetail.schoolInfo.grade05_spelling, studentDetail.schoolInfo.grade05_phonics, studentDetail.schoolInfo.grade05_writing, studentDetail.schoolInfo.grade05_physicalEducation ].map(Number)
    
    var periodSix = [studentDetail.schoolInfo.grade06_bible, studentDetail.schoolInfo.grade06_math, studentDetail.schoolInfo.grade06_english, studentDetail.schoolInfo.grade06_generalScience, studentDetail.schoolInfo.grade06_socialStudies, studentDetail.schoolInfo.grade06_healthScience, studentDetail.schoolInfo.grade06_reading, studentDetail.schoolInfo.grade06_spelling, studentDetail.schoolInfo.grade06_phonics, studentDetail.schoolInfo.grade06_writing, studentDetail.schoolInfo.grade06_physicalEducation ].map(Number)
    
    var periodSeven = [studentDetail.schoolInfo.grade07_bible, studentDetail.schoolInfo.grade07_math, studentDetail.schoolInfo.grade07_english, studentDetail.schoolInfo.grade07_generalScience, studentDetail.schoolInfo.grade07_socialStudies, studentDetail.schoolInfo.grade07_healthScience, studentDetail.schoolInfo.grade07_reading, studentDetail.schoolInfo.grade07_spelling, studentDetail.schoolInfo.grade07_phonics, studentDetail.schoolInfo.grade07_writing, studentDetail.schoolInfo.grade07_physicalEducation ].map(Number)

      var periodEight = [studentDetail.schoolInfo.grade08_bible, studentDetail.schoolInfo.grade08_math, studentDetail.schoolInfo.grade01_english, studentDetail.schoolInfo.grade08_generalScience, studentDetail.schoolInfo.grade08_socialStudies, studentDetail.schoolInfo.grade08_healthScience, studentDetail.schoolInfo.grade08_reading, studentDetail.schoolInfo.grade08_spelling, studentDetail.schoolInfo.grade08_phonics, studentDetail.schoolInfo.grade08_writing, studentDetail.schoolInfo.grade01_physicalEducation ].map(Number)
      

  function getSum (total, num) {
    return total + num
  }

  function getAverage (total, num) {
    return total / num
  }



  let totalGrade1 = periodOne.reduce(getSum)
  let average1 = [totalGrade1, periodOne.length]
  let gradeAverage1 = average1.reduce(getAverage)
  let finalAverage1 = Math.round(gradeAverage1 * 10) / 10

  let totalGrade2 = periodTwo.reduce(getSum)
  let average2 = [totalGrade2, periodTwo.length]
  let gradeAverage2 = average2.reduce(getAverage)
  let finalAverage2 = Math.round(gradeAverage2 * 10) / 10

  let totalGrade3 = periodThree.reduce(getSum)
  let average3 = [totalGrade3, periodThree.length]
  let gradeAverage3 = average3.reduce(getAverage)
  let finalAverage3 = Math.round(gradeAverage3 * 10) / 10

  let totalGrade4 = periodFour.reduce(getSum)
  let average4 = [totalGrade4, periodFour.length]
  let gradeAverage4 = average4.reduce(getAverage)
  let finalAverage4 = Math.round(gradeAverage4 * 10) / 10

  let firstSemAvg1 = finalAverage1 + finalAverage2 + finalAverage3 + finalAverage4
  let firstSemAvgdata1 = firstSemAvg1 / 4
  let firstSemFinalAvg1 = Math.round(firstSemAvgdata1 * 10) / 10

  let totalGrade5 = periodFive.reduce(getSum)
  let average5 = [totalGrade5, periodFive.length]
  let gradeAverage5 = average5.reduce(getAverage)
  let finalAverage5 = Math.round(gradeAverage5 * 10) / 10

  let totalGrade6 = periodSix.reduce(getSum)
  let average6 = [totalGrade6, periodSix.length]
  let gradeAverage6 = average6.reduce(getAverage)
  let finalAverage6 = Math.round(gradeAverage6 * 10) / 10

  let totalGrade7 = periodSeven.reduce(getSum)
  let average7 = [totalGrade7, periodSeven.length]
  let gradeAverage7 = average7.reduce(getAverage)
  let finalAverage7 = Math.round(gradeAverage7 * 10) / 10

  let totalGrade8 = periodEight.reduce(getSum)
  let average8 = [totalGrade8, periodEight.length]
  let gradeAverage8 = average8.reduce(getAverage)
  let finalAverage8 = Math.round(gradeAverage8 * 10) / 10

  let firstSemAvg2 = finalAverage5 + finalAverage6 + finalAverage7 + finalAverage8
  let firstSemAvgdata2 = firstSemAvg2 / 4
  let firstSemFinalAvg2 = Math.round(firstSemAvgdata2 * 10) / 10

  let yearlyAvg = firstSemFinalAvg1 + firstSemFinalAvg2
  let avgYearly = yearlyAvg / 2
  let finalYearlyAvg = Math.round(avgYearly * 10) / 10
  
  return (
    <tr style={styles.fontStyle}>
      <td style={styles.titleStyle}>Average</td>
      <td style={styles.headerTitleStyle}>{finalAverage1}</td>
      <td style={styles.subTitleStyle}>{finalAverage2}</td>
      <td style={styles.subTitleStyle}>{finalAverage3}</td>
      <td style={styles.headerTitleStyle}>{finalAverage4}</td>
      <td style={styles.headerTitleStyle}>{firstSemFinalAvg1}</td>
      <td style={styles.headerTitleStyle}>{finalAverage5}</td>
      <td style={styles.headerTitleStyle}>{finalAverage6}</td>
      <td style={styles.headerTitleStyle}>{finalAverage7}</td>
      <td style={styles.headerTitleStyle}>{finalAverage8}</td>
      <td style={styles.headerTitleStyle}>{firstSemFinalAvg2}</td>
      <td style={styles.headerTitleStyle}>{finalYearlyAvg}</td>
    </tr>
  )
}



function printDiv(id) {
  var newWin = window.frames['printf'];
  let printContents = document.getElementById('printMe').innerHTML;
  newWin.document.write('<body onload=window.print()>' + printContents + '</body>');
  newWin.document.close();

  }

  let styles = {
    titleStyle: {
      paddingLeft: '1rem',
      border: '1px solid black',
      paddingRight: '0.5rem'
    },
    subTitleStyle: {
      paddingLeft: '1rem',
      paddingLeft: '1rem',
      border: '1px solid black',
      paddingRight: '0.5rem'
    },
    headerTitleStyle: {
      paddingLeft: '1rem',
      border: '1px solid black',
      paddingRight: '0.5rem'
    },
    fontStyle: {
      fontSize: '13px',
      fontWeight: 'bold'
    },
    subFontStyle: {
      fontSize: '13px'
    },
    tableStyle: {
      marginLeft: '1rem'
    },
    separate: {
      borderTop: '1px solid rgb(221, 221, 221)'
    },
    titlePadding: {
      paddingLeft: '2rem',
      paddingRight: '4rem',
    },
    classPadding: {
      position: 'absolute'
    },
    name: {
      position: 'absolute',
      fontSize: '16px',
      fontWeight: 'bold'
    }
  };

  