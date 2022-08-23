import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";
import Plus from "../../Assets/plus-button.png";
import Minus from "../../Assets/minus-button.png";

const ItemCount = ({ items, onAdd }) => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    count < items.cantidad ? setCount(count + 1) : alert("Sin stock");
  };
  const disminuir = () => {
    count > "0" ? setCount(count - 1) : console.log("error");
  };

  return (
    <>
      <div className="masterButton">
        <div className="countButton">
          <img src={Minus} className="addButton" onClick={disminuir} />
          <h2 className="countText">{count}</h2>
          <img src={Plus} className="addButton" onClick={incrementar} />
        </div>
        <div className="addCart">
          <button
            className="addCartButton"
            disabled={count === 0}
            onClick={() => onAdd(count)}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
