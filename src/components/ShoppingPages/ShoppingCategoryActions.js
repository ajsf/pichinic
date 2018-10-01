import React from 'react'
import { Link } from 'gatsby'
import { mapStateToCheckoutReadiness } from '../../state/utils'
import { connect } from 'react-redux'

const Actions = props => {
  const { item, nextLink, itemCategory } = props

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
          Select {itemCategory}
        </Link>
      </li>
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { itemCategory } = ownProps
  return mapStateToCheckoutReadiness(state, itemCategory)
}

export default connect(mapStateToProps)(Actions)
