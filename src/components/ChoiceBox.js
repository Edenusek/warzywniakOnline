import React, { Fragment } from "react";
import BoxDescription from "./BoxDescription";
import BtnBox from "./BtnBox";
import classes from "./ChoiceBox.module.css";

const ChoiceBox = () => {
  return (
    <div className={classes.all}>
      <h2 className={classes.header}>Wybierz swój box!</h2>
      <div className={classes.box}>
        <div className={classes.centerBtn}>
          <div className={classes.boxBoxes}>
            <div className={classes.premium}></div>

            <span>Warzywa i owoce</span>
            <h3>Box Premium</h3>
            <p>150 zł</p>

            {/* <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Premium"
              price="150.00"
            /> */}
            <BtnBox btn="Dodaj do koszyka" />
          </div>
          <div className={classes.boxBoxes}>
            <div className={classes.sport}></div>
            <span>Warzywa i owoce</span>
            <h3>Box Premium</h3>
            <p>150 zł</p>
            {/* <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Sport"
              price="139.00"
            /> */}
            <BtnBox btn="Dodaj do koszyka" />
          </div>
        </div>
        <div className={classes.centerBtn}>
          <div className={classes.boxBoxes}>
            <div className={classes.fruits}></div>
            <span>Warzywa i owoce</span>
            <h3>Box Premium</h3>
            <p>150 zł</p>
            {/* <BoxDescription
              inside="Owoce"
              boxName="Box Owoce"
              price="100.00"
            /> */}
            <BtnBox btn="Dodaj do koszyka" />
          </div>
          <div className={classes.boxBoxes}>
            <div className={classes.standard}></div>
            <span>Warzywa i owoce</span>
            <h3>Box Premium</h3>
            <p>150 zł</p>
            {/* <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Standard"
              price="129.00"
            /> */}
            <BtnBox btn="Dodaj do koszyka" />
          </div>
        </div>
        <div className={classes.centerBtn}>
          <div className={classes.boxBoxes}>
            <div className={classes.keto}></div>
            <span>Warzywa i owoce</span>
            <h3>Box Premium</h3>
            <p>150 zł</p>
            {/* <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Keto"
              price="155.00"
            /> */}
            <BtnBox btn="Dodaj do koszyka" />
          </div>
          <div className={classes.boxBoxes}>
            <div className={classes.resistance}></div>
            <span>Warzywa i owoce</span>
            <h3>Box Premium</h3>
            <p>150 zł</p>
            {/* <BoxDescription
              inside="Warszywa i owoce"
              boxName="Box Odporność"
              price="129.00"
            /> */}
            <BtnBox btn="Dodaj do koszyka" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceBox;
