import React from 'react'
import { connect } from 'react-redux'
import ItemComponent from './ItemComponent'
import ShoppingCartSectionContainer from './ShoppingCartSectionContainer'

const ItemsComponent = ({ location, food, drink }) => {
  return (
    <ShoppingCartSectionContainer>
      <ItemComponent
        itemCategory="Location"
        link="/locations"
        emptyName="location"
        item={location}
      />
      <ItemComponent
        itemCategory="Food"
        link="/food"
        emptyName="menu"
        item={food}
      />
      <ItemComponent
        itemCategory="Beverage"
        link="/drink"
        emptyName="beverage"
        item={drink}
      />
    </ShoppingCartSectionContainer>
  )
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps)(ItemsComponent)
