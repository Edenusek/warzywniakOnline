import React, { useContext } from "react";
import CartContext from "./Context/CartContext";

import classes from './OrderItem.module.css'
import Button from "./UI/Button";


const OrderItem = ({box}) => {
  const { removeBox } = useContext(CartContext);

  const removeHandleBox = () => {
    removeBox(box.id);
  };

  return (
    <div className={classes.box} >
      <p> Nazwa: {box.boxName}</p>
      <p>Cena: {box.price} zł</p>
      <p> sztuk</p>
      <Button onClick={removeHandleBox} >Usuń</Button>
    </div>
  );
};

export default OrderItem;
