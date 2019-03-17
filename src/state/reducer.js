import * as actionTypes from './actions/actionTypes'
import { updateObject } from '../utils/'

const initialState = {
  location: null,
  food: null,
  drink: null,
  pickupTime: null,
  pickupDate: null,
  pickupLocation: null,
}

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.SELECT_LOCATION) {
    return updateObject(state, { location: action.location })
  }
  if (action.type === actionTypes.ADD_DRINK_ITEM) {
    return updateObject(state, { drink: action.drink })
  }
  if (action.type === actionTypes.ADD_FOOD_ITEM) {
    return updateObject(state, { food: action.food })
  }
  if (action.type === actionTypes.SELECT_PICKUP_DATE) {
    return updateObject(state, { pickupDate: action.date })
  }
  if (action.type === actionTypes.SELECT_PICKUP_TIME) {
    return updateObject(state, { pickupTime: action.time })
  }
  if (action.type === actionTypes.SELECT_PICKUP_LOCATION) {
    return updateObject(state, { pickupLocation: action.LOCATION })
  }
  return state
}

export default reducer
