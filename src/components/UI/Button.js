import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Button.module.css'
const Button = (props) => {
  return (
    <div className={classes.btnBox}>
    <button className={classes.btn} type={props.type || 'button'} onClick={props.onClick} >
      {props.children}
    </button>
  </div>
  )
}

export default Button