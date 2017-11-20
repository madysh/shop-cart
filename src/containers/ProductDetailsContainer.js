import React from 'react';
import BackButton from './ProductDetails/BackButton';
import ProductImage from './Common/ProductImage';
import '../css/ProductDetailsContainer.css';

class ProductDetailsContainer extends React.Component{
  render(){
    var product = this.props.product;

    return (
      <div className={"product-details-container component-container col-6"+(this.props.showComponent ? '' : ' hidden')}>
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
        <BackButton showProductsList={this.props.showProductsList} />
      </div>
    );
  };
}

export default ProductDetailsContainer