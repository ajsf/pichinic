import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

const Menu = props => {
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
      <a className="close" onClick={props.onToggleMenu} href="javascript:;">
        Close
      </a>
    </nav>
  )
}

const mapStateToProps = state => {
  const started = state.location || state.food || state.drink
  const ready = state.location && state.food && state.drink
  let continueButtonText = 'Get Started'
  if (ready) {
    continueButtonText = 'Checkout'
  } else if (started) {
    continueButtonText = 'Continue'
  }

  let nextLink = '/locations'
  if (ready) {
    nextLink = '/checkout'
  } else if (started) {
    if (state.location && state.food) {
      nextLink = '/drink'
    } else if (state.location) {
      nextLink = '/food'
    }
  }
  return {
    continueButtonText,
    nextLink,
  }
}
export default connect(mapStateToProps)(Menu)
