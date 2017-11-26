'use strict'

import React, {Component} from 'react'
import Select from './Select'
import config from '../../config.json'
import {getFeeFieldName} from '../studentDetail'

export default class Fee extends Component {

  render () {
    let props = this.props
    let {edit} = props
    let handleChange = props.handleChange()
    let fieldName = (name) => {
      return getFeeFieldName(props.index, name)
    }

    return (
      <div>
        <legend>{props.title}</legend>
        <div>
          <div className='form-row'>
            <label>Semester</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name={fieldName('semester')}
                  value={'First Semester'}
                  type='radio'
                  checked={(props[fieldName('semester')] === 'First Semester')}
                  key={1}
                  onChange={handleChange}
                />
              First Semester
            </label>
              <label>
                <input name={fieldName('semester')}
                  value={'Second Semester'}
                  type='radio'
                  checked={(props[fieldName('semester')] === 'Second Semester')}
                  key={2}
                  onChange={handleChange}
                />
              Second Semester
             </label>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='form-row'>
              <label>Installment</label>
            </div>
            <div className='form-row'>
              <div className='gender'>
                <label>
                  <input name={fieldName('installment')}
                    value={'First Installment'}
                    type='radio'
                    checked={(props[fieldName('installment')] === 'First Installment')}
                    key={1}
                    onChange={handleChange}
           />
         First Installment
           </label>
                <label>
                  <input name={fieldName('installment')}
                    value={'Second Installment'}
                    type='radio'
                    checked={(props[fieldName('installment')] === 'Second Installment')}
                    key={2}
                    onChange={handleChange}
           />
         Second Installment
           </label>
                <label>
                  <input name={fieldName('installment')}
                    value={'Third Installment'}
                    type='radio'
                    checked={(props[fieldName('installment')] === 'Third Installment')}
                    key={3}
                    onChange={handleChange}
           />
         Third Installment
           </label>
                <label>
                  <input name={fieldName('installment')}
                    value={'Fourth Installment'}
                    type='radio'
                    checked={(props[fieldName('installment')] === 'Fourth Installment')}
                    key={4}
                    onChange={handleChange}
           />
         Fourth Installment
           </label>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <label className='bat'>Class
        <input name={fieldName('grade')}
          readOnly

          value={props.class}
          />
            </label>
            <label className='bat'>Amount
                <input name={fieldName('amount')}
                  value={props[fieldName('amount')]}
                  type='number'
                  placeholder='Amount paid'
                  onChange={handleChange}
                />
            </label>
          </div>
        </div>
      </div>

    )
  }
}

function getClasses () {
  let grade = config.staff_positions
  return Object.keys(grade.grades)
}
