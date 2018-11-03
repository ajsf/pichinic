import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import { Router, Link } from '@reach/router'

import MainCart from '../../components/Cart/MainCart'

import './react-datepicker.css'
import PickupDetails from '../../components/Cart/PickupDetails'

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

              <Router>
                <MainCart path="cart/" />
                <PickupDetails path="cart/pickupdetails/" />
              </Router>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Cart
