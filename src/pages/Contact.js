import React, { Fragment } from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import classes from './Contact.module.css'

const ContactPage = () => {
  return (
    <Fragment>
    <div className={classes.box} >
      <h1>Masz Pytania?</h1>
      <h3>Interesuje Cię oferta dla firm?</h3>
      <div>
        <div>
          <ContactForm/>
        </div>
       
      </div>
      <div className={classes.adress}>
            <div>
            <p>Adres</p>
            <span>GdzieśCity 00-000 ul.Jakaś 5</span>
            </div>
            <div>
            <p>Telefon</p>
            <span>777-777-777-21</span>
            </div>
            <div>
            <p>E-mail</p>
            <span>adres@adres</span>
            </div>
          </div>
    </div>
    <Footer/>
    </Fragment>
  )
}

export default ContactPage