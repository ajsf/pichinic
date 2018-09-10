import React from 'react'

import ShoppingCategoryContainer from '../ShoppingCategoryContainer'
import ShoppingItemComponent from '../ShoppingItemComponent'

const Beverages = props => {
  const { menu } = props
  return (
    <ShoppingCategoryContainer>
      {menu.map(item => {
        return (
          <ShoppingItemComponent
            item={item}
            key={item.name}
            nextLink="/cart"
            itemName="Beverage"
          />
        )
      })}
    </ShoppingCategoryContainer>
  )
}

export default Beverages
