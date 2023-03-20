import React from "react";

import classes from "./ShippingDetails.module.css";

const ShippingDetails = () => {
  return (
    <div className={classes.box}>
      <h3>Adres zamawiającego</h3>
      <div className={classes.inputName}>
        <div>
          <label htmlFor="name">
            Imię<span className={classes.redStar}>*</span>{" "}
          </label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="surname">
            Nazwisko<span className={classes.redStar}>*</span>{" "}
          </label>
          <input type="text" id="surname" />
        </div>
      </div>
      <div className={classes.inputOrder}>
        <label htmlFor="company">Firma</label>
        <input type="text" id="company" />
        <label htmlFor="nip">NIP</label>
        <input type="number" id="nip" />
        <label htmlFor="email">
          E-mail<span className={classes.redStar}>*</span>
        </label>
        <input type="email" id="email" />
        <label htmlFor="phone">
          Telefon<span className={classes.redStar}>*</span>
        </label>
        <input type="number" id="phone" />
        <label htmlFor="street">
          Ulica<span className={classes.redStar}>*</span>
        </label>
        <input type="text" id="street" />
        <label htmlFor="houseNumber">
          Nr domu/mieszkanie<span className={classes.redStar}>*</span>
        </label>
        <input type="number" id="houseNumber" />
        <label htmlFor="city">
          Miasto<span className={classes.redStar}>*</span>
        </label>
        <input type="text" id="city" />
        <label htmlFor="country">
          Kraj<span className={classes.redStar}>*</span>
        </label>
        <input type="text" id="country" />
        <label htmlFor="postCode">
          Kod pocztowy<span className={classes.redStar}>*</span>
        </label>
        <input type="number" id="postCode" />
      </div>
      <div className={classes.btn}>
        
      </div>
    </div>
  );
};

export default ShippingDetails;
