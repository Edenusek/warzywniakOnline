import { ADD_ITEM, REMOVE_ITEM } from "./Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    // kiedy ADD_ITEM dodaje obecny stan + action
    case ADD_ITEM: {
      return {
        ...state,
        boxes: [...state.boxes, action.payload],
      };
    }

    // usuwa boxa filtruje tablice i zostawia wszystko co się rózni od (klikniętego) box.id
    case REMOVE_ITEM: {
      return {
        ...state,
        boxes: state.boxes.filter(box => box.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
