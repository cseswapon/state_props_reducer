import React from "react";
import Child from "../Child/Child";

const Parent = () => {
    const boxDesign = {
      padding: 10,
      border: "1px solid red",
      borderRadius: 4,
        margin: 10,
      width:'18%'
    };
  return (
    <>
      <div style={boxDesign}>
              <p>Parent</p>
              <h1>1</h1>
      </div>
          <Child />
    </>
  );
};

export default Parent;
