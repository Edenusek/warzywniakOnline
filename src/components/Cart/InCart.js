import React, { useContext } from "react";
import OrderItem from "../OrderItem";
import CartContext from "../Context/CartContext";
import classes from './InCart.module.css'

const InCart = () => {

    const { boxes } = useContext(CartContext)

  return (
  <div className={classes.wrapper} >
  
  {boxes.map(box => <OrderItem box={box}/> )}
  
</div>
  )
};

export default InCart;
