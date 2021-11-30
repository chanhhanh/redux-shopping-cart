import * as actionTypes from "./shopping-types";

export const addCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURR_ITEM,
    payload: item,
  };
};
