import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_TOTAL_PRICE} from "./action-types";

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (id )=> ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const updateTotalPrice = totalPrice =>
({
  type: UPDATE_TOTAL_PRICE,
  payload: totalPrice,
});

// action creator for updating the price of the selected product in the next component
export const updateSelectedProductPrice = (id, price) => {
  return {
    type: "UPDATE_SELECTED_PRODUCT_PRICE",
    payload: { id, price },
  };
};
