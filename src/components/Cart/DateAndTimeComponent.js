import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ShoppingCartSectionContainer from './ShoppingCartSectionContainer'
import * as actionCreators from '../../state/actions/actionCreators'

class DateAndTimeComponent extends Component {
  handleDateChange = date => {
    this.props.selectDate(date)
  }

  handleTimeChange = time => {
    const date = this.props.date
    const newTime = moment(
      date.format('YYYY-MM-DD') + 'T' + time.format('HH:mm')
    )
    this.props.selectTime(newTime)
  }

  render() {
    const timePlaceholder =
      this.props.date == null ? 'Please pick a date first.' : 'Pick a time.'
    return (
      <ShoppingCartSectionContainer>
        <div style={{ marginBottom: 16 }}>
          <h4>Date</h4>
          <DatePicker
            placeholderText="Pick a date."
            withPortal
            minDate={moment().add(36, 'hours')}
            selected={this.props.date}
            onChange={this.handleDateChange}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <h4>Time</h4>
          <DatePicker
            onChange={this.handleTimeChange}
            disabled={this.props.date == null}
            placeholderText={timePlaceholder}
            selected={this.props.time}
            withPortal
            showTimeSelect
            showTimeSelectOnly
            dateFormat="LT"
            minTime={moment()
              .hours(8)
              .minutes(0)}
            maxTime={moment()
              .hours(17)
              .minutes(30)}
          />
        </div>
      </ShoppingCartSectionContainer>
    )
  }
}

const mapStateToProps = state => {
  return { date: state.pickupDate, time: state.pickupTime }
}

const mapDispatchToProps = dispatch => {
  return {
    selectDate: date => dispatch(actionCreators.selectPickupDate(date)),
    selectTime: time => dispatch(actionCreators.selectPickupTime(time)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateAndTimeComponent)
