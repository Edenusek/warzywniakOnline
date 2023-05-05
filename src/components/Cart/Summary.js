import React, { useContext } from "react";

import classes from "./Summary.module.css";
import CartContext from "../Context/CartContext";
import Button from "../UI/Button";

const Summary = () => {

  const { items } = useContext(CartContext);

  const sumProduct = items.length

  const numberOfProducts = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  const sumPrice = items.reduce((amount, item) => +item.price + amount, 0);

  return (
    <div className={classes.cart}>
      <span>{sumProduct} produkt(y)</span>
      <span>Łącznie: {sumPrice} zł</span>

      <Button>zamów</Button>
    </div>
  );
};

export default Summary;
