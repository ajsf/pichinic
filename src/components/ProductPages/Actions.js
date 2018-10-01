import React from 'react'
import { Link } from 'gatsby'
import { mapStateToCheckoutReadiness } from '../../state/utils'
import { connect } from 'react-redux'

const Actions = props => {
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

const mapStateToProps = state => {
  return mapStateToCheckoutReadiness(state)
}

export default connect(mapStateToProps)(Actions)
