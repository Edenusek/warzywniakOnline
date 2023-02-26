import React from 'react'
import classes from './BoxDescription.module.css'

const BoxDescription = (props) => {
  return (
    <div className={classes.box} >
        <span>{props.inside}</span>
        <h3>{props.boxName}</h3>
        <p>{props.price} zł</p>
    </div>
  )
}

export default BoxDescription