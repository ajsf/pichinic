import React from 'react'

import { markdownQueryToObjects } from '../utils/ItemHelper'

import Beverages from '../components/ShoppingPages/Beverages/Beverages'
import ShoppingPageComponent from '../components/ShoppingPages/ShoppingPageComponent'

const DrinksPage = props => {
  const drinks = markdownQueryToObjects(props.data)

  return (
    <ShoppingPageComponent
      title="Beverages"
      text="Pick the perfect beverages to round out the experience."
    >
      <Beverages menu={drinks} />
    </ShoppingPageComponent>
  )
}

export default DrinksPage

export const query = graphql`
  query DrinksQuery {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "Drinks" } } }) {
      ...ShoppingItem
    }
  }
`
