import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/locations">Locations</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/food">Food</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/beverages">Beverage</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/cart">Cart</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Checkout</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
