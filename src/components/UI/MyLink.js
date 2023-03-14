import React from 'react'
import { Link } from 'react-router-dom'

import classes from './Button.module.css'

const MyLink = (props) => {
  return (
    <div className={classes.btnBox}>
    <Link to={props.path}  className={classes.btn}>
      {props.name}
    </Link>
  </div>
  )
}

export default MyLink