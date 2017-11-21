import React from 'react';

const ProductImage  = ({ product }) => (
  <div className="product-image-container">
    <img
      src={product.imageSrc()}
      className="product-image"
      alt={product.name}
      draggable="false"
    />
  </div>
)

export default ProductImage