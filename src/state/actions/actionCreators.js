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

export const selectPickupDate = date => {
  return {
    type: actionTypes.SELECT_PICKUP_DATE,
    date,
  }
}

export const selectPickupTime = time => {
  return {
    type: actionTypes.SELECT_PICKUP_TIME,
    time,
  }
}
export const selectPickupLocation = location => {
  return {
    type: actionTypes.SELECT_PICKUP_DATE,
    location,
  }
}
