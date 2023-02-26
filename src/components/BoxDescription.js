import React from 'react'

const BoxDescription = (props) => {
  return (
    <div>
        <span>{props.inside}</span>
        <h3>{props.boxName}</h3>
        <p>{props.price} zł</p>
    </div>
  )
}

export default BoxDescription