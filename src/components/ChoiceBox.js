import React from "react";
import BtnBox from "./BtnBox";
import Boxes from '../store/ProductData'
import classes from "./ChoiceBox.module.css";
import premium from '../img/premiumKoszyk.jpg'
import sport from '../img/sportKoszyk.jpg'

const ChoiceBox = () => {

  const addHandler = (e) => {
e.preventDefault()
console.log(e.target.id)
  }
  console.log(Boxes[1].img)

  return (
    <div className={classes.all}>
      <h1 className={classes.header}>Wybierz swój box!</h1>
      <div className={classes.centerBox} >
      <div className={classes.box}>
 
        {Boxes.map(box => (
          <div key={box.id} className={classes.boxBoxes}>
          <img src={box.img} ></img>

          <span>{box.name}</span>
          <h3>{box.boxName}</h3>
          <p>{box.price}</p>

          <BtnBox click={addHandler} btn="Dodaj do koszyka" />
        </div>
        ))}
        
       
      
    </div>
      </div>
    </div>
  );
};

export default ChoiceBox;
