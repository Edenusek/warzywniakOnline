import React from "react";
import classes from './BoxItem.module.css'

const BoxItem = (props) => {
    const { product, addToCartHandler } = props;

    const handleAddToCart = (e) => {
        e.preventDefault()
      addToCartHandler(product);
    };
  
    return (
      <li key={product.id} className={classes.boxBoxes}>
        <img src={product.img} alt={product.type} />
        <span>{product.type}</span>
        <h3>{product.boxName}</h3>
        <p>{product.price} zł </p>
        <button onClick={handleAddToCart}>dodaj do koszyka</button>
      </li>
    );
  };
export default BoxItem;
