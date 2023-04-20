import React from "react";
import { Provider } from "react-redux";
import PaymentBill from "./PaymentBill";

const ProviderForPayment = () => {
    return <div>
        <Provider store={store}>
            <PaymentBill/>
      </Provider>
  </div>;
};

export default ProviderForPayment;
