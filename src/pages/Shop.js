import React from 'react'
import ChoiceBox from '../components/ChoiceBox'
import Instruction from '../components/Instruction'

import classes from './Shop.module.css'

const ShopPage = () => {
  return (
    <div >
      <Instruction/>
      <ChoiceBox/>
    </div>
  )
}

export default ShopPage