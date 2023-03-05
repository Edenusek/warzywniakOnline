import React, { useState } from "react";
import BtnBox from "./BtnBox";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredText, setEnteredText] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.targert.value);
    console.log(enteredText);
  };
  return (
    <form className={classes.box}>
      <div className={classes.inputsBox}>
        <label htmlFor="name">Imię i Nazwisko</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={nameChangeHandler}
          value={enteredName}
        />
        <label htmlFor="email">Adres E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        <label htmlFor="postContact">Wpisz wiadomość</label>
        <textarea id="postContact" name="textarea" />
        <BtnBox btn="Wyślij" />
      </div>
    </form>
  );
};

export default ContactForm;
