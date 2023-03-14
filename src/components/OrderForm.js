import React, { Fragment } from "react";
import Button from "./UI/Button";
import classes from "./OrderForm.module.css";

const OrderForm = () => {

const orderHandler = () => {
  console.log('działam')
}

  return (
    <Fragment>
      <form>
        <div className={classes.wrapper}>
          <div className={classes.formBox}>
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
              <Button onClick={orderHandler} >zamów</Button>
            </div>
          </div>

          <div className={classes.basketBox}>
            <div>
              <h3>podsumowanie</h3>
              <div className={classes.basket}>
                <p className={classes.prod}>2 produkty</p> <p>20 zł</p>
              </div>
              <label>Kod rabatowy</label>
              <input type="text" />
            </div>
            <div>
              <h3>produkty w koszyku</h3>
            </div>
            <div className={classes.basket}>
              <span className={classes.boxName}>Box premium </span>{" "}
              <span className={classes.boxAmount}>1 szt</span>{" "}
              <span>110 zł</span>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default OrderForm;
