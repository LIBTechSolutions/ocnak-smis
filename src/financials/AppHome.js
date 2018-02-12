'use strict'
import React from 'react'
import classnames from 'classnames'
import KindergartenOne from './KindergartenOne'
import KindergartenTwo from './KindergartenTwo'
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
      kindergartenone: false,
      kindergartentwo: false,
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
    this.handleKindergartenOne = this.handleKindergartenOne.bind(this)
    this.handleKindergartenTwo = this.handleKindergartenTwo.bind(this)
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
      kindergartenone: false,
      kindergartentwo: false,
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

  handleKindergartenOne () {
    this.setState({
      view: 'split-view',
      kindergartenone: true,
      kindergartentwo: false,
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
  handleKindergartenTwo () {
    this.setState({
      view: 'split-view',
      kindergartenone: false,
      kindergartentwo: true,
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
      kindergartenone: false,
      kindergartentwo: false,
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
      kindergartenone: false,
      kindergartentwo: false,
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
      kindergartenone: false,
      kindergartentwo: false,
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
      kindergartenone: false,
      kindergartentwo: false,
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
      kindergartenone: false,
      kindergartentwo: false,
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
      kindergartenone: false,
      kindergartentwo: false,
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
      kindergartenone: false,
      kindergartentwo: false,
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
      kindergartenone: false,
      kindergartentwo: false,
      eight: true,
      seven: false,
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
      kindergartenone: false,
      kindergartentwo: false,
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
      twelve: false,
      eight: false,
    })
  }
  handleTenGrade () {
    this.setState({
      view: 'split-view',
      kindergartenone: false,
      kindergartentwo: false,
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
      twelve: false,
      eight: false,
    })
  }
  handleElevenGrade () {
    this.setState({
      view: 'split-view',
      kindergartenone: false,
      kindergartentwo: false,
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
      twelve: false,
      eight: false,
    })
  }
  handleTwelveGrade () {
    this.setState({
      view: 'split-view',
      kindergartenone: false,
      kindergartentwo: false,
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
      eleven: false,
      eight: false,
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
                  <li>
                    <a href='#'><i className='fa fa-dashboard fa-fw' /> Dashboard</a>
                  </li>
                  <li>
                    <a href='#'><i className='fa fa-university' />Kindergarten<span className='fa arrow' /></a>
                    <ul className='nav nav-second-level'>
                        <li>
                        <a onClick={this.handleKindergartenOne} href='#'><i className='fa fa-files-o' />Kindergarten One</a>
                      </li>
                        <li>
                        <a onClick={this.handleKindergartenTwo} href='#'><i className='fa fa-files-o' />Kindergarten Two</a>
                      </li>
                      </ul>
                  </li>
                  <li>
                    <a><i className='fa fa-university' />Elementry<span className='fa arrow' /></a>
                    <ul className='nav nav-second-level'>
                        <li>
                        <a onClick={this.handleFirstGrade} href='#'><i className='fa fa-files-o' />Grade One</a>
                      </li>
                        <li>
                        <a onClick={this.handleSecondGrade} href='#'><i className='fa fa-files-o' />Grade Two</a>
                      </li>
                        <li>
                        <a onClick={this.handleThirdGrade} href='#'><i className='fa fa-files-o' />Grade Three</a>
                      </li>
                      <li>
                        <a onClick={this.handleFourthGrade} href='#'><i className='fa fa-files-o' />Grade Four</a>
                      </li>
                      <li>
                        <a onClick={this.handleFifthGrade} href='#'><i className='fa fa-files-o' />Grade Five</a>
                      </li>
                      <li>
                        <a onClick={this.handleSixthGrade} href='#'><i className='fa fa-files-o' />Grade Six</a>
                      </li>
                      </ul>

                  </li>
                  <li>
                    <a href='#'><i className='fa fa-university' />Junior High<span className='fa arrow' /></a>
                    <ul className='nav nav-second-level'>
                        <li>
                        <a onClick={this.handleSevenGrade} href='#'><i className='fa fa-files-o' />Grade Seven</a>
                      </li>
                        <li>
                        <a onClick={this.handleEightGrade} href='#'><i className='fa fa-files-o' />Grade Eight</a>
                      </li>
                        <li>
                        <a onClick={this.handleNineGrade} href='#'><i className='fa fa-files-o' />Grade Nine</a>
                      </li>
                      </ul>
                  </li>
                  <li>
                    <a href='#'><i className='fa fa-university' />Senior High<span className='fa arrow' /></a>
                    <ul className='nav nav-second-level'>
                        <li>
                        <a onClick={this.handleTenGrade} href='#'><i className='fa fa-files-o' />Grade Ten</a>
                      </li>
                        <li>
                        <a onClick={this.handleElevenGrade} href='#'><i className='fa fa-files-o' />Grade Eleven</a>
                      </li>
                        <li>
                        <a onClick={this.handleTwelveGrade} href='#'><i className='fa fa-files-o' />Grade Twelve</a>
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
                <h1 className='page-header'>Financial Report</h1>
              </div>

            </div>

            <div className='row'>
            <div class="panel panel-default">
                        <div class="panel-heading">
                            Fees Payment Status
                        </div>
                        
                </div>
                {this.state.kindergartenone ? <div className={homepage}>
                <div className='home-page'>
                  <KindergartenOne closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}
              {this.state.kindergartentwo ? <div className={homepage}>
                <div className='home-page'>
                  <KindergartenTwo closeProfile={this.closeProfile} {...this.props} />
                </div>
              </div> : null}

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
              {this.state.ten ? <div className={homepage}>
                <div className='home-page'>
                  <GradeTen closeProfile={this.closeProfile} {...this.props} />
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
