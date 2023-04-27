import React, { useContext } from "react";
import Button from "../UI/Button";

import classes from "./Cart.module.css";
import CartContext from "../Context/CartContext";
import OrderItem from "../OrderItem";

const Cart = (props) => {
 
 const { boxes } = useContext(CartContext)

 const boxesLength = boxes.length

  return (
    <div className={classes.cartBox}>
      <div>
        <h3>podsumowanie</h3>
        <div className={classes.cart}>
          <span>{boxesLength} produkt(y)</span> <span>Łącznie: 20 zł</span>
        </div>
        <label>Kod rabatowy</label>
        <input type="text" />
      </div>
      <div>
        <h3>produkty w koszyku</h3>
      </div>
      <div className={classes.basket}>
        <span className={classes.boxName}></span>{" "}
        <span className={classes.boxAmount}>{boxesLength} szt</span> <span> </span>
        {boxes.map(box => <OrderItem box={box}/> )}
        
      </div>
      <div className={classes.btn}>
        <Button >zamów</Button>
      </div>
    </div>
  );
};

export default Cart;
