import React, { Fragment } from 'react'
import DateAndTimeComponent from './DateAndTimeComponent'
import PickupLocationComponent from './PickupLocationComponent'
import { connect } from 'react-redux'
import { Link } from '@reach/router'

const PickupDetails = props => {
  const continueButton = props.ready ? (
    <Link to={'/cart/checkout'} className="button next">
      Continue to Checkout
    </Link>
  ) : null
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
      {continueButton}
    </div>
  )
}

const mapStateToProps = ({
  location,
  food,
  drink,
  pickupDate,
  pickupTime,
  pickupLocation,
}) => {
  const ready =
    location && food && drink && pickupLocation && pickupDate && pickupTime
  return { ready }
}
export default connect(mapStateToProps)(PickupDetails)
