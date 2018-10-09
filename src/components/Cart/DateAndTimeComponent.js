import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import ShoppingCartSectionContainer from './ShoppingCartSectionContainer'
import PickupLocationSearch from './PickupLocationSearch'

class DateAndTimeComponent extends Component {
  state = {
    date: null,
    time: null,
  }

  handleDateChange = date => {
    this.setState({ date, time: null })
  }

  handleTimeChange = time => {
    const date = this.state.date
    const newTime = moment(
      date.format('YYYY-MM-DD') + 'T' + time.format('HH:mm')
    )
    this.setState({ date: newTime, time: newTime })
  }

  render() {
    const timePlaceholder =
      this.state.date == null ? 'Please pick a date first.' : 'Pick a time.'
    return (
      <ShoppingCartSectionContainer>
        <div style={{ marginBottom: 16 }}>
          <h4>Date</h4>
          <DatePicker
            placeholderText="Pick a date."
            withPortal
            minDate={moment().add(36, 'hours')}
            selected={this.state.date}
            onChange={this.handleDateChange}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <h4>Time</h4>
          <DatePicker
            onChange={this.handleTimeChange}
            disabled={this.state.date === null}
            placeholderText={timePlaceholder}
            selected={this.state.time}
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
        <div style={{ marginBottom: 16 }}>
          <h4>Pickup Location</h4>
          <PickupLocationSearch />
        </div>
      </ShoppingCartSectionContainer>
    )
  }
}

export default DateAndTimeComponent
