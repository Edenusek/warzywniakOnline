import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Also from "../components/Also";
import BtnBox from "../components/BtnBox";
import ChoiceBox from "../components/ChoiceBox";
import Instruction from "../components/Instruction";
import WhyWorth from "../components/WhyWorth";
import vegetable from "../img/warzywa.jpg";
import AboutPage from "./About";
import classes from "./Home.module.css";
const HomePage = () => {
  return (
    <Fragment>
      <div className={`${classes.img} ${classes.flex}`}>
        <h1>Zamów!</h1>
        <div className={classes.flex}>
          <p>Skrzynka świeżych warzyw i owoców prosto pod Twoje drzwi</p>
          <p>Z Polskich pól, od Polskich rolników</p>
        </div>
        <BtnBox path="./shop" btn="ZOBACZ SKRZYNKI" />
      </div>

      <AboutPage />
      <Instruction />
      <WhyWorth/>
      <ChoiceBox />
     <div>
     <Also/>
     </div>
    </Fragment>
  );
};

export default HomePage;
