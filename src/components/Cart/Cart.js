import React, { useContext } from "react";
import Button from "../UI/Button";

import classes from "./Cart.module.css";
import InCart from "./InCart";
import Summary from "./Summary";

const Cart = (props) => {
 

 
 

  return (
    <div className={classes.cartBox}>
      <h3>produkty w koszyku</h3>
      <InCart/>
      
        <h3>podsumowanie</h3>
       
       <Summary/> 
      
      
    </div>
  );
};

export default Cart;
