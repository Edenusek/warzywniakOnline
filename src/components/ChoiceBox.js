// renderuje po koleji wszystkie boxy //

import React, { useState } from "react";
import Boxes from "../store/ProductData";
import  {BoxItem } from "./Boxes/BoxItem/BoxItem";
import classes from "./ChoiceBox.module.css";

const ChoiceBox = () => {

  
  const [cart, setCart] = useState([]);
  
  // po kliknieciu dodaj do koszyka przekazuje stan do cart // 

  // funkcja przekazana w props do BoxItem //

  const addToCart = (selectedBox) => {
   
  setCart((prevCart) => {
    const newCart = [...prevCart, selectedBox];
    console.log(newCart)
    return newCart
  })
  };

  console.log("cart", cart);

  return (
    
      <div className={classes.all}>
        <h1 className={classes.header}>Wybierz swój box!</h1>
        <div className={classes.centerBox}>
          <ul className={classes.box}>
            {Boxes.map((box) => (
              <BoxItem key={box.id} box={box} onAddToCart={addToCart}/>
            ))}
          </ul>
        </div>
      </div>
    
  );
};

export default ChoiceBox;

// export const boxesLoader = async () => {

//   const res = await fetch("http://localhost:3500/boxes");

//   const resData = await res.json()
//   console.log(resData)

//   return resData;
// }
