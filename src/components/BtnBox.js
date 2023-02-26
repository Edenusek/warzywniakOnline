import React from 'react'
import { Link } from 'react-router-dom'
import classes from './BtnBox.module.css'
const BtnBox = (props) => {
  return (
    <div className={classes.btnBox}>
    <Link to={props.path} className={classes.btn}>
      {props.btn}
    </Link>
  </div>
  )
}

export default BtnBox