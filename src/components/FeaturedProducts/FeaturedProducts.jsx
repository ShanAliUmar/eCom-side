import React from "react";
import "./FeaturedProducts.scss";
const FeaturedProducts = ({ type }) => {

  const data = [
    {
      id: 1,
      img1: "",
      img2: "",
      title: "",
      isNew:ture,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img1: "",
      img2: "",
      title: "",
      isNew:ture,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img1: "",
      img2: "",
      title: "",
      isNew:ture,
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img1: "",
      img2: "",
      title: "",
      isNew:ture,
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
    </div>
  );
};

export default FeaturedProducts;