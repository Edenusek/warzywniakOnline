import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import classes from './WhyWorth.module.css'
import { faCheckSquare, faCoffee, faClock, faCarrot, faTruckFast, faBox } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee, faClock, faCarrot, faTruckFast, faBox )


const WhyWorth = () => {
  return (
    <div className={classes.box} >
      <h1>Dlaczego warto zamówić skrzynkę pełną owoców i warzyw?</h1>
      <div className={classes.iconBox}>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="coffee" />
          <h2>Wygoda</h2>
        </div>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="clock" />
          <h2>Oszczędność czasu</h2>
        </div>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="carrot" />
          <h2>Świeże warzywa i owoce</h2>
        </div>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="truck-fast" />
          <h2>Szybka dostawa</h2>
        </div>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="box" />
          <h2>Zabezpieczona przesyłka</h2>
        </div>
      </div>
    </div>
  );
};

export default WhyWorth;
