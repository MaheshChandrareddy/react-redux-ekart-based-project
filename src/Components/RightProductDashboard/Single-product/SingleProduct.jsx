import React, { useEffect, useState } from "react";
import Product from "../Product-JSON/Products.json"
import styles from "./SingleProduct.module.css";
import { addProduct } from "../../../redux/action/product";
import { v4 } from "uuid";
import { connect } from "react-redux";

const SingleProduct = ({ addProduct }) => {
  const [showData, setShowData] = useState(null);
  const [data, setData] = useState();
  const [sate, setState] = useState(false);

  const handleHover = index => {
    setShowData(index);
  };

  let handleClick = (name, price) => {
    setState(true)
    const newProduct = {
      name: name,
      price: price,
      id: v4(),
    };
  addProduct(newProduct);
    setData(newProduct);
  };

  const handleHoverOut = () => {
    setShowData(null);
  };

  return (
    <>
      <section className={styles.card_section}>
        <header>CLICK ON IMAGE TO BOOK</header>
        <article className={styles.card_sub_section}>
          {Product.map((product, index) => {
            const { name, price, category, description, image } = product;

            const isHovered = showData === index;

            return (
              <div
                key={index}
                onClick={() => handleClick(name, price)}
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleHoverOut}
                className={styles.card_body}
              >
                <img src={image} alt="" />
                {isHovered && (
                  <div className={styles.tooltip}>
                    <p>{name}</p>
                    <p>Price : {price + " INR"}</p>
                  </div>
                )}
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
