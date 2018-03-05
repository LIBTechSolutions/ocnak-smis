'use strict'

import React, {Component} from 'react'
import {getGradeFieldName} from '../studentDetail'

export default class Grade extends Component {

  render () {
    let props = this.props
    let {edit} = props
    let handleChange = props.handleChange()
    let fieldName = (name) => {
      return getGradeFieldName(props.index, name)
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
          <div className='form-row'>
            <label>Period</label>
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name={fieldName('period')}
                  value={'First Period'}
                  type='radio'
                  checked={(props[fieldName('period')] === 'First Period')}
                  key={1}
                  onChange={handleChange}

          />
          First Period
          </label>
              <label>
                <input name={fieldName('period')}
                  value={'Second Period'}
                  type='radio'
                  checked={(props[fieldName('period')] === 'Second Period')}
                  key={2}
                  onChange={handleChange}

          />
          Second Period
          </label>
              <label>
                <input name={fieldName('period')}
                  value={'Third Period'}
                  type='radio'
                  checked={(props[fieldName('period')] === 'Third Period')}
                  key={3}
                  onChange={handleChange}

          />
          Third Period
          </label>
              <label>
                <input name={fieldName('period')}
                  value={'First Semester Exam'}
                  type='radio'
                  checked={(props[fieldName('period')] === 'First Semester Exam')}
                  key={4}
                  onChange={handleChange}

            />
            First Semester Exam
            </label>
              <label>
                <input name={fieldName('period')}
                  value={'Fourth Period'}
                  type='radio'
                  checked={(props[fieldName('period')] === 'Fourth Period')}
                  key={5}
                  onChange={handleChange}

          />
          Fourth Period
          </label>
              <label>
                <input name={fieldName('period')}
                  value={'Fifth Period'}
                  type='radio'
                  checked={(props[fieldName('period')] === 'Fifth Period')}
                  key={6}
                  onChange={handleChange}

          />
          Fifth Period
          </label>
              <label>
                <input name={fieldName('period')}
                  value={'Sixth Period'}
                  type='radio'
                  checked={(props[fieldName('period')] === 'Sixth Period')}
                  key={7}
                  onChange={handleChange}

          />
          Sixth Period
          </label>
              <label>
                <input name={fieldName('period')}
                  value={'Second Semester Exam'}
                  type='radio'
                  checked={(props[fieldName('period')] === 'Second Semester Exam')}
                  key={8}
                  onChange={handleChange}

            />
          Second Semester Exam
            </label>
            </div>
          </div>
        </div>
        <div className='form-row'>
          <label className='bat'>Math
          <input name={fieldName('math')}
            value={props[fieldName('math')]}
            type='number'
            placeholder='Math Grade'
            onChange={handleChange}
          />
          </label>
          <label className='bat'>English
        <input name={fieldName('english')}
          value={props[fieldName('english')]}
          type='number'
          placeholder='English Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Physics
        <input name={fieldName('physics')}
          value={props[fieldName('physics')]}
          type='number'
          placeholder='Physics Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>History
        <input name={fieldName('history')}
          value={props[fieldName('history')]}
          type='number'
          placeholder='History Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
        <label className='bat'>Literature
        <input name={fieldName('literature')}
          value={props[fieldName('literature')]}
          type='number'
          placeholder='Literature Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Computer
        <input name={fieldName('computer')}
          value={props[fieldName('computer')]}
          type='number'
          placeholder='Computer Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Geography
        <input name={fieldName('geography')}
          value={props[fieldName('geography')]}
          type='number'
          placeholder='Geography Grade'
          onChange={handleChange}
          />
          </label>   
          <label className='bat'>Chemistry
        <input name={fieldName('chemistry')}
          value={props[fieldName('chemistry')]}
          type='number'
          placeholder='Chemistry Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
        <label className='bat'>Biology
        <input name={fieldName('biology')}
          value={props[fieldName('biology')]}
          type='number'
          placeholder='Biology Grade'
          onChange={handleChange}
          />
          </label>
        <label className='bat'>Economics
        <input name={fieldName('economics')}
          value={props[fieldName('ecenomics')]}
          type='number'
          placeholder='Economics Grade'
          onChange={handleChange}
          />
          </label>
        <label className='bat'>Bible
        <input name={fieldName('bible')}
          value={props[fieldName('bible')]}
          type='number'
          placeholder='Bible Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>ROTC
        <input name={fieldName('rotc')}
          value={props[fieldName('rotc')]}
          type='number'
          placeholder='ROTC Grade'
          onChange={handleChange}
          />
          </label>
        </div>      
      </div>
    )
  }
}
