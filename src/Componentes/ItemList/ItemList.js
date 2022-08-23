import Item from "../Item/Item";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./ItemList.css";
import { useLocation } from "react-router-dom";

const ItemList = ({ items, setFilterValue, filter }) => {
  // const createOrder = (e) => {
  //   const db = getFirestore();
  //   const orderCollectionQuery = collection(db, "orders");
  //   const order = {
  //     buyer: { name: "Juan", phone: "3814", email: "tester@tester" },
  //     items: items.map((products) => ({
  //       name: products.title,
  //       price: products.price,
  //     })),
  //     total: items.reduce((acc, products) => acc + products.price, 0),
  //   };
  //   addDoc(orderCollectionQuery, order).then((response) => {
  //     console.log(response);
  //   });
  // };

  const shouldShowSelector = () => {
    const pathName = window.location.pathname;
    return Boolean(pathName === "/category");
  };

  return (
    <>
      {shouldShowSelector() && (
        <div className="selector-div">
          <select
            value={filter}
            onChange={(event) => setFilterValue(event)}
            className="selector"
          >
            <option value="">Seleccione una categoría...</option>
            <option value="bombacha">Bombacha</option>
            <option value="conjunto">Conjunto</option>
            <option value="pijama">Pijama</option>
          </select>
        </div>
      )}
      <div className="item-list">
        {items.map((item) => (
          <Item
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
