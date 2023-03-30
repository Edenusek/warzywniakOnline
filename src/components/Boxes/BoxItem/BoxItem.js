// komponent pojedyńczego box renderowany w ChoiceBox//

import React from "react";

import Button from "../../UI/Button";

import classes from './BoxItem.module.css'

export const BoxItem = (props) => {

    // const {box, onAddToCart} = props

  const handleAddToCart = () => {
    
    props.onAddToCart(props.box);
  };

  return (
    <li key={props.box.id} className={classes.boxBoxes}>
      <img src={props.box.img} alt={props.box.type} />

      <span>{props.box.type}</span>
      <h3>{props.box.boxName}</h3>
      <p>{props.box.price} zł </p>

      <Button box={props.box} onClick={handleAddToCart }>dodaj  do koszyka</Button>
    </li>
  );
};
