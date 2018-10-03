import React from 'react'

const ShoppingCartSectionContainer = props => {
  return (
    <div style={{ flex: '1 0 45%', marginLeft: 16, maxWidth: 600, minWidth: 300 }}>
      {props.children}
    </div>
  )
}

export default ShoppingCartSectionContainer
