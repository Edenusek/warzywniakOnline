import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Also from "../components/Also";
import BtnBox from "../components/BtnBox";
import ChoiceBox from "../components/ChoiceBox";
import Footer from "../components/Footer";
import Instruction from "../components/Instruction";
import WhyWorth from "../components/WhyWorth";
import vegetable from "../img/warzywa.jpg";
import AboutPage from "./About";
import classes from "./Home.module.css";
const HomePage = () => {
  return (
    <Fragment>
      <div className={classes.img}>
        <div className={classes.flex}>
          <h1>Zamów!</h1>

          <span>Skrzynka świeżych warzyw i owoców prosto pod Twoje drzwi</span>
          <p>Z Polskich pól, od Polskich rolników</p>

          <BtnBox path="./shop" btn="ZOBACZ SKRZYNKI" />
        </div>
      </div>

    <AboutUs/>
      <Instruction />
      <WhyWorth />
      <ChoiceBox />
      <Also />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
