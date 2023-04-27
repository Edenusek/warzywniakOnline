// renderuje po koleji wszystkie boxy //

import React, { useState } from "react";
import Boxes from "../store/ProductData";
import  {BoxItem } from "./Boxes/BoxItem/BoxItem";
import classes from "./ChoiceBox.module.css";

const ChoiceBox = () => {

  
  
  return (

  
    
      <div className={classes.all}>
        <h1 className={classes.header}>Wybierz swój box!</h1>
        <div className={classes.centerBox}>
          <ul className={classes.box}>
            {Boxes.map((box) => (
              <BoxItem key={box.id} box={box} />
            ))}
          </ul>
        </div>
      </div>
      
  );
};

export default ChoiceBox;

