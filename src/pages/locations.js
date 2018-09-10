import React from 'react'

import Locations from '../components/ShoppingPages/Locations/Locations'
import ShoppingPageComponent from '../components/ShoppingPages/ShoppingPageComponent'
import { markdownQueryToObjects } from '../utils/ItemHelper'

const LocationsPage = props => {
  console.log(props)
  const locations = markdownQueryToObjects(props.data)
  console.log('LOCATIONS PAGE', locations)
  return (
    <ShoppingPageComponent
      title="Locations"
      text="Get started by picking your perfect location."
    >
      <Locations locations={locations} />
    </ShoppingPageComponent>
  )
}
export default LocationsPage

export const query = graphql`
  query LocationsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Locations" } } }
    ) {
      ...ShoppingItem
    }
  }
`
