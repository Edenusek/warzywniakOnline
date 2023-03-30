import React from "react";
import Button from "../UI/Button";

import classes from "./Cart.module.css";

const Cart = (props) => {
 
  // const addToCartHandler = (props) =>{
  //   props.onAddToCart(props.item)
  // }

  return (
    <div className={classes.cartBox}>
      <div>
        <h3>podsumowanie</h3>
        <div className={classes.cart}>
          <span>2 produkt(y)</span> <span>Łącznie: 20 zł</span>
        </div>
        <label>Kod rabatowy</label>
        <input type="text" />
      </div>
      <div>
        <h3>produkty w koszyku</h3>
      </div>
      <div className={classes.basket}>
        <span className={classes.boxName}></span>{" "}
        <span className={classes.boxAmount}>2 szt</span> <span> </span>
      </div>
      <div className={classes.btn}>
        <Button >zamów</Button>
      </div>
    </div>
  );
};

export default Cart;
