import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import classes from './WhyWorth.module.css'
import { } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee, faClock, faCarrot, faTruckFast, faBox } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee, faClock, faCarrot, faTruckFast, faBox )


const WhyWorth = () => {
  return (
    <div className={classes.box} >
      <h1>Dlaczego warto zamówić skrzynkę pełną owoców i warzyw?</h1>
      <div className={classes.iconBox}>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="coffee" />
          <p>Wygoda</p>
        </div>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="clock" />
          <p>Oszczędność czasu</p>
        </div>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="carrot" />
          <p>Świeże warzywa i owoce</p>
        </div>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="truck-fast" />
          <p>Szybka dostawa</p>
        </div>
        <div>
        <FontAwesomeIcon className={classes.icon} icon="box" />
          <p>Zabezpieczona przesyłka</p>
        </div>
      </div>
    </div>
  );
};

export default WhyWorth;
