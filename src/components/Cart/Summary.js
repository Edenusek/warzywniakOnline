import React, { useContext } from "react";

import classes from "./Summary.module.css";
import CartContext from "../Context/CartContext";
import Button from "../UI/Button";

const Summary = () => {
  const { boxes } = useContext(CartContext);
  const boxesLength = boxes.length;
  const sumPrice = boxes.reduce((amount, box) => +box.price + amount, 0);
  return (
    <div className={classes.cart}>
      <span>{boxesLength} produkt(y)</span>
      <span>Łącznie: {sumPrice} zł</span>

      <Button>zamów</Button>
    </div>
  );
};

export default Summary;
