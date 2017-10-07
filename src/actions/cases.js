'use strict'

import * as types from '../constants/ActionTypes'

export function insertCase (studentDetail) {
  return { type: types.INSERT_CASE, studentDetail }
}

export function updateCase (studentDetail) {
  return { type: types.UPDATE_CASE, studentDetail }
}

export function deleteCase (studentDetail) {
  return { type: types.DELETE_CASE, id: studentDetail._id }
}
