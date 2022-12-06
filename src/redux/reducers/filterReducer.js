import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
  filter: {
    brand: [],
    stock: "",
  },
  keyword: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRAND:
      return {
        ...state,
        filter: {
          ...state.filter,
          brand: [...state.filter.brand, action.payload],
        },
      };
    case TOGGLE_STOCK:
      return {};
    default:
      return state;
  }
};
export default filterReducer;
