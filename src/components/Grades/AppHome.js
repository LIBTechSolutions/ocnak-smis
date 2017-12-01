'use strict'
import React from 'react'
import classnames from 'classnames'
import GradeOne from './GradeOne'
import GradeTwo from './GradeTwo'
import GradeThree from './GradeThree'
import GradeFour from './GradeFour'
import GradeFive from './GradeFive'
import GradeSix from './GradeSix'
import GradeSeven from './GradeSeven'
import GradeEight from './GradeEight'
import GradeNine from './GradeNine'
import GradeTen from './GradeTen'
import GradeEleven from './GradeEleven'
import GradeTwelve from './GradeTwelve'

export default class AppHome extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false,
      view: 'full-view'
    }
    this.handleFirstGrade = this.handleFirstGrade.bind(this)
    this.handleSecondGrade = this.handleSecondGrade.bind(this)
    this.handleThirdGrade = this.handleThirdGrade.bind(this)
    this.handleFourthGrade = this.handleFourthGrade.bind(this)
    this.handleFifthGrade = this.handleFifthGrade.bind(this)
    this.handleSixthGrade = this.handleSixthGrade.bind(this)
    this.handleSevenGrade = this.handleSevenGrade.bind(this)
    this.handleEightGrade = this.handleEightGrade.bind(this)
    this.handleNineGrade = this.handleNineGrade.bind(this)
    this.handleTenGrade = this.handleTenGrade.bind(this)
    this.handleElevenGrade = this.handleElevenGrade.bind(this)
    this.handleTwelveGrade = this.handleTwelveGrade.bind(this)
    this.closeProfile = this.closeProfile.bind(this)
  }
  closeProfile () {
    this.setState({
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }

  handleFirstGrade () {
    this.setState({
      view: 'split-view',
      first: true,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleSecondGrade () {
    this.setState({
      view: 'split-view',
      second: true,
      first: false,
      third: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleThirdGrade () {
    this.setState({
      view: 'split-view',
      third: true,
      first: false,
      second: false,
      fourth: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleFourthGrade () {
    this.setState({
      view: 'split-view',
      fourth: true,
      third: false,
      first: false,
      second: false,
      fifth: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleFifthGrade () {
    this.setState({
      view: 'split-view',
      fifth: true,
      fourth: false,
      third: false,
      first: false,
      second: false,
      sixth: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleSixthGrade () {
    this.setState({
      view: 'split-view',
      sixth: true,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleSevenGrade () {
    this.setState({
      view: 'split-view',
      seven: true,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleEightGrade () {
    this.setState({
      view: 'split-view',
      seven: true,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      nine: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleNineGrade () {
    this.setState({
      view: 'split-view',
      nine: true,
      seven: false,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      ten: false,
      eleven: false,
      twelve: false
    })
  }
  handleTenGrade () {
    this.setState({
      view: 'split-view',
      ten: true,
      nine: false,
      seven: false,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      eleven: false,
      twelve: false
    })
  }
  handleElevenGrade () {
    this.setState({
      view: 'split-view',
      eleven: true,
      ten: false,
      nine: false,
      seven: false,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      twelve: false
    })
  }
  handleTwelveGrade () {
    this.setState({
      view: 'split-view',
      twelve: true,
      ten: false,
      nine: false,
      seven: false,
      sixth: false,
      fifth: false,
      fourth: false,
      third: false,
      first: false,
      second: false,
      eleven: false
    })
  }

  render () {
    let props = this.props
    let homepage = classnames(this.state.view)
    const complete = props.studentDetails.filter(studentDetail => !!studentDetail.schoolInfo && !!studentDetail.complete)
    const female = props.studentDetails.filter(studentDetail => !!studentDetail.schoolInfo && !!studentDetail.complete && studentDetail.schoolInfo.gender === 'Female')
    const male = props.studentDetails.filter(studentDetail => !!studentDetail.schoolInfo && !!studentDetail.complete && studentDetail.schoolInfo.gender !== 'Female')
    const active = props.studentDetails.filter(studentDetail => !!studentDetail.schoolInfo && !!studentDetail.complete && studentDetail.schoolInfo.enrollmentStatus === 'Active')
    return (
      <div>
        <div id='wrapper'>
          <nav style={{marginBottom: '0'}}>

            <div className='navbar-default sidebar' role='navigation'>
              <div className='sidebar-nav navbar-collapse'>
                <ul className='nav' id='side-menu'>
                  <li className='sidebar-search'>
                    <div classNameName='input-group custom-search-form'>
                        <input input type='text' className='form-control' placeholder='Search...' />
                        <span className='input-group-btn'>
                        <button className='btn btn-default' type='button'>
                            <i className='fa fa-search' />
                          </button>
                      </span>
                      </div>
                  </li>
                  <li>
                    <a href='#'><i className='fa fa-dashboard fa-fw' /> Dashboard</a>
                  </li>
                  <li>
                    <a><i className='fa fa-university' />Sections<span className='fa arrow' /></a>
                    <ul className='nav nav-second-level'>
                        <li>
                        <a onClick={this.handleFirstGrade} href='#'><i className='fa fa-pencil-square-o' />Grade One</a>
                      </li>
                        <li>
                        <a onClick={this.handleSecondGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Two</a>
                      </li>
                        <li>
                        <a onClick={this.handleThirdGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Three</a>
                      </li>
                      <li>
                        <a onClick={this.handleFourthGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Four</a>
                      </li>
                      <li>
                        <a onClick={this.handleFifthGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Five</a>
                      </li>
                      <li>
                        <a onClick={this.handleSixthGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Six</a>
                      </li>
                      </ul>

                  </li>
                  <li>
                    <a href='#'><i className='fa fa-university' />Sections<span className='fa arrow' /></a>
                    <ul className='nav nav-second-level'>
                        <li>
                        <a onClick={this.handleSevenGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Seven</a>
                      </li>
                        <li>
                        <a onClick={this.handleEightGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Eight</a>
                      </li>
                        <li>
                        <a onClick={this.handleNineGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Nine</a>
                      </li>
                        <li>
                        <a onClick={this.handleTenGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Ten</a>
                      </li>
                        <li>
                        <a onClick={this.handleElevenGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Eleven</a>
                      </li>
                        <li>
                        <a onClick={this.handleTwelveGrade} href='#'><i className='fa fa-pencil-square-o' />Grade Twelve</a>
                      </li>
                      </ul>

                  </li>
                </ul>
              </div>

            </div>

          </nav>

          <div id='page-wrapper'>
            <div className='row'>
              <div className='col-lg-12'>
                <h1 className='page-header'>Dashboard</h1>
              </div>

            </div>

            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div className='panel panel-primary'>
                  <div className='panel-heading'>
                    <div className='row'>
                        <div className='col-xs-3'>
                        <i className='fa fa-graduation-cap fa-5x' aria-hidden='true' />
                      </div>
                        <div className='col-xs-9 text-right'>
                        <div className='huge'>{complete.length}</div>
                        <div>Students</div>
                      </div>
                      </div>
                  </div>
                  <a style={{color: '#87CEFA'}}>
                    <div className='panel-footer'>
                        <span className='pull-left'>Total Students Enrolled</span>
                        <span className='pull-right'><i className='fa fa-arrow-circle-right' /></span>
                        <div className='clearfix' />
                      </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='panel panel-green'>
                  <div className='panel-heading'>
                    <div className='row'>
                        <div className='col-xs-3'>
                        <i className='fa fa-female fa-5x' aria-hidden='true' />
                      </div>
                        <div className='col-xs-9 text-right'>
                        <div className='huge'>{female.length}</div>
                        <div>Female</div>
                      </div>
                      </div>
                  </div>
                  <a>
                    <div className='panel-footer'>
                        <span className='pull-left'>Total Female Enrolled</span>
                        <span className='pull-right'><i className='fa fa-arrow-circle-right' /></span>
                        <div className='clearfix' />
                      </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='panel panel-yellow'>
                  <div className='panel-heading'>
                    <div className='row'>
                        <div className='col-xs-3'>
                        <i className='fa fa-male fa-5x' aria-hidden='true' />
                      </div>
                        <div className='col-xs-9 text-right'>
                        <div className='huge'>{male.length}</div>
                        <div>Male</div>
                      </div>
                      </div>
                  </div>
                  <a>
                    <div className='panel-footer'>
                        <span className='pull-left'>Total Male Enrolled</span>
                        <span className='pull-right'><i className='fa fa-arrow-circle-right' /></span>
                        <div className='clearfix' />
                      </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='panel panel-red'>
                  <div className='panel-heading'>
                    <div className='row'>
                        <div className='col-xs-3'>
                        <i className='fa fa-check fa-5x' aria-hidden='true' />
                      </div>
                        <div className='col-xs-9 text-right'>
                        <div className='huge'>{active.length}</div>
                        <div>Active</div>
                      </div>
                      </div>
                  </div>
                  <a>
                    <div className='panel-footer'>
                        <span className='pull-left'>Total Active Students</span>
                        <span className='pull-right'><i className='fa fa-arrow-circle-right' /></span>
                        <div className='clearfix' />
                      </div>
                  </a>
                </div>
              </div>
              {this.state.first ? <div className={homepage}>
                <div className='home-page'>
                  <GradeOne closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.second ? <div className={homepage}>
                <div className='home-page'>
                  <GradeTwo closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.third ? <div className={homepage}>
                <div className='home-page'>
                  <GradeThree closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.fourth ? <div className={homepage}>
                <div className='home-page'>
                  <GradeFour closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.fifth ? <div className={homepage}>
                <div className='home-page'>
                  <GradeFive closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.sixth ? <div className={homepage}>
                <div className='home-page'>
                  <GradeSix closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.seven ? <div className={homepage}>
                <div className='home-page'>
                  <GradeSeven closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.eight ? <div className={homepage}>
                <div className='home-page'>
                  <GradeEight closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.nine ? <div className={homepage}>
                <div className='home-page'>
                  <GradeNine closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.eleven ? <div className={homepage}>
                <div className='home-page'>
                  <GradeEleven closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.twelve ? <div className={homepage}>
                <div className='home-page'>
                  <GradeTwelve closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
            </div>

          </div>
        </div>
      </div>
    )
  }
}
