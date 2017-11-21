import React from 'react';
import { connect } from 'react-redux'
import { hideProductDetails } from '../actions'
import BackButton from './ProductDetails/BackButton';
import ProductImage from './Common/ProductImage';
import '../css/ProductDetailsContainer.css';

const ProductDetailsContainer = ({ product, isVisible, hideProductDetails }) => (
  <div className={"product-details-container component-container col-6"+(isVisible ? '' : ' hidden')}>
    <div className="product-name container-title">{product.name}</div>
    <ProductImage product={product} />
    <div className="product-attribute">
      Count:
      <span className="product-attribute-value">{product.count}</span>
    </div>
    <div className="product-attribute">
      Price:
      <span className="product-attribute-value">{product.price}</span>
      $
    </div>
    <div className="product-attribute">
      Total:
      <span className="product-attribute-value">{product.amount()}</span>
      $
    </div>
    <BackButton hideProductDetails={hideProductDetails} />
  </div>
);

const mapStateToProps = (state) => ({
  product: state.productDetails.product,
  isVisible: state.productDetails.isVisible
});

export default connect(
  mapStateToProps,
  { hideProductDetails }
)(ProductDetailsContainer)