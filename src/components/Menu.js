import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { mapStateToCheckoutReadiness } from '../state/utils'

const Menu = props => {
  const onLinkClick = e => {
    e.preventDefault()
    props.onToggleMenu()
  }
  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          <li>
            <Link onClick={props.onToggleMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={props.onToggleMenu} to="/locations">
              Locations
            </Link>
          </li>
          <li>
            <Link onClick={props.onToggleMenu} to="/food">
              Food
            </Link>
          </li>
          <li>
            <Link onClick={props.onToggleMenu} to="/drink">
              Beverage
            </Link>
          </li>
          <li>
            <Link onClick={props.onToggleMenu} to="/cart">
              Cart
            </Link>
          </li>
        </ul>
        <ul className="actions vertical">
          <li>
            <Link
              onClick={props.onToggleMenu}
              to={props.nextLink}
              className="button special fit"
            >
              {props.continueButtonText}
            </Link>
          </li>
        </ul>
      </div>
      <a className="close" onClick={onLinkClick} href="closeMenu">
        Close
      </a>
    </nav>
  )
}

const mapStateToProps = state => {
  return mapStateToCheckoutReadiness(state)
}
export default connect(mapStateToProps)(Menu)
