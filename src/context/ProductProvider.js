import React, { createContext, useEffect, useReducer, useState } from "react";
import { productActionType } from "../state/ProductState/ProductActionType";
import {
  initializeState,
  productReducer,
} from "../state/ProductState/ProductReducer";
export const PRODUCT_CONTEXT = createContext();
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initializeState);
  useEffect(() => {
    dispatch({ type: productActionType.FETCHING_START });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: productActionType.FETCHING_SUCCESS,
          payload: data,
        })
      )
      .catch(() => dispatch({ type: productActionType.FETCHING_ERROR }));
  }, []);
  const value = { state };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export default ProductProvider;
