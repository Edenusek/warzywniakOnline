import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <div className={classes.box} >
        {/* <Link to='/' className={classes.link}><h2>Cebula Celestyna</h2></Link> */}
        <div >
            <Link to='https://www.facebook.com/'><FaFacebook className={classes.icons} /></Link>
            <Link to='https://www.instagram.com/'><FaInstagram className={classes.icons} /></Link>
        </div>
        <div>
             <Link to='/shop'  >Sklep</Link>
             <Link to='/regulations' >Regulamin</Link>
             <Link to='/privatePolitics' >Polityka Prywatności</Link>
             <Link to='/contact' >Kontakt</Link> 
            
        </div>
        <h2> &copy; Cebula Celestyna {year}</h2>
    </div>
  )
}

export default Footer