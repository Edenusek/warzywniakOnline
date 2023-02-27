import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './WhyWorth.module.css'
import { faClock } from "@fortawesome/free-solid-svg-icons";


const clock = <FontAwesomeIcon icon={faClock} />
const WhyWorth = () => {
  return (
    <div className={classes.box} >
      <h1>Dlaczego warto zamówić skrzynkę pełną owoców i warzyw?</h1>
      <div className={classes.iconBox}>
        <div>
          <p>Wygoda</p>
        </div>
        <div>
        {clock}
          <p>Oszczędność czasu</p>
        </div>
        <div>
        <FontAwesomeIcon icon="fa-sharp fa-regular fa-crate-apple" />
          <p>Świeże warzywa i owoce</p>
        </div>
        <div>
          <p>Szybka dostawa</p>
        </div>
        <div>
          <p>Zabezpieczona przesyłka</p>
        </div>
      </div>
    </div>
  );
};

export default WhyWorth;
