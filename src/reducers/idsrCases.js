'use strict'

import { INSERT_CASE, UPDATE_CASE, DELETE_CASE } from '../constants/ActionTypes'

const initialState = []

export default function idsrCases (state = initialState, action) {
  switch (action.type) {
    case INSERT_CASE:
      return [
        action.idsrCase,
        ...state
      ]
    case UPDATE_CASE:
      return state.map(idsrCase =>
        idsrCase._id === action.idsrCase._id
          ? action.idsrCase
          : idsrCase
      )
    case DELETE_CASE:
      return state.filter(idsrCase =>
        idsrCase._id !== action.id
      )
    default:
      return state
  }
}
