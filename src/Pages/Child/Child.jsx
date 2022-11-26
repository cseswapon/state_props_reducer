import React from 'react';

const Child = ({counter,setCounter}) => {
   
    const boxDesign = {
        padding: 10,
        border: '1px solid red',
        borderRadius: 4,
        margin: 10,
    }
    return (
      <div style={boxDesign}>
        <p>Children</p>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button
          style={{ marginLeft: 5 }}
          onClick={() => setCounter((privies) => privies - 1)}
        >
          Decrement
        </button>
      </div>
    );
};

export default Child;