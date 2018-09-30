import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

import { markdownQueryToObjects } from '../utils/ItemHelper'

import FoodMenus from '../components/ShoppingPages/Food/FoodMenus'
import ShoppingPageComponent from '../components/ShoppingPages/ShoppingPageComponent'

const Food = props => {
  const menus = markdownQueryToObjects(props.data)

  return (
    <Layout>
      <ShoppingPageComponent
        title="Food"
        text="Select from our hand picked menus, or create a custom menu."
      >
        <FoodMenus menus={menus} />
      </ShoppingPageComponent>
    </Layout>
  )
}

export default Food

export const query = graphql`
  query FoodQuery {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "Food" } } }) {
      ...ShoppingItem
    }
  }
`
