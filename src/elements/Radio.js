'use strict'

import React from 'react'
import classnames from 'classnames'
import {optionsMapper} from '../utils'

export default class Radio extends React.Component {

  render () {
    const classes = classnames('options', this.props.className)
    const options = ('options' in this.props)
      ? this.props.options
      : this.props.getOptions(this.props.name).map(optionsMapper('code'))

    return (
      <div className={classnames({required: this.props.required})}>
        <div className={classes}>
          {options.map(this.radioButton.bind(this))}
          {this.props.children}
        </div>
      </div>
    )
  }

  radioButton (option, index) {
    let props = this.props
    const value = ('value' in props)
      ? props.value
      : props.getValue(props.name)

    return (
      <label key={index}>
        <input type='radio' name={props.name} onChange={props.onChange} checked={value === option.value} value={option.value} required={props.required} disabled={props.disabled} />
        {option.name}
      </label>
    )
  }
}
