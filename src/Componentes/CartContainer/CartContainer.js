import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./CartContainer.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, deleteFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-orders">
        {cart.map((prod) => (
          <div key={prod.id}>
            <div className="cart-line-div"></div>
            <div className="cart-selected-product-div">
              <img src={prod.image} className="cart-selected-product-image" />
              <div className="cart-selected-product">
                <h1 className="cart-selected-product-title">{prod.title}</h1>
                <h3 className="cart-selected-product-count">
                  Cantidad: {prod.count}
                </h3>
                <h3 className="cart-selected-product-total">
                  Total: ARS {prod.price * prod.count}
                </h3>
                <h5
                  className="cart-selected-product-delete"
                  onClick={() => deleteFromCart(prod.id)}
                >
                  X
                </h5>
              </div>
            </div>
            <div className="cart-line-div"></div>
          </div>
        ))}
      </div>
      <Link to="/category" className="cart-home-link">
        Seguir comprando
      </Link>
    </div>
  );
};

export default CartContainer;
