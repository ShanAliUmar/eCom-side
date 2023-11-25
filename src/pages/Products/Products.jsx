import React from 'react'
import "./Produets.scss"
const Products = () => {
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
        </div>

      </div>
      <div className="right"></div>
    </div>
  )
}

export default Products