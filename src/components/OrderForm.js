import React, { Fragment } from "react";
import Button from "./UI/Button";
import classes from "./OrderForm.module.css";
import Cart from "./Cart/Cart";
import ShippingDetails from "./Cart/ShippingDetails";

const OrderForm = (props) => {




  return (
    <Fragment>
      <div className={classes.wrapper}>
        <ShippingDetails />

        <Cart  />
      </div>
    </Fragment>
  );
};

export default OrderForm;
