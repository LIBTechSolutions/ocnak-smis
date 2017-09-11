import React from 'react'
import Search from '../elements/Search'
import RegistrationDataList from './RegistrationDataList'

export default class RegistrationDataPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      idsrCases: props.idsrCases,
      filteredInfo: props.idsrCases
    }
    this.handleDataSearch = this.handleDataSearch.bind(this)
  }

  handleDataSearch (data) {
    let result = this.state.idsrCases
    const stringContains = (haystack, needle) => {
      return haystack ? haystack.toLowerCase().includes(needle.toLowerCase()) : false
    }

    if (data.word.length > 0) {
      result = result.filter((idsrCase) => {
        if (stringContains(idsrCase.schoolInfo.studentID, data.word) ||
          stringContains(idsrCase.schoolInfo.firstname, data.word) ||
          stringContains(idsrCase.schoolInfo.middlename, data.word) ||
          stringContains(idsrCase.schoolInfo.lastname, data.word) ||
          stringContains(idsrCase.schoolInfo.class, data.word) ||
          stringContains(idsrCase.schoolInfo.enrollmentStatus, data.word)) {
          return true
        }
        return false
      })
    }
    this.setState({filteredInfo: result})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({filteredInfo: nextProps.idsrCases})
  }

  render () {
    let props = this.props
    const filteredInfo = this.state.filteredInfo
    const canAddInfo = props.user.role !== 'teacher'

    const complete = filteredInfo.filter(idsrCase => !!idsrCase.schoolInfo && !!idsrCase.complete)
    const incomplete = filteredInfo.filter(idsrCase => !!idsrCase.schoolInfo && !idsrCase.complete)
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
