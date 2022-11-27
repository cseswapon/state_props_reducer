import React, { useReducer } from "react";

const Counter = () => {
  const boxDesign = {
    padding: 10,
    border: "1px solid red",
    borderRadius: 4,
    margin: 10,
    width: "18%",
  };
  const initialState = 0;
  const reducer = (state, action) => {
    console.log(action);
    if (action.type === "INCREMENT") {
      return (state + action.payload.count);
    } else if (action.type === "DECREMENT") {
      return state - action.payload.count;
    } else {
      console.log("Something went wrong");
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={boxDesign}>
      <p>Children</p>
      <h1>{state}</h1>
      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}
        style={{ marginLeft: 5 }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
