import React, { useEffect, useState } from "react";
import styles from "./AddingProduct.module.css";
import { connect } from "react-redux";
import { deleteProduct, updateSelectedProductPrice, updateTotalPrice } from "../../../redux/action/product";

import { MdCancel } from "react-icons/md";
const AddingProduct = ({ products, deleteProduct }) => {
  const [productCounts, setProductCounts] = useState({});
  let [totalPrice, setTotalPrice] = useState(1);

  useEffect(() => {
    const counts = {};
    products.map(m => {
      counts[m.id] = 1; // set initial count to 1 for each product
    });
    setProductCounts(counts);
  }, [products]);

  const handleIncrement = (id, price) => {
    setProductCounts(prevCounts => {
      const newCounts = { ...prevCounts };
      newCounts[id]++;
      setTotalPrice(newCounts[id] * price);
      updateTotalPrice(newCounts[id] * price);
      updateSelectedProductPrice(id, newCounts[id] * price); // update the price of the selected product
      return newCounts;
    });
  };

  const handleDecrement = (id, price) => {
    if (productCounts[id] > 1) {
      setProductCounts(prevCounts => {
        const newCounts = { ...prevCounts };
        newCounts[id]--;
        setTotalPrice(newCounts[id] * price);
        updateTotalPrice(newCounts[id] * price);
        updateSelectedProductPrice(id, newCounts[id] * price); // update the price of the selected product
        return newCounts;
      });
    }
  };

  
  return (
    <>
      <section className={styles.Main_section}>
        <div className={styles.selected_items}>selected items are here</div>
        <div>
          {products.map(product => {
            const { id, name, price } = product;
            const count = productCounts[id] || 1;
            return (
               (
                <React.Fragment key={id}>
                  <div className={styles.product_container}>
                    <span
                      className={styles.cancelButton}
                      onClick={() => deleteProduct(id)}
                    >
                      <MdCancel />
                    </span>
                    <p>{name}</p>
                    <p>{price + " INR"}</p>
                    <p className={styles.incDecBtns}>
                      <button onClick={() => handleDecrement(id, price)}>
                        -
                      </button>
                      <h4>{count}</h4>
                      <button onClick={() => handleIncrement(id, price)}>
                        +
                      </button>
                    </p>
                    <p>{price * count} INR</p>
                  </div>
                </React.Fragment>
              )
            );
          })}
        </div>
      </section>
    </>
  );
};

const mapStateToProps = state => {
  return { products: state.products, totalPrice: state.totalPrice };
};

const mapDispatchToProps = dispatch => ({
  deleteProduct: id => {
    dispatch(deleteProduct(id));
  },
  updateTotalPrice: price => {
    dispatch(updateTotalPrice(price));
  },
  updateSelectedProductPrice: (id, price) => {
    dispatch(updateSelectedProductPrice(id, price));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(AddingProduct);
