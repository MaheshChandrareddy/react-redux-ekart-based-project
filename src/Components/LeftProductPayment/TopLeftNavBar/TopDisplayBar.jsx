import React from "react";
import styles from "./TopDisplayBar.module.css";
const TopDisplayBar = () => {
  return (
    <>
      <section className={styles.display_list}>
        <article>
          <li>Products</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </article>
      </section>
    </>
  );
};

export default TopDisplayBar;
