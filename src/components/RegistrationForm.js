'use strict'
import React from 'react'
import update from 'immutability-helper'
import FormToolbar from '../elements/FormToolbar'
import Registration from '../elements/Registration'
import GradeSection from '../elements/GradeSection'
import FeeSection from '../elements/FeeSection'
import AttendanceSection from '../elements/AttendanceSection'
import YesNoDialog from '../elements/YesNoDialog'
import {
  getstudentDetail,
  completeCase,
  getGradeInfo,
  getFeeInfo,
  getAttendanceInfo,
  MAX_GRADE_NUMBER,
  MAX_FEE_NUMBER,
  MAX_ATTENDANCE_NUMBER
} from '../studentDetail'

export default class RegistrationForm extends React.Component {
  constructor (props) {
    super(props)

    let studentDetail = getstudentDetail(this.props)
    let gradeInfo = getGradeInfo(studentDetail)
    let feeInfo = getFeeInfo(studentDetail)
    let attendanceInfo = getAttendanceInfo(studentDetail)
    this.state = {
      canSubmit: false,
      studentDetail: studentDetail,
      gradeInfos: gradeInfo.gradeInfos,
      feeInfos: feeInfo.feeInfos,
      attendanceInfos: attendanceInfo.attendanceInfos,
      nextGradeVisible: gradeInfo.nextVisible,
      nextFeeVisible: feeInfo.nextVisible,
      nextAttendanceVisible: attendanceInfo.nextVisible,
      canShowGrade: gradeInfo.canShowGrade,
      canShowFee: feeInfo.canShowFee,
      canShowAttendance: attendanceInfo.canShowAttendance,
      registerForm: true

    }
    this.submitCase = this.submitCase.bind(this)
    this.showGradeInfo = this.showGradeInfo.bind(this)
    this.showFeeInfo = this.showFeeInfo.bind(this)
    this.showAttendanceInfo = this.showAttendanceInfo.bind(this)
    this.updateDoc = this.updateDoc.bind(this)
    this.db = this.props.db
  }

  componentWillReceiveProps (nextProps) {
    // If a case in our state is updated by anything other than
    // saving it in the form page, reload it from list of cases
    if (!this.props.edit &&
        (nextProps.updateDoc === nextProps.docId ||
         this.props.docId !== nextProps.docId)) {
      const studentDetail = nextProps.docId
        ? this.props.studentDetails.find(({_id}) => _id === nextProps.docId)
        : getstudentDetail(nextProps)

      let gradeInfo = getGradeInfo(studentDetail)
      let feeInfo = getFeeInfo(studentDetail)
      let attendanceInfo = getAttendanceInfo(studentDetail)
      this.setState({
        studentDetail: studentDetail,
        gradeInfos: gradeInfo.gradeInfos,
        feeInfos: feeInfo.feeInfos,
        attendanceInfos: attendanceInfo.attendanceInfos,
        nextGradeVisible: gradeInfo.nextVisible,
        nextFeeVisible: feeInfo.nextVisible,
        nextAttendanceVisible: attendanceInfo.nextVisible,
        canShowGrade: gradeInfo.canShowGrade,
        canShowFee: feeInfo.canShowFee,
        canShowAttendance: attendanceInfo.canShowAttendance
      })
    }
  }

