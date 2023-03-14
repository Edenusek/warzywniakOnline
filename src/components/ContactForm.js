import React, { useState } from "react";
import Button from "../components/UI/Button";
import classes from "./ContactForm.module.css";

let messages = [
  {
  użytkowni: 'Edek',
  email: 'elo@elo.com',
  wiadomość: "Dzień dobry chciał bym ..."
}
]

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
    setEnteredText(event.target.value);
    
  };

  const sendMessageHandler = (event) => {
event.preventDefault()

console.log(`Użytkownik: ${enteredName} z adresu: ${enteredEmail} napisał wiadomość:  ${enteredText}`)

messages.push( {
  użytkownik: enteredName,
  email: enteredEmail,
  wiadomość: enteredText
} )

console.log(messages)

setEnteredName('')
setEnteredEmail('')
setEnteredText('')
  }
  return (
    <form onSubmit={sendMessageHandler} >
    <div className={classes.box}>
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
        <label htmlFor="textarea">Wpisz wiadomość</label>
        <textarea id="textarea" name="textarea" value={enteredText} onChange={textChangeHandler} />
        <Button type='submit' >wyślij</Button>
      </div>
    </div>
    </form>
  );
};

export default ContactForm;
