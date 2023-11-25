// import React from 'react'
// import "./Produets.scss"
// const Products = () => {
//   return (
//     <div className='products'>
//       <div className="left">
//         <div className="filter">
//           <h2>Products Categories</h2>
//           <div className="input">
//             <input type="checkbox" id='1' value={1} />
//             <label htmlFor="1">1</label>
//             <input type="checkbox" />
//           </div>
//         </div>
//         <div className="filter">
//           <h2>Filter by price</h2>
//         </div>
//         <div className="filter">
//           <h2>Sort by</h2>
//         </div>
        
//       </div>
//       <div className="right"></div>
//     </div>
//   )
// }

// export default Products
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import List from "../../components/List/List";
// import useFetch from "../../hooks/useFetch";
// import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // const { data, loading, error } = useFetch(
  //   `/sub-categories?[filters][categories][id][$eq]=${catId}`
  // );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

  //   setSelectedSubCats(
  //     isChecked
  //       ? [...selectedSubCats, value]
  //       : selectedSubCats.filter(() =>  !== value)
  //   );
  // };

  return (
    <div className="products">
      <div className="left">
        <div className="filter">
          <h2>Filter by price</h2>
          <div className="input">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter">
          <h2>Sort by</h2>
          <div className="input">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="input">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        {/* <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/> */}
      </div>
    </div>
  );
};

export default Products;