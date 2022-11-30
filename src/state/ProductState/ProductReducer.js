import { productActionType } from "./ProductActionType";

export const initializeState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case productActionType.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case productActionType.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case productActionType.PRODUCT_CART:
      return console.log(action);
      /* return {
        ...state,
        cart: [...state.cart, action.payload],
      }; */
    default:
      return state;
  }
};
