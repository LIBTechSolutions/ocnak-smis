import React from 'react'

export default class Select extends React.Component {
  render () {
    let props = this.props
    return (
      <div className='input'>
        <select name={props.name} onChange={props.onChange} value={props.value} required={props.required}>
          <option value='' disabled>Select</option>
          {props.options.map((value, index) => <option value={value} key={index}>{value}</option>)}
        </select>
        {props.children}
      </div>
    )
  }
}
