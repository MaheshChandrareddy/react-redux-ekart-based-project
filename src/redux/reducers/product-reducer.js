import {ADD_PRODUCT, DELETE_PRODUCT, UPDATE_TOTAL_PRICE}  from "../action/action-types"

const initialState = []

export default (state = initialState, action) => {

    switch (action.type) {
      case ADD_PRODUCT:
        console.log(action.payload);
        return [...state, action.payload];
      case DELETE_PRODUCT:
        const newState = state.filter(product => product.id !== action.payload);
        return newState;
      case UPDATE_TOTAL_PRICE:
        return {
          ...state,
          totalPrice: action.payload,
        };

      default:
        return state;
    }
}
