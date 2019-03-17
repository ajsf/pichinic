import React from 'react'
import PickupLocationSearch from './PickupLocationSearch'
import ShoppingCartSectionContainer from './ShoppingCartSectionContainer'

import { connect } from 'react-redux'

const PickupLocationComponent = props => {
  console.log('PLC', props)
  const { address, city, zip } = props
  return (
    <ShoppingCartSectionContainer>
      <div style={{ marginBottom: 16 }}>
        <h4>Pickup Location</h4>
        <PickupLocationSearch />
        <h4>Selected Location </h4>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>Zip Code: {zip}</p>
      </div>
    </ShoppingCartSectionContainer>
  )
}

const mapStateToProps = state => {
  const pickupLocation = { state }
  const { address, city, zip } = pickupLocation
  return { address, city, zip }
}

export default connect(mapStateToProps)(PickupLocationComponent)
