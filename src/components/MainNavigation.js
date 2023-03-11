import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import Onion from '../img/onion.png'

const MainNavigation = () => {
  let activeStyle = {
    color: '#60bb30',
  };

  let activeClassName = "underline";

  return (
    <header className={classes.nav}>
      <nav>
        <ul>
          <NavLink to="/" className={classes.logo}>
          <div className={classes.center} ><img src={Onion} ></img>  Cebula Celestyna</div>
          </NavLink>
          <li>
            <NavLink
              to="/shop"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Sklep
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forCompany"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Oferta dla Firm
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              O Nas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
