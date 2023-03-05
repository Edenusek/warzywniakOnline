import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className={classes.box} >
        <Link to='/'><h2>Pan Jarzynka</h2></Link>
        <div >
            <a href='https://www.facebook.com/'>Facebook</a>
            <a href='https://www.instagram.com/'>Instagram</a>
        </div>
        <div>
             <Link to='/shop'  >Sklep</Link>
             <a>Regulamin</a>
             <a>Polityka Prywatności</a>
             <Link to='/contact' >Kontakt</Link> 
            
        </div>
       
    </div>
  )
}

export default Footer