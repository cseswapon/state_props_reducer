import React, { useState } from "react";
import Child from "../Child/Child";

const Parent = () => {
     const [counter, setCounter] = useState(0);
    const boxDesign = {
      padding: 10,
      border: "1px solid red",
      borderRadius: 4,
      margin: 10,
    };
  return (
    <>
      <div style={boxDesign}>
        <p>Parent</p>
      </div>
          <Child counter={counter} setCounter={setCounter} />
    </>
  );
};

export default Parent;
