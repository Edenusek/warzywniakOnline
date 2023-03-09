import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

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
            Cebula Celestyna
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
