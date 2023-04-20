import React from "react";
import styles from "./PointOfSale.module.css";
import ProductPayment from "../LeftProductPayment/ProductPayment";
import ProductDashboard from "../RightProductDashboard/ProductDashboard";

const PointOfSale = () => {
  return (
    <>
      <section className={styles.MainContainer}>
        <div className={styles.LeftData}>
          <ProductPayment />
        </div>
        <div className={styles.RightData}>
          <ProductDashboard />
        </div>
      </section>
    </>
  );
};

export default PointOfSale;
