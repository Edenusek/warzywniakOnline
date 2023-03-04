import React, { Fragment } from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import classes from './Contact.module.css'

const ContactPage = () => {
  return (
    <Fragment>
    <div className={classes.box} >
      <h1>Masz Pytania?</h1>
      <p>Interesuje Cię oferta dla firm?</p>
      <div>
        <div>
          <ContactForm/>
        </div>
        <div>
          <p>kontakt@kontakt.pl</p>
        </div>
      </div>
    </div>
    <Footer/>
    </Fragment>
  )
}

export default ContactPage