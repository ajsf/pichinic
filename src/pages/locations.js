import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Locations from '../components/ShoppingPages/Locations/Locations'
import ShoppingPageComponent from '../components/ShoppingPages/ShoppingPageComponent'
import { markdownQueryToObjects } from '../utils/ItemHelper'
import products from '../products/productCategories'

const LocationsPage = props => {
  console.log(props)
  const locations = markdownQueryToObjects(props.data)
  console.log('LOCATIONS PAGE', locations)
  return (
    <Layout>
      <ShoppingPageComponent
        title="Locations"
        text="Get started by picking your perfect location."
      >
        <Locations locations={locations} />
      </ShoppingPageComponent>
    </Layout>
  )
}
export default LocationsPage

export const query = graphql`
  query LocationsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Location" } } }
    ) {
      ...ShoppingItem
    }
  }
`
