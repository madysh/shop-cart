import React from 'react';

class ProductAmount extends React.Component{
  render(){
    var product = this.props.product;

    return (
      <div className="products-item-amount-container">
        Total:
        <span className="products-item-amount">
          {product.amount()}
        </span>
        $
      </div>
    );
  };
}

export default ProductAmount