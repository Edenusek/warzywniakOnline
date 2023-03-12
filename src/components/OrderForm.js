import React, { Fragment } from "react";

import classes from "./OrderForm.module.css";

const OrderForm = () => {
  return (
    <Fragment>
      <form>
        <div className={classes.wrapper}>
          <div className={classes.formBox}>
            <h2>Adres zamawiającego</h2>
            <div className={classes.inputName}>
              <div>
                <label htmlFor="name">Imię: </label>
                <input type="text"  id="name" />
              </div>
              <div>
                <label htmlFor="surname" >Nazwisko: </label>
                <input type="text" id="surname" />
              </div>
            </div>
            <div className={classes.inputOrder}>
              <label htmlFor="company" >Firma</label>
              <input type="text" id="company" />
              <label htmlFor="email" >E-mail</label>
              <input type="email" id="email" />
              <label htmlFor="phone">Telefon</label>
              <input type="number" id="phone" />
              <label htmlFor="street" >Ulica</label>
              <input type="text" id="street" />
              <label htmlFor="houseNumber" >Nr domu/mieszkanie</label>
              <input type="number" id="houseNumber" />
              <label htmlFor="city" >Miasto</label>
              <input type="text" id="city" />
              <label htmlFor="country" >Kraj</label>
              <input type="text" id="country" />
              <label htmlFor="postCode" >Kod pocztowy</label>
              <input type="number" id="postCode" />
              <label htmlFor="nip" >NIP</label>
              <input type="number" id="nip" />
            </div>
          </div>

          <div>
            <div className={classes.basketBox}>
              <h2>podsumowanie</h2>
              <div className={classes.basket}>
                <p>2 produkty</p> <p>20 zł</p>
              </div>
              <label>Bon rabatowy</label>
              <input type="text" />
            </div>
            <div  >
              <h2>produkty w koszyku</h2>
            </div>
            <span>Box sport </span> <span>1 szt</span> <span>150 zł</span>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default OrderForm;
