import * as actionTypes from './actions/actionTypes'
import { updateObject } from '../utils/'

const initialState = { location: null, food: null, drink: null }

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
  return state
}

export default reducer
