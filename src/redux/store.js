import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/product-reducer";

const rootReducer = {
  products: productReducer,
  totalPrice: 0,
};

const store = configureStore({
    reducer:rootReducer
})

export default store