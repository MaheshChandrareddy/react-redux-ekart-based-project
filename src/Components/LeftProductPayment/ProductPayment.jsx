import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import TopDisplayBar from "./TopLeftNavBar/TopDisplayBar";
import AddingProduct from "./AddingProduct/AddingProduct";
import ProductCalculation from "./ProductBill/ProductCalculation";

store.subscribe(()=>store.getState())
const ProductPayment = () => {
  let [state,setState]=useState(false)
  return (
    <>
      <TopDisplayBar />
      <Provider store={store}>
        <AddingProduct />
      </Provider>
      <Provider store={store}>
        <ProductCalculation />
      </Provider>
    </>
  );
};

export default ProductPayment;
