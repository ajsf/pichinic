import React from 'react'
import { Link } from 'gatsby'
import { mapStateToCheckoutReadiness } from '../../state/utils'
import { connect } from 'react-redux'

const ProductPageActions = props => {
  const back = () => {
    window.history.back()
  }
  return (
    <ul className="actions">
      <li>
        <div className="button" onClick={back}>
          Back
        </div>
      </li>
      <li>
        <Link to={props.nextLink} className="button special icon fa-check">
          Select {props.itemName}
        </Link>
      </li>
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  const category = ownProps.itemName

  return mapStateToCheckoutReadiness(state, category)
}

export default connect(mapStateToProps)(ProductPageActions)
