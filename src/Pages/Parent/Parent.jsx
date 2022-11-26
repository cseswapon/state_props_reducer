import React, { useContext } from "react";
import { CREATE_CONTEXT } from "../../App";
import Child from "../Child/Child";

const Parent = () => {
    const boxDesign = {
      padding: 10,
      border: "1px solid red",
      borderRadius: 4,
        margin: 10,
      width:'18%'
    };
    const {counter} = useContext(CREATE_CONTEXT)
  return (
    <>
      <div style={boxDesign}>
              <p>Parent</p>
              <h1>{counter}</h1>
      </div>
          <Child />
    </>
  );
};

export default Parent;
