import React, { useState } from 'react';

const Child = () => {
    const [counter,setCounter] = useState(0)
    return (
        <div>
            <h1>Children</h1>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter + 1)}>Increment</button>
            <button onClick={()=>setCounter((privies)=>privies-1)}>Decrement</button>
        </div>
    );
};

export default Child;