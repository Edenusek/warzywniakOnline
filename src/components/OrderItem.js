import React, { useContext } from "react";
import CartContext from "./Context/CartContext";

const OrderItem = props => {
  const { removeBox } = useContext(CartContext);

  const removeHandleBox = () => {
    removeBox(props.box.id);
  };

  return (
    <div>
      <p>{props.box.boxName}</p>
      <p>{props.box.price} zł</p>
      <button onClick={removeHandleBox}>Usuń</button>
    </div>
  );
};

export default OrderItem;
