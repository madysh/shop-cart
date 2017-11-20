import React from 'react';
import Product from '../models/Product'
import '../css/NewProductContainer.css';

class NewProductContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product: new Product(),
      submitButtonIsActive: false,
      showImagesList: false
    };
  }

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

    this.setState((prevState, props) => {
      var product = prevState.product;
      product[inputName] = value;
      return {
        product: product,
        submitButtonIsActive: product.isValid()
      };
    });
  }

  onClickCountButton = (action, e) => {
    e.preventDefault();
    var value = this.state.product.count;
    if (action === 'minus') {
      if (value < 2){
        return;
      }
      value--;
    } else {
      value++;
    }

    this.setState((prevState, props) => {
      var product = prevState.product
      product.count = value
      return {product: product};
    });
  }

  resetForm(){
    this.setState({
      product: new Product(),
      submitButtonIsActive: false,
      showImagesList: false
    });
  }

  onClickSubmitButton = (e) => {
    e.preventDefault();
    this.props.addNewProduct(this.state.product);
    this.resetForm();
  }

  onClickNewProductImage = () => {
    this.setState({showImagesList:!this.state.showImagesList});
  }

  onClickImagesListItem = (imageName) => {
    this.setState((prevState, props) => {
      var product = prevState.product
      product['imageName'] = imageName
      return {
        product: product,
        showImagesList: !prevState.showImagesList
      };
    });
  }

  render(){
    const availableImageNames = this.state.product.availableImageNames();
    var product = this.state.product;

    return (
      <div className="new-product-container component-container col-6">
        <div className='container-title'>Add product to your cart list</div>
        <div className="new-product-form">
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
          <div className="new-product-image-container">
            <img
              src={product.imageSrc()}
              className="new-product-image"
              onClick={this.onClickNewProductImage}
              alt="New Product"
              draggable="false"
            />
            <div
              className={"new-product-images-list " + (this.state.showImagesList ? '' : "hidden")}>
              {availableImageNames.map(name =>
                <div
                  className="new-product-image-item-container"
                  key={name}
                  onClick={() => {this.onClickImagesListItem(name);}}
                >
                  <img
                    alt={name}
                    data-name={name}
                    className="new-product-image-item"
                    src={product.imageSrc(name)}
                    draggable="false"
                  />
                </div>
              )}
            </div>
          </div>
          <button
            className={"new-product-submit-button btn " + (this.state.submitButtonIsActive ? '' : 'disabled')}
            disabled={!this.state.submitButtonIsActive}
            onClick={(e) => {this.onClickSubmitButton(e);}}
          >
            Add to list
          </button>
        </div>
      </div>
    );
  }
}

export default NewProductContainer;