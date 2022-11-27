import { actionType } from "./actionType";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  number: 0,
  feedback: "",
  term: false,
};
export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case actionType.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionType.INCREMENT:
      return {
        ...state,
        number: state.number + action.payload.number,
      };
    case actionType.DECREMENT:
      return {
        ...state,
        number: state.number - action.payload.number,
      };
    default:
      return state;
  }
};
