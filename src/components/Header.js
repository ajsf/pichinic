import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

const Header = props => {
  const toggle = e => {
    e.preventDefault()
    props.onToggleMenu()
  }
  const cartIcon =
    props.cartQuantity > 0 ? (
      <Link to="/cart" className="icon fa-shopping-cart">
        {props.cartQuantity}
      </Link>
    ) : null
  return (
    <header id="header" className="alt">
      <Link to="/" className="logo">
        <span>
          pic
          <strong>HI</strong>
          nic
        </span>
      </Link>
      <nav>
        {cartIcon}
        <a className="menu-link" onClick={toggle} href="openMenu">
          Menu
        </a>
      </nav>
    </header>
  )
}

const mapStateToProps = state => {
  let cartQuantity = 0
  if (state.location) cartQuantity++
  if (state.food) cartQuantity++
  if (state.drink) cartQuantity++
  return {
    cartQuantity,
  }
}
export default connect(mapStateToProps)(Header)
