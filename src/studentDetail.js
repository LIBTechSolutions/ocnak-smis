import { generateId, receiptId } from './utils'
import { toIndexableString } from 'pouchdb-collate'
import uuid from 'uuid/v4'

export const MAX_GRADE_NUMBER = 8
export const MAX_FEE_NUMBER = 4
export const MAX_ATTENDANCE_NUMBER = 200

const GradeFields = ['semester', 'period', 'math', 'english', 'healthScience', 'phonics',
  'spelling', 'writing', 'drawing', 'reading', 'socialStudies', 'generalScience',
  'physicalEducation', 'spanish'
]

const FeeFields = ['semester', 'installment', 'grade', 'amount', 'feeDate']

const AttendanceFields = ['day', 'attendance', 'attendanceDate']

export function getstudentDetail ({user}) {
  let schoolModel = {
    id: uuid(),
    user: user.user,
    created: new Date().getTime(),
    regID: generateId(),
    schoolInfo: {
      docId: generateId(),
      studentID: generateId(),
      receipt1: receiptId(),
      receipt2: receiptId(),
      receipt3: receiptId(),
      receipt4: receiptId(),
      firstname: '',
      middlename: '',
      lastname: '',
      dob: '',
      gender: '',
      placeOfBirth: '',
      nationality: '',
      class: '',
      previousSchoolAttended: '',
      studentLivesWith: '',
      parentGuardianLastName: '',
      parentGuardianFirstName: '',
      relationship: '',
      parentGuardianPhone: '',
      enrollmentStatus: '',
      totalFee: ''
    }
  }

  let gradeInfo = {}
  for (var i = 0; i < MAX_GRADE_NUMBER; i++) {
    gradeInfo = GradeFields.reduce((info, field) => {
      info[getGradeFieldName(i, field)] = ''
      return info
    }, gradeInfo)
  }

  let feeInfo = {}
  for (var i = 0; i < MAX_FEE_NUMBER; i++) {
    feeInfo = FeeFields.reduce((info, field) => {
      info[getFeeFieldName(i, field)] = ''
      return info
    }, feeInfo)
  }

  let attendanceInfo = {}
  for (var i = 0; i < AttendanceFields; i++) {
    attendanceInfo = AttendanceFields.reduce((info, field) => {
      info[getAttendanceFieldName(i, field)] = ''
      return info
    }, attendanceInfo)
  }

  return Object.assign({}, schoolModel, {
    schoolInfo: Object.assign({}, schoolModel.schoolInfo, gradeInfo, feeInfo, attendanceInfo)
  })
}

export function getGradeTitle (index) {
  return 'grade ' + ('0' + (index + 1)).slice(-2)
}

export function getFeeTitle (index) {
  return 'fee ' + ('0' + (index + 1)).slice(-2)
}

export function getAttendanceTitle (index) {
  return 'attendance ' + ('0' + (index + 1)).slice(-2)
}

export function getGradePrefix (index) {
  return getGradeTitle(index).toLowerCase().replace(/\s/g, '') + '_'
}

export function getFeePrefix (index) {
  return getFeeTitle(index).toLowerCase().replace(/\s/g, '') + '_'
}

export function getAttendancePrefix (index) {
  return getAttendanceTitle(index).toLowerCase().replace(/\s/g, '') + '_'
}

export function getGradeFieldName (index, field) {
  return getGradePrefix(index) + field
}

export function getFeeFieldName (index, field) {
  return getFeePrefix(index) + field
}

export function getAttendanceFieldName (index, field) {
  return getAttendancePrefix(index) + field
}

export function mapGradeFromInfo (studentDetail) {
  let grades = []
  for (var i = 0; i < MAX_GRADE_NUMBER; i++) {
    grades.push({
      index: i,
      title: getGradeTitle(i),
      prefix: getGradePrefix(i),
      hidden: i !== 0
    })
  }
  return grades
}

export function mapFeeFromInfo (studentDetail) {
  let fees = []
  for (var i = 0; i < MAX_FEE_NUMBER; i++) {
    fees.push({
      index: i,
      title: getFeeTitle(i),
      prefix: getFeePrefix(i),
      hidden: i !== 0
    })
  }
  return fees
}

export function mapAttendanceFromInfo (studentDetail) {
  let attendances = []
  for (var i = 0; i < MAX_ATTENDANCE_NUMBER; i++) {
    attendances.push({
      index: i,
      title: getAttendanceTitle(i),
      prefix: getAttendancePrefix(i),
      hidden: i !== 0
    })
  }
  return attendances
}

export function getGradeInfo (studentDetail) {
  let gradeInfos = mapGradeFromInfo(studentDetail)
  let nextVisible = 0
  gradeInfos.some((grade, index) => {
    nextVisible = index
    return grade.hidden
  })
  return {
    gradeInfos: gradeInfos,
    nextVisible: nextVisible,
    canShowGrade: nextVisible < MAX_GRADE_NUMBER
  }
}

export function getFeeInfo (studentDetail) {
  let feeInfos = mapFeeFromInfo(studentDetail)
  let nextVisible = 0
  feeInfos.some((fee, index) => {
    nextVisible = index
    return fee.hidden
  })
  return {
    feeInfos: feeInfos,
    nextVisible: nextVisible,
    canShowFee: nextVisible < MAX_FEE_NUMBER
  }
}

export function getAttendanceInfo (studentDetail) {
  let attendanceInfos = mapAttendanceFromInfo(studentDetail)
  let nextVisible = 0
  attendanceInfos.some((attendance, index) => {
    nextVisible = index
    return attendance.hidden
  })
  return {
    attendanceInfos: attendanceInfos,
    nextVisible: nextVisible,
    canShowAttendance: nextVisible < MAX_ATTENDANCE_NUMBER
  }
}

export function getSISId (studentDetail) {
  const info = studentDetail.schoolInfo
  return `${info.docId} - ${studentDetail.regID} - ${studentDetail.created}`
}

export function getId (studentDetail) {
  return toIndexableString([
    studentDetail.regID,
    studentDetail.created,
    studentDetail.schoolInfo.docId
  ]).replace(/\u0000/g, '\u0001')
}

export function completeCase (studentDetail) {
  const id = studentDetail._id || getId(studentDetail)

  return Object.assign({_id: id}, studentDetail, {
    schoolInfo: Object.assign({sisId: getSISId(studentDetail)}, studentDetail.schoolInfo),
    complete: true,
    processEdit: true
  })
}
