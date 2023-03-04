import React, { Fragment } from 'react'
import BtnBox from '../components/BtnBox'
import classes from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <Fragment>
    <div className={`${classes.flex}`}>
      <div className={classes.aboutBox} >
        <h1>Zaufana firma z doświadczeniem</h1>
        <div>
          <p>
            Jesteśmy zaufaną firmą z 4-letnim doświadczeniem w dostarczaniu
            świeżych warzyw i słodkich owoców dla naszych klientów. Mamy również
            wypracowane świetne relacje z rolnikami, którzy zaopatrują nas
            bezpośrednio w produkty wyższej jakości
          </p>
        </div >
       <div className={classes.btn} >
       <BtnBox path='./shop' btn='ZOBACZ SKRZYNKI'  />
       </div>
       </div>
    </div>
    </Fragment>
  )
}

export default AboutUs