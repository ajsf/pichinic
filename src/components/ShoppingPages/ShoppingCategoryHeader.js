import React from 'react'

const ShoppingCategoryHeader = props => {
  return (
    <section id="one">
      <div className="inner">
        <header className="major">
          <h2>{props.title}</h2>
        </header>
        <p>{props.text}</p>
      </div>
    </section>
  )
}

export default ShoppingCategoryHeader
