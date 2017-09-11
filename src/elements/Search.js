'use strict'

import React from 'react'

const FilterType = {
  word: 'word',
  district: 'district',
  date: 'date'
}

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      word: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    let {name, value} = evt.target
    let newState = Object.assign({}, this.state)
    newState[name] = value.trim()
    this.setState(newState)
    this.props.onSearch(newState)
  }

  render () {
    return (
      <div className='toolbar-search'>
        <i className='icon-search' />
        <input className='search-data' name={FilterType.word}
          type='text'
          placeholder='Search...'
          onChange={this.handleChange} />
      </div>
    )
  }
}
