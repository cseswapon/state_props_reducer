import React from "react";

const Child = () => {
  const boxDesign = {
    padding: 10,
    border: "1px solid red",
    borderRadius: 4,
    margin: 10,
    width: "18%",
    };
  return (
    <div style={boxDesign}>
      <p>Children</p>
      <h1>1</h1>
      <button>Increment</button>
      <button
        style={{ marginLeft: 5 }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Child;
