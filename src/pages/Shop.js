import React, { Fragment } from 'react'
import ChoiceBox from '../components/ChoiceBox'
import Footer from '../components/Footer'
import Instruction from '../components/Instruction'
import { useLoaderData } from 'react-router-dom'
// import classes from './Shop.module.css'

const ShopPage = () => {
  const dataBoxes = useLoaderData()
  return (
    <Fragment>
    <div >
      <Instruction/>
      <ChoiceBox dataBoxes={dataBoxes} />
    <Footer/>
    </div>
    </Fragment>
  )
}

export default ShopPage