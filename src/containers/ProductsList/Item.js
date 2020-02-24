import React from 'react';
import ProductImage from '../Common/ProductImage';
import CountContainer from '../Common/CountContainer';
import ControllButtons from './ControllButtons';
import ProductAmount from './ProductAmount';

const Item = (args) => (
  <div className="products-item" key={args.index}>
    <ProductImage product={args.product} />
    <div className="products-item-details">
      <div className="products-item-name">{args.product.name}</div>
      <CountContainer
        product={args.product}
        index={args.index}
        updateProduct={args.updateProduct}
      />
      <ProductAmount product={args.product} />
    </div>
    <ControllButtons
      index={args.index}
      product={args.product}
      deleteProduct={args.deleteProduct}
      showProductDetails={args.showProductDetails}
      hideProductDetails={args.hideProductDetails}
    />
  </div>
)

export default Item