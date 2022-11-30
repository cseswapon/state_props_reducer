import React from "react";
import ProductCard from "../../componetnt/ProductCard";
import { useProductProvider } from "../../hooks/useProductProvider";

export default function TopRate() {
  const { state } = useProductProvider();
  // return console.log(state.products);
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
    content = products
      .filter((product) => product.rating >= 4)
      .map((product, i) => <ProductCard key={i} product={product} />);
  }
  return (
    <div className="max-w-7xl px-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
      {content}
    </div>
  );
}
