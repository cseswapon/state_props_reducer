import React from "react";
import ProductCard from "../../componetnt/ProductCard";
import { useProductProvider } from "../../hooks/useProductProvider";

export default function Home() {
  const { state } = useProductProvider();
  // console.log(state.products);
  const { products, loading, error } = state;
  let content;
  if (loading) {
    content = <p>Loading</p>;
  }
  if (error) {
    content = <p>Error</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Null</p>;
  }
  if (!loading && !error && products.length) {
    content = products.map((product, i) => (
      <ProductCard key={i} product={product} />
    ));
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {content}
      </div>
    </>
  );
}
