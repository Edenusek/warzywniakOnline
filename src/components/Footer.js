import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'

// const facebook = <FontAwesomeIcon icon={faBook} />

const Footer = () => {
  return (
    <div className={classes.box} >
        <Link to='/'><p>Pan Jarzynka</p></Link>
        <div className={classes.color} >
            <Link>FaceBook</Link>
            <Link>Instagram</Link>
        </div>
        <ul>
            <li> <a href='/shop'>Sklep</a></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <p>Działa to</p>
    </div>
  )
}

export default Footer