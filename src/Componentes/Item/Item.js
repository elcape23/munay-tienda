import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hearth from "../../Assets/hearth.png";
import Bag from "../../Assets/bag.png";
import "./Item.css";

const Item = ({ id, title, description, price, image }) => {
  return (
    <div className="item">
      <Link to={`/details/${id}`} className="item-link">
        <img src={image} className="item-image" />
        <h2 className="item-title">{title}</h2>
      </Link>
      <h1 className="item-price">ARS {price}</h1>
      <img src={Hearth} className="item-hearth" />
      <img src={Bag} className="item-bag" />
    </div>
  );
};

export default Item;
