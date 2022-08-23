import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, newCount) => {
    const isCartEmpty = cart.length === 0;
    const isExistingProduct = cart.find((product) => product.id === item.id);
    let updatedCart = [...cart];
    if (isCartEmpty || !isExistingProduct) {
      updatedCart.push({
        ...item,
        count: newCount,
        sum: newCount * item.price,
      });
    } else {
      updatedCart = cart.map((product) => {
        if (product.id === item.id) {
          let updatedProduct = {};
          updatedProduct = {
            ...product,
            count: product.count + newCount,
            sum: (product.count + newCount) * product.price,
          };
          return updatedProduct;
        } else {
          return product;
        }
      });
    }
    setCart(updatedCart);
  };

  const deleteFromCart = (id) => {
    console.log(id);
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Provider;
