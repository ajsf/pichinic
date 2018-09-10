import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const ShoppingItemComponent = props => {
  console.log('ITEM', props)
  const { item, nextLink, itemName } = props
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
          <ul className="actions">
            <li>
              <Link to={item.path} className="button">
                More Info
              </Link>
            </li>
            <li>
              <Link to={nextLink} className="button special icon fa-check">
                Select {itemName}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ShoppingItemComponent
