import React, { useReducer, useContext } from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import { ADD_ITEM, REMOVE_ITEM } from './Types'

const CartState = (props) => {

  const initialState = {
    items: [],
    totalAmount: 0
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addBox = item => {
    dispatch({type: ADD_ITEM, payload: item})
  }

  const removeBox = id => {
    dispatch({type: REMOVE_ITEM, payload: id})
  }

 

  return (
    <CartContext.Provider value={{
      items: state.items,
      totalAmout: state.totalAmount,
      addBox,
      removeBox
    }}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartState