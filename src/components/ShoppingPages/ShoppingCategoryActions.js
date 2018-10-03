import React from 'react'
import { Link } from 'gatsby'
import { mapStateToCheckoutReadiness } from '../../state/utils'
import { connect } from 'react-redux'

const Actions = props => {
  const { item, nextLink } = props

  return (
    <ul className="actions">
      <li>
        <Link to={item.path} className="button">
          More Info
        </Link>
      </li>
      <li>
        <Link
          to={nextLink}
          onClick={props.select}
          className="button special icon fa-check"
        >
          Select {item.category}
        </Link>
      </li>
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps.item
  console.log('SCA', category)
  return mapStateToCheckoutReadiness(state, category)
}

export default connect(mapStateToProps)(Actions)
