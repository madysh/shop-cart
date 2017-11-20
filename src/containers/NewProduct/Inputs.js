import React from 'react';

class Inputs extends React.Component{
  onChange(inputName){
    var value = '';
    switch(inputName) {
    case 'name':
      value = this.productNameInput.value;
      break;
    case 'price':
      value = this.productPriceInput.value;
      break;
    default:
      return;
    };

    this.props.updateProduct(inputName, value);
  }

  render(){
    var product = this.props.product;

    return (
      <div className="new-product-imputs">
        <input
          type="text"
          name="name"
          onChange={() => {this.onChange('name');}}
          className="new-product-name form-control"
          placeholder="Product name"
          value={product.name}
          ref={(input) => { this.productNameInput = input; }}
        />
        <input
          type="number"
          min="1"
          name='price'
          onChange={() => {this.onChange('price');}}
          className="new-product-price form-control"
          placeholder="Product price"
          value={product.price}
          ref={(input) => { this.productPriceInput = input; }}
        />
      </div>
    );
  }
}

export default Inputs;