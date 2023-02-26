import React from "react";
import BoxDescription from "./BoxDescription";
import BtnBox from "./BtnBox";
import classes from "./ChoiceBox.module.css";

const ChoiceBox = () => {
  return (
    <div>
      <h2 className={classes.header}>Wybierz swój box!</h2>
      <div className={classes.box}>
        <div className={classes.centerBtn}>
          <div className={classes.boxBoxes}>
            <div className={classes.premium}></div>
            <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Premium"
              price="129.00"
            />
            <BtnBox btn="Dodaj do koszyka" />
          </div>
          <div className={classes.boxBoxes}>
            <div className={classes.sport}></div>
            <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Odporność"
              price="129.00"
            />
            <BtnBox btn="Dodaj do koszyka" />
          </div>
        </div>
        <div className={classes.centerBtn}>
          <div className={classes.boxBoxes}>
            <div className={classes.fruits}></div>
            <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Odporność"
              price="129.00"
            />
            <BtnBox btn="Dodaj do koszyka" />
          </div>
          <div className={classes.boxBoxes}>
            <div className={classes.standard}></div>
            <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Odporność"
              price="129.00"
            />
            <BtnBox btn="Dodaj do koszyka" />
          </div>
        </div>
        <div className={classes.centerBtn}>
          <div className={classes.boxBoxes}>
            <div className={classes.keto}></div>
            <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Odporność"
              price="129.00"
            />
            <BtnBox btn="Dodaj do koszyka" />
          </div>
          <div className={classes.boxBoxes}>
            <div className={classes.resistance}></div>
            <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Odporność"
              price="129.00"
            />
            <BtnBox btn="Dodaj do koszyka" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceBox;
