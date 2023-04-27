import React, { useReducer, useContext } from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import { ADD_ITEM, REMOVE_ITEM } from './Types'

const CartState = (props) => {

  const initialState = {
    boxes: []
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addBox = box => {
    dispatch({type: ADD_ITEM, payload: box})
  }

  const removeBox = id => {
    dispatch({type: REMOVE_ITEM, payload: id})
  }

  return (
    <CartContext.Provider value={{
      boxes: state.boxes,
      addBox,
      removeBox
    }}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartState