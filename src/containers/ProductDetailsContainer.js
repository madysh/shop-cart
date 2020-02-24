import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import productPropType from './Common/productPropType';
import { hideProductDetails } from '../actions/productDetails'
import BackButton from './ProductDetails/BackButton';
import ProductImage from './Common/ProductImage';
import '../css/ProductDetailsContainer.css';

const ProductDetailsContainer = (args) => (
  <div className={
    "product-details-container component-container col-6"+
    (args.isVisible ? '' : ' hidden')
  }>
    <div className="product-name container-title">{args.product.name}</div>
    <ProductImage product={args.product} />
    <div className="product-attribute">
      Count:
      <span className="product-attribute-value">{args.product.count}</span>
    </div>
    <div className="product-attribute">
      Price:
      <span className="product-attribute-value">{args.product.price}</span>
      $
    </div>
    <div className="product-attribute">
      Total:
      <span className="product-attribute-value">{args.product.amount()}</span>
      $
    </div>
    <BackButton hideProductDetails={args.hideProductDetails} />
  </div>
);

ProductDetailsContainer.propTypes = {
  product: PropTypes.shape(productPropType).isRequired,
  hideProductDetails: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  product: state.productDetails.product,
  isVisible: state.productDetails.isVisible
});

export default connect(
  mapStateToProps,
  { hideProductDetails }
)(ProductDetailsContainer)