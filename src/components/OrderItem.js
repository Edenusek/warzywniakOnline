import React, { useContext } from "react";
import CartContext from "./Context/CartContext";

import classes from "./OrderItem.module.css";
import Button from "./UI/Button";
import Input from "./UI/Input";

const OrderItem = ({ item }, props) => {
  const { items, removeBox } = useContext(CartContext);

  const boxesLength = items.length;

  // coś z tym zrobić żeby dodawało te same produkty do siebie

  const numberOfProducts = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const removeHandleBox = () => {
    removeBox(item.id);
  };

  return (
    <div className={classes.box}>
      <p> Nazwa: {item.boxName}</p>
      <p>Cena: {item.price} zł</p>
      <div className={classes.input}>
        <button>-</button>
        <Input
          label="Ilość"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+</button>
      </div>
      <Button onClick={removeHandleBox}>Usuń</Button>
    </div>
  );
};

export default OrderItem;

// dodać ilość dodawanych boxów i usuwanie tylko jednego
