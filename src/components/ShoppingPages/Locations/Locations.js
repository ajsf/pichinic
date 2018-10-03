import React from 'react'

import ShoppingCategoryContainer from '../ShoppingCategoryContainer'
import ShoppingItemComponent from '../ShoppingItemComponent'

import { connect } from 'react-redux'
import * as actionCreators from '../../../state/actions/actionCreators'
const Locations = props => {
  const { locations } = props
  console.log('LOCATIONS', locations)
  return (
    <ShoppingCategoryContainer>
      {locations.map(location => {
        return (
          <ShoppingItemComponent
            select={() => props.selectLocation(location)}
            item={location}
            key={location.path}
            itemCategory="Location"
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
