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
        <label className='bat'>E.L.A.:S/V;G/c
        <input name={fieldName('elaSvGc')}
          value={props[fieldName('elaSvGc')]}
          type='number'
          placeholder='E.L.A.: S/V;G/c Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Literature
        <input name={fieldName('literature')}
          value={props[fieldName('literature')]}
          type='number'
          placeholder='Literature Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>E.L.A.:Rdg
        <input name={fieldName('elaRdg')}
          value={props[fieldName('eladg')]}
          type='number'
          placeholder='E.L.A.: Rdg Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Math
          <input name={fieldName('math')}
            value={props[fieldName('math')]}
            type='number'
            placeholder='Math Grade'
            onChange={handleChange}
          />
          </label>
          </div>
          <div className='form-row'>
          <label className='bat'>G.Science
          <input name={fieldName('genScience')}
            value={props[fieldName('genScience')]}
            type='number'
            placeholder='G.Science Grade'
            onChange={handleChange}
          />
          </label>
          <label className='bat'>Social Studies
        <input name={fieldName('socialStudies')}
          value={props[fieldName('socialStudies')]}
          type='number'
          placeholder='Social Studies Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Culture
        <input name={fieldName('culture')}
          value={props[fieldName('culture')]}
          type='number'
          placeholder='Culture Grade'
          onChange={handleChange}
          />
          </label> 
          <label className='bat'>Language
        <input name={fieldName('language')}
          value={props[fieldName('language')]}
          type='number'
          placeholder='Language Grade'
          onChange={handleChange}
          />
          </label>
          </div>
          <div className='form-row'> 
          <label className='bat'>P.H.E/Sports
        <input name={fieldName('physicalEducation')}
          value={props[fieldName('physicalEducation')]}
          type='number'
          placeholder='P.H.E/Sports Grade'
          onChange={handleChange}
          />
          </label> 
          <label className='bat'>Arts/Crafts
        <input name={fieldName('arts')}
          value={props[fieldName('arts')]}
          type='number'
          placeholder='Arts/Crafts Grade'
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
          <label className='bat'>Home Arts
        <input name={fieldName('homearts')}
          value={props[fieldName('homearts')]}
          type='number'
          placeholder='Home Arts Grade'
          onChange={handleChange}
          />
          </label>
          </div>
          <div className='form-row'> 
          <label className='bat'>Music
        <input name={fieldName('music')}
          value={props[fieldName('music')]}
          type='number'
          placeholder='Music Grade'
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
        </div>     
      </div>
    )
  }
}
