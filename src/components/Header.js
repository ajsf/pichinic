import React from 'react'
import Link from 'gatsby-link'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <span>
        pic
        <strong>HI</strong>
        nic
      </span>
    </Link>
    <nav>
      <Link to="/cart" className="icon fa-shopping-cart">1</Link>

      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: React.PropTypes.func,
}

export default Header
