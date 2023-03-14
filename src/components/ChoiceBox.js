import React from "react";
import Button from "../components/UI/Button";
import Boxes from '../store/ProductData'
import classes from "./ChoiceBox.module.css";


const ChoiceBox = () => {

  const addHandler = (e) => {
e.preventDefault()
console.log(e.target.id)
  }
  console.log(Boxes[1].img)

  return (
   <form onSubmit={addHandler}>
     <div className={classes.all}>
      <h1 className={classes.header}>Wybierz swój box!</h1>
      <div className={classes.centerBox} >
      <div className={classes.box}>
 
        {Boxes.map(box => (
          <div key={box.id} className={classes.boxBoxes}>
          <img src={box.img} ></img>

          <span>{box.name}</span>
          <h3>{box.boxName}</h3>
          <p>{box.price} zł </p>

          <Button onClick={addHandler}  >dodaj do koszyka</Button>
        </div>
   
        ))}
        
       
      
    </div>
      </div>
    </div>
    </form>
  );
};

export default ChoiceBox;
