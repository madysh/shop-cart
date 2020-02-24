import React from 'react';

const ProductAmount  = ({ product }) => (
  <div className="products-item-amount-container">
    Total:
    <span className="products-item-amount">
      {product.amount()}
    </span>
    $
  </div>
);

export default ProductAmount