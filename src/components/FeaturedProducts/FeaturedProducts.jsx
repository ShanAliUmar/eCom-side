import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({ type }) => {

  let dataImg = [
    {
      id: 1,
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVN9H11wCam0PY3Wp44gEjVOWihP2BNyltg&usqp=CAU",
      img2: "https://i.pinimg.com/originals/5a/87/93/5a87931b2d7502bc082e023332484763.jpg",
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
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhGZkr-jwMKy0f8M9JxDi1f03IKDEvMEsoA&usqp=CAU",
      img1: "https://i.pinimg.com/originals/5a/87/93/5a87931b2d7502bc082e023332484763.jpg",
      title: "Skirt",
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsCCnD_7KpXppgExOo-y0x-TMTeW-AHfPYBap57v85QtbCP4F1uEEpYzxwRtK850Cb-4&usqp=CAU",
      img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFqpF--R_FqGVgUi7rZQPctw5vhI-1woPL1loPQVSlSEZiI2gJR4DLFhviPomNwGF6PE&usqp=CAU",
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
          <Card/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;