'use strict'
import React from 'react'
import AppHome from './Grades/AppHome'
import GradeOne from './Grades/GradeOne'

export default class HomePage extends React.Component {

  render () {
    return (
      <div>
        <AppHome {...this.props} />
      </div>
    )
  }
}
