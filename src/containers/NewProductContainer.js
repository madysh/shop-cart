import React from 'react';
import newProductModel from '../models/newProductModel'

class NewProductContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      productModel: new newProductModel(),
      submitButtonIsActive: false
    };
  }

  onChange(e){
    var target = e.target;
    this.state.productModel.setValues(target.name, target.value)
    this.setState({submitButtonIsActive: this.state.productModel.isValid()})
  }

  render(){
    return (
      <div className="new-product col-6">
        <div className='container-title'>Add product to your cart list</div>
        <form className="new-product-form">
          <input
            type="text"
            id="new-product-name"
            name="name"
            onChange={this.onChange.bind(this)}
            className="form-control"
            placeholder="Product name"
          />
          <input
            type="number"
            min="1"
            id="new-product-price"
            name='price'
            onChange={this.onChange.bind(this)}
            className="form-control"
            placeholder="Product price"
          />
          <button
            type="submit"
            id="new-product-submit"
            className={"btn " + (this.state.submitButtonIsActive ? '' : 'disabled')}
            disabled={!this.state.submitButtonIsActive}
          >
            Add to list
          </button>
        </form>
      </div>
    );
  }
}

export default NewProductContainer;