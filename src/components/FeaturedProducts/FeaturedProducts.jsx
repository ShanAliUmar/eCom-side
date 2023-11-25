import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({ type }) => {

  let dataImg = [
    {
      id: 1,
      img1: "https://i0.wp.com/pixahive.com/wp-content/uploads/2021/03/Stylish-boy-posing-in-front-of-car-391363-pixahive.jpg?fit=1707%2C2560&ssl=1",
      img2: "https://i.pinimg.com/736x/25/f6/e0/25f6e09aa4e3a2b53b964b20e8114174.jpg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img1: "https://i.pinimg.com/474x/b4/c6/be/b4c6be8403d714b40153aff00398704f.jpg",
      img2: "https://i.pinimg.com/236x/9b/21/97/9b21977a67533d6a9357f84f3d7b85d3.jpg",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img1: "https://e1.pxfuel.com/desktop-wallpaper/202/582/desktop-wallpaper-indian-boy-pic-indian-boy.jpg",
      img2: "https://images.unsplash.com/photo-1598096969068-7f52cac10c83?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwYm95fGVufDB8fDB8fHww",
      title: "Skirt",
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img1: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg",
      img2: "https://images.unsplash.com/photo-1606810745463-dfdf9626320b?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8VjZpV3V1OHJKdlV8fGVufDB8fHx8fA%3D%3D",
      title: "Hat",
      oldPrice: 19,
      price: 12
    }
  ]

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {dataImg.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;