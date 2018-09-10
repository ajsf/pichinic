import React from 'react'

import { markdownQueryToObjects } from '../utils/ItemHelper'

import FoodMenus from '../components/ShoppingPages/Food/FoodMenus'
import ShoppingPageComponent from '../components/ShoppingPages/ShoppingPageComponent'

const Food = props => {
  console.log(props)
  const menus = markdownQueryToObjects(props.data)

  console.log('MENUS', menus)
  return (
    <ShoppingPageComponent
      title="Food"
      text="Select from our hand picked menus, or create a custom menu."
    >
      <FoodMenus menus={menus} />
    </ShoppingPageComponent>
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
