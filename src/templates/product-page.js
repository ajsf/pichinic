import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

const ProductPageTemplate = props => {
  const product = props.data.markdownRemark
  console.log(product)
  const { title, image } = product.frontmatter
  return (
    <div>
      <Helmet>
        <title>{props.data.site.siteMetadata.title}</title>
        <meta name="description" content={title} />
      </Helmet>

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
            <ul className="actions">
              <li>
                <div onClick={props.history.goBack} className="button">
                  Back
                </div>
              </li>
              <li>
                <Link to="/generic" className="button special icon fa-check">
                  Select {props.itemName}
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
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