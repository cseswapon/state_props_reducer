import { createProduct } from "../../actions/productAction";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.JSON();
    if (data.acknowledged) {
      dispatch(
        createProduct({
          _id: data.insertedId,
          ...product,
        })
      );
    }
  };
};

export default addProductData;
