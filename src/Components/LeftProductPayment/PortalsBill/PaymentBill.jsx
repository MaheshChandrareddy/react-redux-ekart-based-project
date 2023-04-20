import React, { useEffect, useState } from "react";
import styles from "./PaymentBill.module.css";
import AddingProduct from "../AddingProduct/AddingProduct";
import { connect } from "react-redux";
const PaymentBill = ({ products }) => {
  console.log(products);
  let [price, setPrice] = useState([]);
  let [bill, setBill] = useState(true);
  let handleSubmit = () => {
    window.location.assign("");
    setBill(false);
  };
  useEffect(() => {
    setPrice(products.map(m => Number(m.price)));
    console.log(price);
  }, [products]);

  return (
    <>
      {bill && (
        <>
          <main className={styles.backGroundImage}></main>
          <section className={styles.bill_section}>
            <header>Receipt</header>
            <article className={styles.totalNoOfProducts}>
              <AddingProduct />
            </article>
            <article>
              <table>
                <tr>
                  <th>SubTotal</th>
                  <td>
                    {price.reduce((m, n) => {
                      return m + n;
                    }, 0) + " EUR"}
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
                    }, 0) + " EUR"}
                  </td>
                </tr>
              </table>
            </article>
            <article className={styles.bill_button}>
              <button onClick={handleSubmit}>close</button>
            </article>
          </section>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return { products: state.products };
};

const mapDispatchToProps = dispatch=>({});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentBill);
