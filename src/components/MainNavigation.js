import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.nav}>
      <nav>
        <ul>
          <NavLink to=".." className={classes.logo}>
            Pan Jarzynka
          </NavLink>
          <li>
            <NavLink to="/shop">Sklep</NavLink>
          </li>
          <li>
            <NavLink to="/forCompany">Oferta dla Firm</NavLink>
          </li>
          <li>
            <NavLink to="/about">O Nas</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
