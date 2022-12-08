import { deleteProduct } from "../../actions/productAction";

const deleteProductData = (id) => {
  // console.log(id);
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      dispatch(deleteProduct(id));
    }
  };
};

export default deleteProductData;
