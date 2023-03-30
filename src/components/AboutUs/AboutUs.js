import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./AboutUs.module.css";
import MyLink from "../UI/MyLink";

const AboutUs = () => {
  return (
    <Fragment>
      <div className={classes.flex}>
        <div className={classes.aboutBox}>
          <h1>Zaufana firma z doświadczeniem</h1>
          <div>
            <p>
              Jesteśmy zaufaną firmą z 4-letnim doświadczeniem w dostarczaniu
              świeżych warzyw i słodkich owoców dla naszych klientów. Mamy
              również wypracowane świetne relacje z rolnikami, którzy zaopatrują
              nas bezpośrednio w produkty wyższej jakości
            </p>
          </div>

         
        </div>
          <MyLink path="./shop" name="zobacz skrzynki" />
      </div>
    </Fragment>
  );
};

export default AboutUs;
