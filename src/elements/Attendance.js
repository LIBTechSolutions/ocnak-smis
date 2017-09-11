'use strict'

import React, {Component} from 'react'
import Select from './Select'
import config from '../../config.json'
import {getAttendanceFieldName} from '../idsrCase'
import {toDateString} from '../utils'

export default class Attendance extends Component {

  render () {
    let props = this.props
    let {edit} = props
    let handleChange = props.handleChange()
    let today = toDateString(new Date())
    let fieldName = (name) => {
      return getAttendanceFieldName(props.index, name)
    }

    return (
      <div>
        <legend>{props.title}</legend>
        <div>
          <div className='form-row'>
            <label className='bat'>Date
            <input name={fieldName('date')}
              value={today}
              type='date'
              placeholder='Attendance Date'
              onChange={handleChange}
              />
            </label>
          </div>
          <div className='form-row'>
            <label>Day</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name={fieldName('day')}
                  value={'Monday'}
                  type='radio'
                  checked={(props[fieldName('day')] === 'Monday')}
                  key={1}
                  onChange={handleChange}
                />
              Monday
            </label>
              <label>
                <input name={fieldName('day')}
                  value={'Tuesday'}
                  type='radio'
                  checked={(props[fieldName('day')] === 'Tuesday')}
                  key={2}
                  onChange={handleChange}
                />
              Tuesday
             </label>
              <label>
                <input name={fieldName('day')}
                  value={'Wednesday'}
                  type='radio'
                  checked={(props[fieldName('day')] === 'Wednesday')}
                  key={2}
                  onChange={handleChange}
                />
              Wednesday
             </label>
              <label>
                <input name={fieldName('day')}
                  value={'Thursday'}
                  type='radio'
                  checked={(props[fieldName('day')] === 'Thursday')}
                  key={2}
                  onChange={handleChange}
                />
              Thursday
             </label>
              <label>
                <input name={fieldName('day')}
                  value={'Friday'}
                  type='radio'
                  checked={(props[fieldName('day')] === 'Friday')}
                  key={2}
                  onChange={handleChange}
                />
              Friday
             </label>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='form-row'>
              <label>Attendance</label>
            </div>
            <div className='form-row'>
              <div className='gender'>
                <label>
                  <input name={fieldName('attendance')}
                    value={'Present'}
                    type='radio'
                    checked={(props[fieldName('attendance')] === 'Present')}
                    key={1}
                    onChange={handleChange}
           />
         Present
           </label>
                <label>
                  <input name={fieldName('attendance')}
                    value={'Absent'}
                    type='radio'
                    checked={(props[fieldName('attendance')] === 'Absent')}
                    key={2}
                    onChange={handleChange}
           />
         Absent
           </label>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