  updateDoc (dependentProps) {
    return (e) => {
      let key = e.target.name
      let value = e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value

      this.setState((prevState, props) => {
        let studentDetail = {
          schoolInfo: {
            [key]: {$set: value}
          }
        }

        if (typeof dependentProps === 'function') {
          let calculatedProps = dependentProps(value)
          for (let prop in calculatedProps) {
            studentDetail.schoolInfo[prop] = {$set: calculatedProps[prop]}
          }
        } else {
          for (let prop in dependentProps) {
            studentDetail.schoolInfo[prop] = {$set: dependentProps[prop](value)}
          }
        }

        return update(prevState, {studentDetail, hasChanged: {$set: true}})
      })
      this.props.toggleHasChanged()
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const canSubmit = this.canSubmit()
    if (prevState.canSubmit !== canSubmit) {
      this.setState({canSubmit})
    }
  }

  submitCase (event) {
    event.preventDefault()

    const studentDetail = completeCase(this.state.studentDetail)
    this.props.saveCase(studentDetail)
  }

  // A form is submittable if it's in edit mode, has changes and is valid
  canSubmit () {
    return this.form
      ? this.props.edit && this.props.hasChanged && this.form.checkValidity()
      : false
  }

  showGradeInfo () {
    let gradeInfos = [...this.state.gradeInfos]
    let nextGradeVisible = this.state.nextGradeVisible + 1
    gradeInfos[this.state.nextGradeVisible].hidden = false
    this.setState({
      gradeInfos: gradeInfos,
      nextGradeVisible: nextGradeVisible,
      canShowGrade: nextGradeVisible < MAX_GRADE_NUMBER
    })
  }

  showFeeInfo () {
    let feeInfos = [...this.state.feeInfos]
    let nextFeeVisible = this.state.nextFeeVisible + 1
    feeInfos[this.state.nextFeeVisible].hidden = false
    this.setState({
      feeInfos: feeInfos,
      nextFeeVisible: nextFeeVisible,
      canShowFee: nextFeeVisible < MAX_FEE_NUMBER
    })
  }

  showAttendanceInfo () {
    let attendanceInfos = [...this.state.attendanceInfos]
    let nextAttendanceVisible = this.state.nextAttendanceVisible + 1
    attendanceInfos[this.state.nextAttendanceVisible].hidden = false
    this.setState({
      attendanceInfos: attendanceInfos,
      nextAttendanceVisible: nextAttendanceVisible,
      canShowAttendance: nextAttendanceVisible < MAX_ATTENDANCE_NUMBER
    })
  }

  render () {
    let props = this.props
    let {
      user,
      toggleEdit,
      confirmClose,
      isNewCase,
      edit,
      savedStatusVisible,
      confirmCloseDialogVisible
    } = props

    let {
      studentDetail,
      gradeInfos,
      feeInfos,
      attendanceInfos,
      canShowGrade,
      canShowFee,
      canShowAttendance} = this.state

    const canCreateRegistration = this.props.user.role !== 'teacher'  && this.props.user.role !== 'administrator'
    const canCreateGrade = this.props.user.role !== 'teacher' && this.props.user.role !== 'registrar'
    const canCreateFee = this.props.user.role !== 'administrator' && this.props.user.role !== 'teacher'
    const canCreateAtendance = this.props.user.role !== 'administrator' && this.props.user.role !== 'registrar'

    return (
      <div className='student'>
        <div className='student-form'>
          <div className='eidsr-form'>
            <form action='' onSubmit={this.submitCase} ref={form => { this.form = form }}>
              <FormToolbar
                isNewCase={isNewCase}
                canSubmit={this.state.canSubmit}
                edit={edit}
                toggleEdit={toggleEdit}
                confirmClose={confirmClose}
                {...studentDetail.schoolInfo} />
              <div className='eidsr-form__container' ref={container => { this.container = container }}>
                {savedStatusVisible && this.savedStatus()}
                {confirmCloseDialogVisible && this.confirmCloseDialog()}
                {canCreateRegistration && <Registration
                  edit={edit}
                  handleChange={this.updateDoc}
                  user={user}
                  {...studentDetail.schoolInfo} />}
                {canCreateGrade && <GradeSection
                  edit={edit}
                  handleChange={this.updateDoc}
                  grades={gradeInfos}
                  canShowGrade={canShowGrade}
                  handleShow={this.showGradeInfo}
                  {...studentDetail.schoolInfo} />}
                {canCreateFee && <FeeSection
                  edit={edit}
                  handleChange={this.updateDoc}
                  fees={feeInfos}
                  canShowFee={canShowFee}
                  handleShow={this.showFeeInfo}
                  {...studentDetail.schoolInfo} />}
                {canCreateAtendance && <AttendanceSection
                  edit={edit}
                  handleChange={this.updateDoc}
                  attendances={attendanceInfos}
                  canShowAttendance={canShowAttendance}
                  handleShow={this.showAttendanceInfo}
                  {...studentDetail.schoolInfo} />}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  confirmCloseDialog () {
    const {docId} = this.state.studentDetail.schoolInfo
    console.log(docId)
    const title = <span>You didn't save your changes. Do you want to keep editing {!!docId && <em>ID {docId}</em>}?</span>

    return (
      <YesNoDialog title={title}
        confirm={this.props.cancelClose}
        abort={this.props.closeForm}
        confirmText='I want to keep editing.'
        abortText='All my changes will be lost.' />
    )
  }

  savedStatus () {
    return this.props.isNewCase
      ? (<div className='alert-success'>Info saved.<button onClick={this.props.createCase} className='btn btn--flat'><i className='icon-add' />Add another Info</button></div>)
      : (<div className='alert-success'>Info updated.</div>)
  }

}
