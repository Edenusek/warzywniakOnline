// komponent pojedyńczego box renderowany w ChoiceBox//

import React, { useContext } from "react";
import Button from "../../UI/Button";
import classes from "./BoxItem.module.css";
import CartContext from "../../Context/CartContext";

export const BoxItem = props => {
  const { addBox } = useContext(CartContext);

  const addHandleBox = () => {
    addBox(props.box);
    console.log(props.box);
  };

  return (
    <li key={props.box.id} className={classes.boxBoxes}>
      <img src={props.box.img} alt={props.box.type} />

      <span>{props.box.type}</span>
      <h3>{props.box.boxName}</h3>
      <p>{props.box.price} zł </p>

      <Button onClick={addHandleBox}>dodaj do koszyka</Button>
    </li>
  );
};
