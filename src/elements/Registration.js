'use strict'

import React, {Component} from 'react'
import Select from './Select'
import config from '../../config.json'

const PhoneNumberPattern = '^(?:\\+\\d{1,3})?\\d{4}[ -]?\\d{3}[ -]?\\d{3}$'

export default class Registration extends Component {

  getPositions () {
    let positions = config.staff_positions
    return Object.keys(positions.staffs)
  }

  getClasses () {
    let grade = config.staff_positions
    return Object.keys(grade.grades)
  }

  render () {
    let props = this.props
    let {edit} = props
    let handleChange = props.handleChange()

    return (
      <fieldset disabled={!edit}>
        <legend>Registration Form</legend>
        <hr />
        <div className='form-row'>
          <label className='pot'>First Name
              <input name='firstname'
                value={props['firstname']}
                type='text'
                placeholder='First Name'
                onChange={handleChange}
              />
          </label>
          <label className='pot'>Middle Name
            <input name='middlename'
              value={props['middlename']}
              type='text'
              placeholder='Middle Name'
              onChange={handleChange}
              />
          </label>
          <label className='pot'>Last Name
            <input name='lastname'
              value={props['lastname']}
              type='text'
              placeholder='Last Name'
              onChange={handleChange}
              />
          </label>
        </div>
        <div>
          <div className='form-row'>
            <label>Gender</label> <br />
          </div>
          <div className='form-row'>
            <div className='gender'>
              <label>
                <input name='gender'
                  value={'Male'}
                  type='radio'
                  checked={props.gender === 'Male'}
                  key={1}
                  onChange={handleChange}
                  required
              />
              Male
          </label>
              <label>
                <input name='gender'
                  value={'Female'}
                  type='radio'
                  checked={props.gender === 'Female'}
                  key={2}
                  onChange={handleChange}
                  required
              />
             Female
           </label>
            </div>
          </div>
        </div>
        <div className='form-row'>
          <label className='bat'>Date of Birth
            <input name='dob'
              value={props['dob']}
              type='date'
              placeholder='Date of Birth'
              onChange={handleChange}
              />
          </label>
          <label className='bat'>Place of Birth
            <input name='placeOfBirth'
              value={props['placeOfBirth']}
              type='text'
              placeholder='Place of Birth'
              onChange={handleChange}
              />
          </label>
          <label className='bat'>Nationality
            <input name='nationality'
              value={props['nationality']}
              type='text'
              placeholder='Nationality'
              onChange={handleChange}
              />
          </label>
          <label className='bat'>Class
              <Select name='class'
                onChange={handleChange}
                value={props['class']}
                options={this.getClasses()}
                required />
          </label>
        </div>
        <div className='form-row'>
          <label className='bat'>Previous School Attended
          <input name='previousSchoolAttended'
            value={props['previousSchoolAttended']}
            type='text'
            placeholder='Previous School'
            onChange={handleChange}
            />
          </label>
          <label className='bat'>Total Fee
           <input name='totalFee'
             value={props['totalFee']}
             type='number'
             onChange={handleChange}
            />
          </label>
        </div>
        <div className='form-row'>

          <div className='gender'>
            <label>Student Lives With</label> <br />

            <label>
              <input name='studentLivesWith'
                value={'Parent'}
                type='radio'
                checked={props.studentLivesWith === 'Parent'}
                key={1}
                onChange={handleChange}
                required
              />
              Parent
          </label>
            <label>
              <input name='studentLivesWith'
                value={'Guardian'}
                type='radio'
                checked={props.studentLivesWith === 'Guardian'}
                key={2}
                onChange={handleChange}
                required
              />
             Guardian
           </label>

            <div className='form-row' />

            <label>Enrollment Status</label> <br />

            <label>
              <input name='enrollmentStatus'
                value={'Active'}
                type='radio'
                checked={props.enrollmentStatus === 'Active'}
                key={1}
                onChange={handleChange}
                required
              />
              Active
          </label>
            <label>
              <input name='enrollmentStatus'
                value={'Inactive'}
                type='radio'
                checked={props.enrollmentStatus === 'Inactive'}
                key={2}
                onChange={handleChange}
                required
              />
             Inactive
           </label>
          </div>
        </div>
        <div className='form-row'>

          <label className='bat'>Parent/Guardian Last Name
            <input name='parentGuardianLastName'
              value={props['parentGuardianLastName']}
              type='text'
              placeholder='Parent / Guardian Name'
              onChange={handleChange}
             />
          </label>
          <label className='bat'>Parent/Guardian First Name
            <input name='parentGuardianFirstName'
              value={props['parentGuardianFirstName']}
              type='text'
              placeholder='Parent / Guardian Name'
              onChange={handleChange}
             />
          </label>
          <label className='bat'>Relationship
            <input name='relationship'
              value={props['relationship']}
              type='text'
              placeholder='Relationship'
              onChange={handleChange}
              />
          </label>
          <label className='bat'>Phone Number
              <input name='phone'
                value={props['phone']}
                type='tel'
                pattern={PhoneNumberPattern}
                placeholder='Phone Number'
                onChange={handleChange}
                />
          </label>
        </div>
      </fieldset>

    )
  }

}
