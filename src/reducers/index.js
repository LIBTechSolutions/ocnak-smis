'use strict'

import { combineReducers } from 'redux'
import studentDetails from './studentDetails'
import syncState from './syncState'

export default combineReducers({
  studentDetails,
  syncState
})
