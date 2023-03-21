import React from "react";
import Button from "../../UI/Button";

const BoxItemForm = (props) => {

  const handleAddToCart = () => {
    props.onAddToCart(props.box)
  }

  return (
    <form>
      <Button onClick={handleAddToCart} >dodaj do koszyka</Button>
    </form>
  );
};

export default BoxItemForm;
