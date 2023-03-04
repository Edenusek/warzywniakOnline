import React, { Fragment } from "react";
import BoxDescription from "./BoxDescription";
import BtnBox from "./BtnBox";
import classes from "./ChoiceBox.module.css";

const ChoiceBox = () => {
  return (
    <div className={classes.all}>
      <h2 className={classes.header}>Wybierz swój box!</h2>
      <div className={classes.centerBox} >
      <div className={classes.box}>
        
        <div className={classes.boxBoxes}>
          <div className={classes.premium}></div>

          <span>Warzywa i owoce</span>
          <h3>Box Premium</h3>
          <p>150 zł</p>

          <BtnBox btn="Dodaj do koszyka" />
        </div>
        <div className={classes.boxBoxes}>
          <div className={classes.sport}></div>
          <span>Warzywa i owoce</span>
          <h3>Box Sport</h3>
          <p>140 zł</p>

          <BtnBox btn="Dodaj do koszyka" />
        </div>
      
        <div className={classes.boxBoxes}>
          <div className={classes.fruits}></div>
          <span>Owoce</span>
          <h3>Box Owoc</h3>
          <p>100 zł</p>

          <BtnBox btn="Dodaj do koszyka" />
        </div>
        <div className={classes.boxBoxes}>
          <div className={classes.standard}></div>
          <span>Warzywa i owoce</span>
          <h3>Box Standard</h3>
          <p>120 zł</p>

          <BtnBox btn="Dodaj do koszyka" />
        </div>
      
        <div className={classes.boxBoxes}>
          <div className={classes.keto}></div>
          <span>Warzywa i owoce</span>
          <h3>Box Keto</h3>
          <p>160 zł</p>

          <BtnBox btn="Dodaj do koszyka" />
        </div>
        <div className={classes.boxBoxes}>
          <div className={classes.resistance}></div>
          <span>Warzywa i owoce</span>
          <h3>Box Odporność</h3>
          <p>130 zł</p>

          <BtnBox btn="Dodaj do koszyka" />
        </div>
      
    </div>
      </div>
    </div>
  );
};

export default ChoiceBox;
