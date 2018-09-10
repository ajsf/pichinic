import React from 'react'
import Helmet from 'react-helmet'

import ShoppingCategoryHeader from './ShoppingCategoryHeader'

const ShoppingPageComponent = props => {
  return (
    <div>
      <Helmet>
        <title>picHInic - {props.title}</title>
        <meta name="description" content={props.title} />
      </Helmet>

      <div id="main">
        <ShoppingCategoryHeader title={props.title} text={props.text} />
        {props.children}
      </div>
    </div>
  )
}

export default ShoppingPageComponent
