import React, { useState } from "react";
// import Boxes from "../store/ProductData";
import Products from "../data/db.json";
import BoxItem from "./Boxes/BoxItem/BoxItem";
import BoxItemForm from "./Boxes/BoxItem/BoxItemForm";
import classes from "./ChoiceBox.module.css";

const ChoiceBox = () => {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (box) => {
    setCart((prevCart) => [...prevCart, box]);
  };

  console.log("cart", cart);

  return (
    <form className={classes.all}>
      <h1 className={classes.header}>Wybierz swój box!</h1>
      <div className={classes.centerBox}>
        <ul className={classes.box}>
          {Products.boxes.map((box) => (
            <BoxItem key={box.id} product={box} addToCartHandler={addToCartHandler} />
          ))}
        </ul>
      </div>
    </form>
  );
};

export default ChoiceBox;

// export const boxesLoader = async () => {

//   const res = await fetch("http://localhost:3500/boxes");

//   const resData = await res.json()
//   console.log(resData)

//   return resData;
// }
