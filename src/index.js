'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import PouchDB from 'pouchdb-browser'
import AppContainer from './containers/AppContainer'
import configureStore from './store/configureStore'
import config from '../config.json'

const schoolDb = new PouchDB(config.db.school.local)
const remoteSchoolDb = config.db.school.remote

let loadedData = {}
const initialBatchTracker = (name) => () => { loadedData[name] = true }
const store = configureStore(schoolDb, initialBatchTracker)

render(
  <Provider store={store}>
    <AppContainer
      schoolDb={schoolDb}
      remoteSchoolDb={remoteSchoolDb}
      config={config}
    />
  </Provider>,
  document.getElementById('main')
)
