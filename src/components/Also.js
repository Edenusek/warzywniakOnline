import React from "react";
import classes from './Also.module.css'

const Also = () => {
  return (
    <div className={classes.box} >
     <div className={classes.shadow}>
     <div className={classes.txt} >
     <p>W skrzynce znajdziesz również</p>
      <h2>Popularne przepisy z warzywami i owoców!</h2>
      <span>
        Dodatkowo w gratisie do każdego zamówienia dołączamy przepisy autorstwa
        Anny Rosy, certyfikowanej dietetyczki. Ułatwi ci to wykorzystanie
        wszystkich warzyw i owoców oraz poznasz nowe dania i smaki. Przepisy
        często są proste i szybkie w przygotowaniu, więc nawet amatorzy
        gotowania na pewno znajdą coś dla siebie.
      </span>
     </div>
     </div>
    </div>
  );
};

export default Also;
