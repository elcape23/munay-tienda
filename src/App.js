import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import NavBar from "./Componentes/NavBar/NavBar";
import CartContainer from "./Componentes/CartContainer/CartContainer";
import Provider from "./Context/CartContext/CartContext";
import { Home } from "./Componentes/Home/Home";
import "./App.css";

function App() {
  return (
    <Provider>
      <BrowserRouter className="master-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<ItemListContainer />}></Route>
          <Route path="details/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
