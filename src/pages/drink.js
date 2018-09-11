import React from 'react'
import Layout from '../components/layout'

import { markdownQueryToObjects } from '../utils/ItemHelper'

import Beverages from '../components/ShoppingPages/Beverages/Beverages'
import ShoppingPageComponent from '../components/ShoppingPages/ShoppingPageComponent'

const DrinksPage = props => {
  const drinks = markdownQueryToObjects(props.data)

  return (
    <Layout>
      <ShoppingPageComponent
        title="Beverages"
        text="Pick the perfect beverages to round out the experience."
      >
        <Beverages menu={drinks} />
      </ShoppingPageComponent>
    </Layout>
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
