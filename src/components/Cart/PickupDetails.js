import React, { Fragment } from 'react'
import DateAndTimeComponent from './DateAndTimeComponent'
import LocationSearchInput from './LocationSearchInput'
import PickupLocationComponent from './PickupLocationComponent'

const PickupDetails = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      }}
    >
      <DateAndTimeComponent />
      <PickupLocationComponent />
    </div>
  )
}

export default PickupDetails
