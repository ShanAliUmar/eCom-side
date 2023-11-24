import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({ type }) => {

  let dataImg = [
    {
      id: 1,
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVN9H11wCam0PY3Wp44gEjVOWihP2BNyltg&usqp=CAU",
      img2: "",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGAgkfAXaaaCWR6GVBY4NK6v_xP4DVSeVvm9gHX4T_x7nmlO7B414VgVQA5Dlj7uKgf8&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGAgkfAXaaaCWR6GVBY4NK6v_xP4DVSeVvm9gHX4T_x7nmlO7B414VgVQA5Dlj7uKgf8&usqp=CAU",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img2: "https://img.freepik.com/premium-photo/captivating-vibes-mexican-beauty-shines-black-short-within-photographic-haven_983420-46056.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais",
      img1: "https://img.freepik.com/premium-photo/muscular-handsome-man-black-tshirt-realistic-t-shirt-mockup_911620-9461.jpg",
      title: "Skirt",
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img1: "https://images.unsplash.com/photo-1606810745463-dfdf9626320b?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8VjZpV3V1OHJKdlV8fGVufDB8fHx8fA%3D%3D",
      img2: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg",
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