import React from 'react'
import classes from './Instruction.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'


const bagShopping = <FontAwesomeIcon className={classes.img} icon={faBagShopping} />
const boxesStacked = <FontAwesomeIcon className={classes.img} icon={faBoxesStacked}/>
const giftBox = <FontAwesomeIcon className={classes.img} icon={faGift}/>

const Instruction = () => {
  return (
    <div className={classes.inst}>
        <div className={classes.instBox}>
      <div className={`${classes.imgBox} ${classes.box1}`}>
      {boxesStacked}
        </div>  
            <p>Wybierz Boxa</p>
            <span>
              Sprawdź która skrzynka odpowiada najbardziej Twoim potrzebom. W
              każdej znajdziesz świeże warzywa i owoce.
            </span>
          </div>
          <div className={classes.instBox}>
          <div className={classes.imgBox}>
      {bagShopping}
        </div> 
            <p>Zamów</p>
            <span>
              Wybierz datę dostawy, uzupełnij niezbędne dane i opłać zamówienie.
              Dostarczamy jedynie pod wybrane miasta.
            </span>
          </div>
          <div className={classes.instBox}>
          <div className={classes.imgBox}>
      {giftBox}
        </div> 
            <p>Ciesz się</p>
            <span>
              Zaskocz się otwierając drzwi z rana, a box już będzie na Ciebie
              czekał. Życzymy smacznego!
            </span>
          </div>
    </div>
  )
}

export default Instruction