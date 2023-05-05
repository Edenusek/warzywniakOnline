import { ADD_ITEM, REMOVE_ITEM } from "./Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    // kiedy ADD_ITEM dodaje obecny stan + action
    case ADD_ITEM: {
      // const updatedTotalAmound = state.totalAmount + action.item.price * action.item.amount
      return {
        ...state,
        items: [...state.items, action.payload],
        // totalAmount: updatedTotalAmound
      };
    }

    // usuwa boxa filtruje tablice i zostawia wszystko co się rózni od (klikniętego) box.id
    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
