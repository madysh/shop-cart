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

  componentDidMount(){
    document.getElementById("new-product-count").innerHTML  = this.state.productModel.count;
  }

  onChange(e){
    var target = e.target;
    this.state.productModel.setValue(target.name, target.value)
    this.setState({submitButtonIsActive: this.state.productModel.isValid()})
  }

  onClickCountButton(e){
    e.preventDefault();
    var target = e.target;
    var value = this.state.productModel.count;

    if (target.classList.contains("new-product-countButton-minus")) {
      if (value < 2){
        return;
      }
      value--;
    } else {
      value++;
    }

    this.state.productModel.setValue('count', value);
    document.getElementById("new-product-count").innerHTML = value;
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

          <div className="new-product-count-container">
            <button
              className="btn new-product-countButton new-product-countButton-minus"
              onClick={this.onClickCountButton.bind(this)}
            >
              -
            </button>
            <div
              id="new-product-count"
            />
            <button
              className="btn new-product-countButton new-product-countButton-plus"
              onClick={this.onClickCountButton.bind(this)}
              >
                +
              </button>
          </div>
          <div className="new-product-image-container">
            <img src={this.state.productModel.imageSrc()} className="new-product-image" />
          </div>

          <button
            type="submit"
            id="new-product-submit-button"
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