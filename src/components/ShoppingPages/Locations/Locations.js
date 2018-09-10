import React from 'react'

import ShoppingCategoryContainer from '../ShoppingCategoryContainer'
import ShoppingItemComponent from '../ShoppingItemComponent'

const Locations = props => {
  const { locations } = props
  return (
    <ShoppingCategoryContainer>
      {locations.map(location => {
        return (
          <ShoppingItemComponent
            item={location}
            key={location.name}
            nextLink="/food"
            itemName="Location"
          />
        )
      })}
    </ShoppingCategoryContainer>
  )
}

export default Locations
