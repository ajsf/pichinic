import React from 'react'
import ItemsComponent from './itemsComponent'
import { connect } from 'react-redux'
import { Router, Link } from '@reach/router'

const MainCart = props => {
  const continueButton = props.ready ? (
    <Link to={'/cart/pickupdetails'} className="button next">
      Select Date, Time and Pickup location.
    </Link>
  ) : null
  return (
    <div>
      <ItemsComponent />
      {continueButton}
    </div>
  )
}

const mapStateToProps = state => {
  const ready = state.location && state.food && state.drink
  return { ready }
}

export default connect(mapStateToProps)(MainCart)
