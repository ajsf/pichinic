export const markdownShoppingItem = graphql`
  fragment ShoppingItem on MarkdownRemarkConnection {
    edges {
      node {
        fields {
          slug
        }
        excerpt
        frontmatter {
          title
          image {
            childImageSharp {
              sizes(maxWidth: 650, maxHeight: 350) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
const mapItemQueryToItemObject = itemQuery => {
  const { excerpt, frontmatter, fields } = itemQuery.node
  const { title, image } = frontmatter
  const { slug } = fields

  return {
    name: title,
    description: excerpt,
    path: slug,
    imageSizes: image.childImageSharp.sizes,
  }
}

export const markdownQueryToObjects = data => {
  if (data.allMarkdownRemark) {
    return data.allMarkdownRemark.edges.map(edge => {
      return mapItemQueryToItemObject(edge)
    })
  }
  return []
}
