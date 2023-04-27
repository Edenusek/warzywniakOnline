// komponent pojedyńczego box renderowany w ChoiceBox//

import React, { useContext } from "react";
import Button from "../../UI/Button";
import classes from "./BoxItem.module.css";
import CartContext from "../../Context/CartContext";

export const BoxItem = ({box}) => {
  const { addBox } = useContext(CartContext);

  const addHandleBox = () => {
    addBox(box);
    
  };

  return (
    <li key={box.id} className={classes.boxBoxes}>
      <img src={box.img} alt={box.type} />

      <span>{box.type}</span>
      <h3>{box.boxName}</h3>
      <p>{box.price} zł </p>

      <Button onClick={addHandleBox}>dodaj do koszyka</Button>
    </li>
  );
};
