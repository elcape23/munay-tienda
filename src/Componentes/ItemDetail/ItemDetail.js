import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ items }) => {
  const { addToCart } = useContext(CartContext);

  const onAdd = (count) => {
    addToCart(items, count);
  };

  return (
    <>
      <div className="item-detail-div">
        <img src={items.image} className="item-detail-image" />
        <h5 className="item-detail-id">#{items.id}</h5>
        <div className="item-detail-title-price-div">
          <h1 className="item-detail-title">{items.title}</h1>
          <h2 className="item-detail-price">ARS {items.price}</h2>
        </div>
        <h2 className="item-detail-description">{items.description}</h2>
        <h1>{items.precio}</h1>
      </div>
      <ItemCount items={items} onAdd={onAdd} />
      <div className="item-detail-cart-link">
        <Link to="/cart" className="item-detail-cart-text">
          Ir al carrito
        </Link>
      </div>
    </>
  );
};

export default ItemDetail;
