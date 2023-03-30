import React, { Fragment } from "react";
import AboutUs from "../components/AboutUs";
import Also from "../components/Also";
import Button from "../components/UI/Button";
import ChoiceBox from "../components/ChoiceBox";
import Footer from "../components/Footer";
import Instruction from "../components/Instruction";
import WhyWorth from "../components/WhyWorth";
import Basket from './Basket'



import classes from "./Home.module.css";
import MyLink from "../components/UI/MyLink";
import { CartProvider } from "../store/cart-context";
const HomePage = () => {
  return (
    <Fragment>
      <div className={classes.img}>
        <div className={classes.flex}>
          <div className={classes.animationBox}>
          <h1 className={classes.orderAnimation} >Zamów!</h1>
          </div>

          <p>Skrzynka świeżych warzyw i owoców prosto pod Twoje drzwi</p>
          <p>Z Polskich pól, od Polskich rolników</p>

          <MyLink path="./shop" name="ZOBACZ SKRZYNKI" />
        </div>
      </div>

    <AboutUs/>
      <Instruction />
      <WhyWorth />
      <ChoiceBox />
      <Basket/>
      <Also />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
