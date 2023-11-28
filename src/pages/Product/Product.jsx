import React, { useState } from 'react'
import "./Produet.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)


  const images = [
    "https://storage.sg.content-cdn.io/cdn-cgi/image/width=300,height=400,quality=90,format=auto,fit=cover,g=top/in-resources/22a79ec5-e694-4d7a-ac5a-85c8fa45b7f1/Images/ProductImages/Source/ITBSH01110SS-Mint_01.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVfV_LbY1DR-eWBZfH8IC-8tdYpDYnJNXZPwIEHCdbKlo5VnXTeGdebKRJJbpgU284gA&usqp=CAU"
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
        <div className="link">
          <FavoriteBorderIcon /> ADD TO WISH LIST
        </div>
        <div className="item">
          <BalanceIcon /> ADD TO COMPARE
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