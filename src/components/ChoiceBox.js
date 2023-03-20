import React, { useState } from "react";
import Button from "../components/UI/Button";
import Boxes from "../store/ProductData";
import BoxItemForm from "./Boxes/BoxItem/BoxItemForm";
import classes from "./ChoiceBox.module.css";

const ChoiceBox = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const selectedBox = Boxes.find((box) => box.id === id);
    setCart([...cart, selectedBox]);
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form onSubmit={addHandler}>
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

                <BoxItemForm />
                {console.log(box.type)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default ChoiceBox;
