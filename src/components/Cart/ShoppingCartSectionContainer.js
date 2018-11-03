import React from 'react'

const ShoppingCartSectionContainer = props => {
  return (
    <div
      style={{
        flex: '0 0 40%',
        minWidth: 250,
      }}
    >
      {props.children}
    </div>
  )
}

export default ShoppingCartSectionContainer
