import React from 'react'
import PickupLocationSearch from './PickupLocationSearch'
import ShoppingCartSectionContainer from './ShoppingCartSectionContainer'

const PickupLocationComponent = () => {
  return (
    <ShoppingCartSectionContainer>
      <div style={{ marginBottom: 16 }}>
        <h4>Pickup Location</h4>
        <PickupLocationSearch />
        <p>Address: </p>
      </div>
    </ShoppingCartSectionContainer>
  )
}

export default PickupLocationComponent
