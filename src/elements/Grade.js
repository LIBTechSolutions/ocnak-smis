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
          <label className='bat'>Health Science
        <input name={fieldName('healthScience')}
          value={props[fieldName('healthScience')]}
          type='number'
          placeholder='Health Science Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Phonics
        <input name={fieldName('phonics')}
          value={props[fieldName('phonics')]}
          type='number'
          placeholder='Phonics Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Spelling
        <input name={fieldName('spelling')}
          value={props[fieldName('spelling')]}
          type='number'
          placeholder='Spelling Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Writing
        <input name={fieldName('writing')}
          value={props[fieldName('writing')]}
          type='number'
          placeholder='Writing Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Drawing
        <input name={fieldName('drawing')}
          value={props[fieldName('drawing')]}
          type='number'
          placeholder='Drawing Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Reading
        <input name={fieldName('reading')}
          value={props[fieldName('reading')]}
          type='number'
          placeholder='Reading Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Social Studies
        <input name={fieldName('socialStudies')}
          value={props[fieldName('socialStudies')]}
          type='number'
          placeholder='Social Studies Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>General Science
        <input name={fieldName('generalScience')}
          value={props[fieldName('generalScience')]}
          type='number'
          placeholder='General Science Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Physical Education
        <input name={fieldName('physicalEducation')}
          value={props[fieldName('physicalEducation')]}
          type='number'
          placeholder='Physical Education Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Hygiene
        <input name={fieldName('hygiene')}
          value={props[fieldName('hygiene')]}
          type='number'
          placeholder='Hygiene Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Bible
        <input name={fieldName('bible')}
          value={props[fieldName('bible')]}
          type='number'
          placeholder='Bible Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Counting
        <input name={fieldName('counting')}
          value={props[fieldName('counting')]}
          type='number'
          placeholder='Counting Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Rhyming/Music
        <input name={fieldName('rhyming')}
          value={props[fieldName('rhyming')]}
          type='number'
          placeholder='Rhyming/Music Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Formation of Numbers
        <input name={fieldName('formationofnumbers')}
          value={props[fieldName('formationofnumbers')]}
          type='number'
          placeholder='Formation of Numbers Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Number Recognition
        <input name={fieldName('numberrecognition')}
          value={props[fieldName('numberrecognition')]}
          type='number'
          placeholder='Number Recognition Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Letter Recognition
        <input name={fieldName('letterrecognition')}
          value={props[fieldName('letterrecognition')]}
          type='number'
          placeholder='Letter Recognition Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Color Recognition
        <input name={fieldName('colorrecognition')}
          value={props[fieldName('colorrecognition')]}
          type='number'
          placeholder='Color Recognition Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Formation of Letters
        <input name={fieldName('formationofletters')}
          value={props[fieldName('formationofletters')]}
          type='number'
          placeholder='Formation of Letters Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Coloring
        <input name={fieldName('coloring')}
          value={props[fieldName('coloring')]}
          type='number'
          placeholder='Coloring Grade'
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
          <label className='bat'>Geography
        <input name={fieldName('geography')}
          value={props[fieldName('geography')]}
          type='number'
          placeholder='Geography Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Civics
        <input name={fieldName('civics')}
          value={props[fieldName('civics')]}
          type='number'
          placeholder='Civics Grade'
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
          <label className='bat'>French
        <input name={fieldName('french')}
          value={props[fieldName('french')]}
          type='number'
          placeholder='French Grade'
          onChange={handleChange}
          />
          </label>
          <label className='bat'>Biology
        <input name={fieldName('biology')}
          value={props[fieldName('biology')]}
          type='number'
          placeholder='Biology Grade'
          onChange={handleChange}
          />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Chemistry
        <input name={fieldName('chemistry')}
          value={props[fieldName('chemistry')]}
          type='number'
          placeholder='Chemistry Grade'
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
          <label className='bat'>Economics
        <input name={fieldName('economics')}
          value={props[fieldName('ecenomics')]}
          type='number'
          placeholder='Economics Grade'
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
