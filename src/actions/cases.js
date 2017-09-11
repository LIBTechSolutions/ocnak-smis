'use strict'

import * as types from '../constants/ActionTypes'

export function insertCase (idsrCase) {
  return { type: types.INSERT_CASE, idsrCase }
}

export function updateCase (idsrCase) {
  return { type: types.UPDATE_CASE, idsrCase }
}

export function deleteCase (idsrCase) {
  return { type: types.DELETE_CASE, id: idsrCase._id }
}
