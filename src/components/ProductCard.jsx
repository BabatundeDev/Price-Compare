import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">💰 {product.price}</p>
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        <button>View</button>
      </a>
    </div>
  );
};

export default ProductCard;
