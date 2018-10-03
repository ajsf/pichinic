import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import { connect } from 'react-redux'

import ItemsComponent from '../../components/Cart/itemsComponent'
import DateAndTimeComponent from '../../components/Cart/DateAndTimeComponent'

import './react-datepicker.css'

const Cart = props => {
  return (
    <Layout>
      <div>
        <Helmet>
          <title>picHInic - Cart</title>
          <meta name="Cart" content="Cart" />
        </Helmet>
        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2>Cart</h2>
              </header>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
            
                }}
              >
                <ItemsComponent />
                <DateAndTimeComponent />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  const started = state.location || state.food || state.drink
  return { started }
}
export default connect(mapStateToProps)(Cart)
