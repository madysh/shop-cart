import React from 'react';

class CountContainer extends React.Component{
  onClickCountButton = (action, e) => {
    var value = this.props.product.count;
    if (action === 'minus') {
      if (value < 2){
        return;
      }
      value--;
    } else {
      value++;
    }

    this.props.updateProduct('count', value);
  }

  render(){
    var product = this.props.product;

    return (
      <div className="new-product-count-container">
        <button
          className="btn new-product-count-btn new-product-count-btn-minus"
          onClick={(e) => {this.onClickCountButton('minus', e);}}
        >
          -
        </button>
        <div className="new-product-count">{product.count}</div>
        <button
          className="btn new-product-count-btn new-product-count-btn-plus"
          onClick={(e) => {this.onClickCountButton('plus', e);}}
        >
          +
        </button>
      </div>
    );
  }
}

export default CountContainer;