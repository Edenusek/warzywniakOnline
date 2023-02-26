import React from 'react'
import { Link } from 'react-router-dom'
import ShopPage from '../pages/Shop'
import Logo from './Logo'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.nav} >
       <nav>
        <ul>
        <Link className={classes.logo} to='/' >Pan Jarzynka</Link>
          <li><Link to='/shop' >Sklep</Link></li>
          <li><Link to='/forCompany' >Oferta dla Firm</Link></li>
          <li><Link to='/about' >O Nas</Link></li>
          <li><Link to='/contact' >Kontakt</Link></li>
        </ul>
       </nav>
        </header>
  )
}

export default MainNavigation