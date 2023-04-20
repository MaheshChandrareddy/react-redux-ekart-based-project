import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SingleProduct from "./Single-product/SingleProduct";

const ProductDashboard = () => {
  return (
    <>
      <section>
        <article>
          <Provider store={store}>
            <SingleProduct />
          </Provider>
        </article>
      </section>
    </>
  );
};

export default ProductDashboard;
