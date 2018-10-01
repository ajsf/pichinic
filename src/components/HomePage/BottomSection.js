import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'
import { mapStateToCheckoutReadiness } from '../../state/utils'

const BottomSection = props => {
  console.log('BOTTMSEC', props)
  return (
    <section id="two">
      <div className="inner">
        <header className="major">
          <h2>Take Your Pick</h2>
        </header>
        <p>
          Pick a location, pick a menu, and tell us when and where to pick you
          up. We'll take care of the rest. For a memorable picnic in paradise,
          pick pic.HI.nic!
        </p>
        <ul className="actions">
          <li>
            <Link to={props.nextLink} className="button next">
              {props.continueButtonText}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return mapStateToCheckoutReadiness(state)
}

export default connect(mapStateToProps)(BottomSection)
