import * as actionTypes from './actionTypes'

export const selectLocation = location => {
  return {
    type: actionTypes.SELECT_LOCATION,
    location,
  }
}

export const addDrinkItem = drink => {
  return {
    type: actionTypes.ADD_DRINK_ITEM,
    drink,
  }
}

export const addFoodItem = food => {
  return {
    type: actionTypes.ADD_FOOD_ITEM,
    food,
  }
}
