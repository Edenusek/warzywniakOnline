import React, { Fragment } from 'react'
import ChoiceBox from '../components/ChoiceBox'
import Footer from '../components/Footer'
import Instruction from '../components/Instruction'

import classes from './Shop.module.css'

const ShopPage = () => {
  return (
    <Fragment>
    <div >
      <Instruction/>
      <ChoiceBox/>
    <Footer/>
    </div>
    </Fragment>
  )
}

export default ShopPage