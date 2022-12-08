import {
  ADD_PRODUCT,
  ADD_TO_CART,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  LOAD_PRODUCT,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
} from "../actionTypes/actionTypes";

export const deleteProduct = (id) => {
  // console.log("Product Action",id);
  return {
    type: DELETE_PRODUCT,
    payload:id,
  }
}

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    payload: product,
  };
};

export const loadProduct = (data) => {
  // console.log(data);
  return {
    type: LOAD_PRODUCT,
    payload: data,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
