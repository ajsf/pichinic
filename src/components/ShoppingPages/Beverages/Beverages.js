import React from 'react'

import ShoppingCategoryContainer from '../ShoppingCategoryContainer'
import ShoppingItemComponent from '../ShoppingItemComponent'

import { connect } from 'react-redux'
import * as actionCreators from '../../../state/actions/actionCreators'

const Beverages = props => {
  const { menu } = props
  return (
    <ShoppingCategoryContainer>
      {menu.map(item => {
        return (
          <ShoppingItemComponent
            select={() => props.addDrink(item.name)}
            item={item}
            key={item.path}
            nextLink="/cart"
            itemName="Beverage"
          />
        )
      })}
    </ShoppingCategoryContainer>
  )
}

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return { addDrink: drink => dispatch(actionCreators.addDrinkItem(drink)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beverages)
