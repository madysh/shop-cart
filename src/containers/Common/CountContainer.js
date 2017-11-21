import React from 'react';

const CountContainer  = ({ product, index, updateProduct}) => {
  var onClickCountButton = (action, product, index, e) => {
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

    if (index!== undefined){
      updateProduct(index, attr, value);
    } else {
      updateProduct(attr, value);
    };
  };

  return (
    <div className="product-count-container">
      <button
        className="btn product-count-btn product-count-btn-minus"
        onClick={(e) => {onClickCountButton('minus', product, index, e);}}
      >
        -
      </button>
      <div className="product-count">{product.count}</div>
      <button
        className="btn product-count-btn product-count-btn-plus"
        onClick={(e) => {onClickCountButton('plus', product, index, e);}}
      >
        +
      </button>
    </div>
  );
}

export default CountContainer;