import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Actions from './ShoppingCategoryActions'

const ShoppingItemComponent = props => {
  const { item, itemCategory } = props
  return (
    <section>
      <Link to={item.path} className="image">
        <Img
          sizes={item.imageSizes}
          alt=""
          outerWrapperClassName="gatsbyImage"
          style={{ height: '100%' }}
          imgStyle={{ objectFit: 'fit' }}
        />
      </Link>
      <div className="content">
        <div className="inner">
          <header className="major">
            <h3>{item.name}</h3>
          </header>
          <p>{item.description}</p>
          <Actions
            item={item}
            itemCategory={itemCategory}
            select={props.select}
          />
        </div>
      </div>
    </section>
  )
}

export default ShoppingItemComponent
