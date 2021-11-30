import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addCart } from "../../redux/shopping/shopping-actions";

const SingleItem = ({ current, addCart }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <p className={styles.details__price}>$ {current.price}</p>

        <button
          onClick={() => addCart(current.id)}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (id) => dispatch(addCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
