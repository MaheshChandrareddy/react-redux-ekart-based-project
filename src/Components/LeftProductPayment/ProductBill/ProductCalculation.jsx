import React, { useEffect, useState } from "react";
import styles from "./ProductCalculation.module.css";

import { Provider, connect } from "react-redux";
import ReactDOM from "react-dom";
import PaymentBill from "../PortalsBill/PaymentBill";

const ProductCalculation = ({ products, totalPrice }) => {
  console.log(products)
  console.log(totalPrice);
  let [totalPriceFromAdd, setTotalPriceFromAdd] = useState(1);
  let [pay, setPay] = useState(false);

  let [price, setPrice] = useState([]);
  let handleCancel = () => {
    window.location.assign("");
  };

  let handleSubmit = () => {
    setPay(true);
  };
  useEffect(() => {
    setTotalPriceFromAdd(totalPrice);
    setPrice(products.map(m => Number(m.price)));
  }, [products]);

  return (
    <>
      <section className={styles.price_section}>
        <article>
          <table>
            <tr>
              <th>SubTotal</th>
              <td>
                {price.reduce((m, n) => {
                  return m + n;
                }, 0)+ " EUR"}
              </td>
              <td>{price.length + " items"}</td>
            </tr>
            <tr>
              <th>VAT tax</th>
              <td>10%</td>
              <td>
                {price.reduce((m, n) => {
                  return m + n;
                }, 0) *
                  (10 / 100) +
                  " EUR"}
              </td>
            </tr>
            <tr>
              <th>Discount</th>
              <td>10%</td>
              <td>
                {price.reduce((m, n) => {
                  return m + n;
                }, 0) *
                  (10 / 100) +
                  " EUR"}
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                {price.reduce((m, n) => {
                  return m + n;
                }, 0) +
                  " EUR"}
              </td>
            </tr>
          </table>
          <header className={styles.price_button}>
            <button className={styles.cancelButton} onClick={handleCancel}>
              Cancel sale
            </button>
            <button className={styles.saleButton} onClick={handleSubmit}>
              Process sale
            </button>
          </header>
          <section>
            {pay &&
              ReactDOM.createPortal(
                <PaymentBill />,
                document.getElementById("portals")
              )}
          </section>
        </article>
      </section>
    </>
  );
};

const mapStateToProps = state => {
  return { products: state.products, totalPrice: state.totalPrice };
};
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ProductCalculation);
