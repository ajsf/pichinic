import React from 'react'

import ShoppingCategoryContainer from '../ShoppingCategoryContainer'
import ShoppingItemComponent from '../ShoppingItemComponent'

import { connect } from 'react-redux'
import * as actionCreators from '../../../state/actions/actionCreators'

const Locations = props => {
  const { locations } = props
  return (
    <ShoppingCategoryContainer>
      {locations.map(location => {
        return (
          <ShoppingItemComponent
            select={() => props.selectLocation(location.name)}
            item={location}
            key={location.path}
            nextLink="/food"
            itemName="Location"
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
  return {
    selectLocation: location =>
      dispatch(actionCreators.selectLocation(location)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations)
