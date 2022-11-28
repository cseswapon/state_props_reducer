import React, { createContext, useEffect, useState } from 'react';
export const CREATECONTEXTS = createContext();
const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    const allData = {data}
    return (
      <CREATECONTEXTS.Provider value={allData}>
        {children}
      </CREATECONTEXTS.Provider>
    );
};

export default ProductProvider;