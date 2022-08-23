import Carrito from "../../Assets/Carrito.png";
import "./CardWidget.css";

const CardWidget = (props) => {
  return (
    <>
      <img src={Carrito} className="carrito" />
    </>
  );
};

export default CardWidget;
