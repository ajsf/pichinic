import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Actions from '../components/ProductPages/ProductPageActions'

const ProductPageTemplate = props => {
  const product = props.data.markdownRemark
  const { title, image, category } = product.frontmatter
  console.log('PP Template', props)
  return (
    <div>
      <Helmet>
        <title>{props.data.site.siteMetadata.title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <Layout>
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>{title}</h1>
              </header>
              <span>
                <Img
                  sizes={image.childImageSharp.sizes}
                  alt=""
                  outerWrapperClassName="image main"
                  style={{ maxHeight: '300' }}
                  imgStyle={{ objectFit: 'scale-down' }}
                />
              </span>
              <div dangerouslySetInnerHTML={{ __html: product.html }} />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Actions itemName={category} />
            </div>
          </section>
        </div>
      </Layout>
    </div>
  )
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductPageQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        category
        image {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
