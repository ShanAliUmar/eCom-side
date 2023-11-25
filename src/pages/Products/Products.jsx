import React from 'react'
import "./Produets.scss"
const Products = () => {
  return (
    <div className='products'>
      <div className="left">
        <div className="filter">
          <h2>Products Categories</h2>
          <div className="input">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">1</label>
            <input type="checkbox" />
          </div>
        </div>
        <div className="filter">
          <h2>Filter by price</h2>
        </div>
        <div className="filter">
          <h2>Sort by</h2>
        </div>
        
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Products