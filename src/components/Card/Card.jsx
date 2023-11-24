import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
   <Link to={`/Product/${item.id}`}>
    <div className="images">
      <img src={item.img1} alt="" className="mianImg" />
      <img src={item.img2} alt="" className="secondImg" />
    </div>
   </Link>
  );
};

export default Card