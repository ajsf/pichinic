import React from 'react'
import { Link } from 'gatsby'

const ItemComponent = props => {
  console.log('CART', props)
  const itemContent = props.item ? (
    <div style={{ marginBottom: 16, marginLeft: 24 }}>{props.item}</div>
  ) : (
    <Link className="button fit" to={props.link}>
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
