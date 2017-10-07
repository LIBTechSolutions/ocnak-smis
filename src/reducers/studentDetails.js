'use strict'

import { INSERT_CASE, UPDATE_CASE, DELETE_CASE } from '../constants/ActionTypes'

const initialState = []

export default function studentDetails (state = initialState, action) {
  switch (action.type) {
    case INSERT_CASE:
      return [
        action.studentDetail,
        ...state
      ]
    case UPDATE_CASE:
      return state.map(studentDetail =>
        studentDetail._id === action.studentDetail._id
          ? action.studentDetail
          : studentDetail
      )
    case DELETE_CASE:
      return state.filter(studentDetail =>
        studentDetail._id !== action.id
      )
    default:
      return state
  }
}
