import React from 'react'
import { Link } from 'gatsby'

const ItemComponent = props => {
  console.log('CART', props)
  const itemContent = props.item ? (
    <Link to={props.item.path}  >
      <h4 style={{ marginBottom: 36, marginLeft: 24 }}>{props.item.name}</h4>
    </Link>
  ) : (
    <Link style={{ marginLeft: 24 }} className="button fit" to={props.link}>
      Please pick a {props.emptyName}.
    </Link>
  )
  return (
    <div>
      <h4>{props.itemCategory}</h4>
      {itemContent}
    </div>
  )
}

export default ItemComponent
