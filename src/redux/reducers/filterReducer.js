import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionTypes/actionTypes";

const initialState = {
  filter: {
    brand: [],
    stock: true,
  },
  keyword: "",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BRAND:
      if (!state.filter.brand.includes(action.payload)) {
        return {
          ...state,
          filter: {
            ...state.filter,
            brand: [...state.filter.brand, action.payload],
          },
        };
      } else {
        return {
          ...state,
          filter: {
            ...state.filter,
            brand: state.filter.brand.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
      }
    case TOGGLE_STOCK:
      return {
        ...state,
        filter: {
          ...state.filter,
          stock:!state.filter.stock
        }
      };
    default:
      return state;
  }
};
export default filterReducer;
