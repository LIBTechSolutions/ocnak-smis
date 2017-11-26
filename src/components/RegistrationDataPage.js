import React from 'react'
import Search from '../elements/Search'
import RegistrationDataList from './RegistrationDataList'

export default class RegistrationDataPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      studentDetails: props.studentDetails,
      filteredInfo: props.studentDetails
    }
    this.handleDataSearch = this.handleDataSearch.bind(this)
  }

  handleDataSearch (data) {
    let result = this.state.studentDetails
    const stringContains = (haystack, needle) => {
      return haystack ? haystack.toLowerCase().includes(needle.toLowerCase()) : false
    }

    if (data.word.length > 0) {
      result = result.filter((studentDetail) => {
        if (stringContains(studentDetail.schoolInfo.studentID, data.word) ||
          stringContains(studentDetail.schoolInfo.firstname, data.word) ||
          stringContains(studentDetail.schoolInfo.middlename, data.word) ||
          stringContains(studentDetail.schoolInfo.lastname, data.word) ||
          stringContains(studentDetail.schoolInfo.class, data.word) ||
          stringContains(studentDetail.schoolInfo.enrollmentStatus, data.word)) {
          return true
        }
        return false
      })
    }
    this.setState({filteredInfo: result})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({filteredInfo: nextProps.studentDetails})
  }

  render () {
    let props = this.props
    const filteredInfo = this.state.filteredInfo
    const canAddInfo = props.user.role !== 'teacher'

    const complete = filteredInfo.filter(studentDetail => !!studentDetail.schoolInfo && !!studentDetail.complete)
    const incomplete = filteredInfo.filter(studentDetail => !!studentDetail.schoolInfo && !studentDetail.complete)
    return (
      <div className='eidsr-data'>
        <div className='toolbar'>
          {canAddInfo && <button className='btn' type='button' onClick={props.createCase}><i className='icon-add' />New Registration</button>}
        </div>
        <div className='eidsr-data__container'>
          <Search onSearch={this.handleDataSearch} />
          <hr />
          <h4>Registered Students</h4>
          <RegistrationDataList limit={20} docs={complete} {...props} />
        </div>
      </div>
    )
  }
}
