import React, { useContext } from "react";
import OrderItem from "../OrderItem";
import CartContext from "../Context/CartContext";
import classes from './InCart.module.css'

const InCart = () => {

    const { items } = useContext(CartContext)

  return (
  <div className={classes.wrapper} >
  
  {items.map(item => <OrderItem item={item}/> )}
  
</div>
  )
};

export default InCart;
