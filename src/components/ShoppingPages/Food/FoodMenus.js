import React from 'react'

import ShoppingItemComponent from '../ShoppingItemComponent'

const FoodMenus = props => {
  const { menus } = props
  return (
    <section id="two" className="spotlights">
      {menus.map(menu => {
        return (
          <ShoppingItemComponent
            item={menu}
            key={menu.path}
            nextLink="/drink"
            itemName="Menu"
          />
        )
      })}
    </section>
  )
}

export default FoodMenus
