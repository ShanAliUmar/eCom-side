import React, { useState } from 'react'
import "./Produets.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
const Products = () => {


  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const [sort , setSort] = useState(null)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort("asc")}/>
            <label htmlFor="asc" >Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='price'  onChange={e=>setSort("desc")}/>
            <label htmlFor="desc" >Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="data:image/jpeg;base64,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" />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products