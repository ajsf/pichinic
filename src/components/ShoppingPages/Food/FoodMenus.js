import React from 'react'

import ShoppingCategoryContainer from '../ShoppingCategoryContainer'
import ShoppingItemComponent from '../ShoppingItemComponent'

import { connect } from 'react-redux'
import * as actionCreators from '../../../state/actions/actionCreators'

const FoodMenus = props => {
  const { menus } = props
  return (
    <ShoppingCategoryContainer>
      {menus.map(menu => {
        return (
          <ShoppingItemComponent
            select={() => props.addFood(menu)}
            item={menu}
            key={menu.path}
            itemCategory="Menu"
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
  return { addFood: food => dispatch(actionCreators.addFoodItem(food)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodMenus)
