import React, { useState } from 'react'
import "./Produet.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)


  const images = [
    "https://i0.wp.com/pixahive.com/wp-content/uploads/2021/03/Stylish-boy-posing-in-front-of-car-391363-pixahive.jpg?fit=1707%2C2560&ssl=1",
    "https://i.pinimg.com/736x/25/f6/e0/25f6e09aa4e3a2b53b964b20e8114174.jpg",
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} className='' alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut temporibus voluptatibus sapiente! Veniam dolore, nobis tempora officiis accusamus doloremque ratione voluptatem consectetur, ipsam eius fugit iure omnis qui vero.</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="row">
          <div className="links">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product