import React from 'react'
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {



    let data = [
        {
          id: 1,
          img: "https://i0.wp.com/pixahive.com/wp-content/uploads/2021/03/Stylish-boy-posing-in-front-of-car-391363-pixahive.jpg?fit=1707%2C2560&ssl=1",
          title: "Long Sleeve Graphic T-shirt",
          isNew: true,
          oldPrice: 19,
          price: 12
        },
        {
          id: 2,
          img: "https://i.pinimg.com/474x/b4/c6/be/b4c6be8403d714b40153aff00398704f.jpg",
          title: "Coat",
          isNew: true,
          oldPrice: 19,
          price: 12
        }
      ]


  return (
    <div className="cart">
    <h1>Products in your cart</h1>
    {data?.map((item) => (
      <div className="item" key={item.id}>
        <img src={item.img} alt="" />
        <div className="details">
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0, 100)}</p>
          <div className="price">
            {item.quantity} x ${item.price}
          </div>
        </div>
        <DeleteOutlinedIcon
          className="delete"
          onClick={() => dispatch(removeItem(item.id))}
        />
      </div>
    ))}
    <div className="total">
      <span>SUBTOTAL</span>
      <span>$123</span>
    </div>
    <button >PROCEED TO CHECKOUT</button>
    <span className="reset" onClick={() => dispatch(resetCart())}>
      Reset Cart
    </span>
  </div>
  )
}

export default Cart