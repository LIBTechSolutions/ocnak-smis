'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import PouchDB from 'pouchdb-browser'
import AppContainer from './containers/AppContainer'
import configureStore from './store/configureStore'
import config from '../config.json'

const caseDb = new PouchDB(config.db.case.local)
const remoteDb = config.db.case.remote

let loadedData = {}
const initialBatchTracker = (name) => () => { loadedData[name] = true }
const store = configureStore(caseDb, initialBatchTracker)

render(
  <Provider store={store}>
    <AppContainer
      caseDb={caseDb}
      remoteDb={remoteDb}
      config={config}
    />
  </Provider>,
  document.getElementById('main')
)
