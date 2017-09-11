'use strict'

import { combineReducers } from 'redux'
import idsrCases from './idsrCases'
import syncState from './syncState'

export default combineReducers({
  idsrCases,
  syncState
})
