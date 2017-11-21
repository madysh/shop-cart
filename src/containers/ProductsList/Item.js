import React from 'react';
import ProductImage from '../Common/ProductImage';
import CountContainer from '../Common/CountContainer';
import ControllButtons from './ControllButtons';
import ProductAmount from './ProductAmount';

const Item  = ({ product, index, updateProduct, deleteProduct, showProductDetails, hideProductDetails }) => (
  <div className="products-item" key={index}>
    <ProductImage product={product} />
    <div className="products-item-details">
      <div className="products-item-name">{product.name}</div>
      <CountContainer
        product={product}
        index={index}
        updateProduct={updateProduct}
      />
      <ProductAmount product={product} />
    </div>
    <ControllButtons
      index={index}
      deleteProduct={deleteProduct}
      showProductDetails={showProductDetails}
      hideProductDetails={hideProductDetails}
    />
  </div>
)
export default Item