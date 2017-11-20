import React from 'react';

class CountContainer extends React.Component{
  onClickCountButton = (action, product, productIndex, e) => {
    var value = product.count;
    var attr = 'count';

    if (action === 'minus') {
      if (value < 2){
        return;
      }
      value--;
    } else {
      value++;
    };

    if (productIndex!== undefined){
      this.props.updateProduct(productIndex, attr, value);
    } else {
      this.props.updateProduct(attr, value);
    };
  };

  render(){
    var product = this.props.product;

    return (
      <div className="product-count-container">
        <button
          className="btn product-count-btn product-count-btn-minus"
          onClick={(e) => {this.onClickCountButton('minus', product, this.props.index, e);}}
        >
          -
        </button>
        <div className="product-count">{product.count}</div>
        <button
          className="btn product-count-btn product-count-btn-plus"
          onClick={(e) => {this.onClickCountButton('plus', product, this.props.index, e);}}
        >
          +
        </button>
      </div>
    );
  }
}

export default CountContainer;