import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Banner from '../components/Banner'
import Layout from '../components/layout'

import food from '../assets/images/food.jpg'
import bottle from '../assets/images/bottle.jpg'
import couple from '../assets/images/couple.jpg'
import pic04 from '../assets/images/pic04.jpg'
import BottomSection from '../components/HomePage/BottomSection'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>

          <Banner />

          <div id="main">
            <section id="one" className="tiles">
              <article style={{ backgroundImage: `url(${pic04})` }}>
                <header className="major">
                  <h3>Ambiance</h3>
                  <p>
                    Choose from a selection of beautiful, romantic locations
                    around the island of Oahu.
                  </p>
                </header>
                <Link to="/locations" className="link primary" />
              </article>
              <article style={{ backgroundImage: `url(${food})` }}>
                <header className="major">
                  <h3>Nibbles</h3>
                  <p>
                    Customize your menu from our curated list of gourmet foods.
                  </p>
                </header>
                <Link to="/food" className="link primary" />
              </article>
              <article style={{ backgroundImage: `url(${bottle})` }}>
                <header className="major">
                  <h3>Libations</h3>
                  <p>Add the perfect beverage to round out the experience!</p>
                </header>
                <Link to="/drink" className="link primary" />
              </article>
              <article style={{ backgroundImage: `url(${couple})` }}>
                <header className="major">
                  <h3>Romance</h3>
                  <p>
                    Let us handle details, while you and your loved one share a
                    moment that will never be forgotten.
                  </p>
                </header>
                <Link to="/locations" className="link primary" />
              </article>
            </section>
            <BottomSection />
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
