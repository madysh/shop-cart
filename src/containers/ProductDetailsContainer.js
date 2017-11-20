import React from 'react';
import '../css/ProductDetailsContainer.css';

class ProductDetailsContainer extends React.Component{
  render(){
    var product = this.props.product;

    return (
      <div className={"product-details-container component-container col-6"+(this.props.showComponent ? '' : ' hidden')}>
        <div className="product-name container-title">{product.name}</div>
        <div className="product-image-container">
          <img
            src={product.imageSrc()}
            className="product-image"
            alt={product.name}
            draggable="false"
          />
        </div>
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
        <button
          className="back-to-list-btn"
          onClick={this.props.showProductsList}
        >
          Back to list
        </button>
      </div>
    )
  }
}

export default ProductDetailsContainer