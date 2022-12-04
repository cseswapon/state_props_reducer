import React from "react";
import ProductCard from "../../componetnt/ProductCard";
import { useProductProvider } from "../../hooks/useProductProvider";

export default function Cart() {
  const {
    state: { cart },
  } = useProductProvider();
  console.log(cart);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {cart.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}
