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
        <div className={`${classes.instBox} ${classes.box}`}>
      <div className={classes.imgBox }>
      {boxesStacked}
        </div>  
            <h1>Wybierz Boxa</h1>
            <span>
              Sprawdź która skrzynka odpowiada najbardziej Twoim potrzebom. W
              każdej znajdziesz świeże warzywa i owoce.
            </span>
          </div>
          <div className={`${classes.instBox} ${classes.box2}`}>
          <div className={classes.imgBox}>
      {bagShopping}
        </div> 
            <h1>Zamów</h1>
            <span>
              Wybierz datę dostawy, uzupełnij niezbędne dane i opłać zamówienie.
              Dostarczamy jedynie pod wybrane miasta.
            </span>
          </div>
          <div className={`${classes.instBox} ${classes.box3}`}>
          <div className={classes.imgBox}>
      {giftBox}
        </div> 
            <h1>Ciesz się</h1>
            <span>
              Zaskocz się otwierając drzwi z rana, a box już będzie na Ciebie
              czekał. Życzymy smacznego!
            </span>
          </div>
    </div>
  )
}

export default Instruction