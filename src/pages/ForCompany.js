import React, { Fragment } from "react";
import BtnBox from "../components/BtnBox";
import Footer from "../components/Footer";
import classes from "./ForCompany.module.css";

const ForCompanyPage = (props) => {
  return (
    <Fragment>
    <div className={classes.flex}>
    <div className={classes.box} >
      <h1>Już w krótce!</h1>
      <p>
        Jesteśmy w trakcje realicazji ofrty dla firm. Zadbamy o to by każdy był
        zadowolony z Naszych warzyw i owoców.
      </p>
      <span>Sprawdź aktualną ofretę!</span>
      <div className={classes.btn} >
      <BtnBox path="./shop" btn="ZOBACZ SKRZYNKI" />
    </div >
      </div>
    </div>
    <Footer/>
    </Fragment>
  );
};

export default ForCompanyPage;
