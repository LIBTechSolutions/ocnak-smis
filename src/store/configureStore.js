'use strict'

import PouchMiddleware from 'pouch-redux-middleware'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { insertCase, updateCase, deleteCase } from '../actions/cases'

export default function configureStore (caseDb, initialBatchTracker) {
  const pouchMiddleware = PouchMiddleware([{
    path: '/studentDetails',
    db: caseDb,
    actions: {
      insert: insertCase,
      update: updateCase,
      remove: deleteCase
    },
    initialBatchDispatched: initialBatchTracker('studentDetails')
  }])

  const store = createStore(
    reducer,
    undefined,
    applyMiddleware(pouchMiddleware)
  )

  return store
}
