import React from 'react'
import BtnBox from './BtnBox'
import classes from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <form className={classes.box} >
        <div className={classes.inputsBox} > 
        <label htmlFor='name' >Imię i Nazwisko</label>
        <input type='text' name='name'/>
        <label htmlFor='email' >Adres E-mail</label>
        <input type='email' name='email' />
        <textarea/>
        <BtnBox btn='Wyślij' />
        </div>
       
    </form>
  )
}

export default ContactForm