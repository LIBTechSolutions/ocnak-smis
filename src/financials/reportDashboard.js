'use strict'
import React from 'react'
import Finance from './AppHome'

export default class HomePage extends React.Component {

  render () {
    return (
      <div>
        <Finance {...this.props} />
      </div>
    )
  }
}
