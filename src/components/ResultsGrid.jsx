import React from "react";
import ProductCard from "./ProductCard";

const ResultsGrid = ({ products }) => {
  return (
    <div className="grid">
      {products.length > 0 ? (
        products.map((p, i) => <ProductCard key={i} product={p} />)
      ) : (
        <p>No results found. Try another search.</p>
      )}
    </div>
  );
};

export default ResultsGrid;
