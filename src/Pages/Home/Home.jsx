import React from "react";
import ProductCard from "../../componetnt/ProductCard";
import { useProductProvider } from "../../hooks/useProductProvider";

export default function Home() {
  const { state } = useProductProvider();
  console.log(state.products);
  let content;
  if (state?.loading) {
    content = <p>Loading</p>;
  }
  if (state?.error) {
    content = <p>Error</p>;
  }
  if (!state?.loading && !state?.error && state?.products.length === 0) {
    content = <p>Null</p>;
  }
  if (!state?.loading && !state?.error && state?.products.length) {
    content = state?.products.map((product, i) => (
      console.log(i)
      // <ProductCard key={i} product={product} />
    ));
  }
  return (
    <>
      <div className="max-w-7xl px-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
        {content}
      </div>
    </>
  );
}
