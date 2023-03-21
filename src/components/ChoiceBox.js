import React, { useState } from "react";
import Boxes from "../store/ProductData";
import BoxItemForm from "./Boxes/BoxItem/BoxItemForm";
import classes from "./ChoiceBox.module.css";

const ChoiceBox = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (selectedBox) => {
    setCart([...cart, selectedBox]);
    console.log(cart)
  };



  return (
    <form >
      <div className={classes.all}>
        <h1 className={classes.header}>Wybierz swój box!</h1>
        <div className={classes.centerBox}>
          <ul className={classes.box}>
            {Boxes.map((box) => (
              <li key={box.id} className={classes.boxBoxes}>
                <img src={box.img} alt={box.type} />

                <span>{box.type}</span>
                <h3>{box.boxName}</h3>
                <p>{box.price} zł </p>

                <BoxItemForm box={box} onAddToCart={addToCart} />
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default ChoiceBox;
