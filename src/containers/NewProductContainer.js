import React from 'react';
import productModel from '../models/productModel'
import '../css/NewProductContainer.css';

const initialState = {
  productModel: new productModel(),
  submitButtonIsActive: false,
  showImagesList: false
};

class NewProductContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = initialState;
  }

  componentDidMount(){
    document.getElementById("new-product-count").innerHTML  = this.state.productModel.count;
  }

  onChange(e){
    var target = e.target;
    this.state.productModel.setValue(target.name, target.value);
    this.setState({submitButtonIsActive: this.state.productModel.isValid()});
  }

  onClickCountButton(e){
    e.preventDefault();
    var target = e.target;
    var value = this.state.productModel.count;
    var wasPressedMinusButton = target.classList.contains("new-product-countBtn-minus");

    if (wasPressedMinusButton) {
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

  resetForm(){
    // TODO: it doesn't work
    this.setState(initialState);
    document.getElementById('new-product-form').reset();
    document.getElementById('new-product-count').innerHTML = 1;
    document.getElementById('new-product-image').src = initialState.productModel.imageSrc();
  }

  onClickSubmitButton(e){
    e.preventDefault();
    this.props.addNewProduct(this.state.productModel);
    this.resetForm();
  }

  onClickNewProductImage(e){
    this.setState({showImagesList:!this.state.showImagesList});
  }

  onClickImagesListItem(e){
    var imageName = e.target.getAttribute('data-name');
    this.state.productModel.setValue('imageName', imageName);
    this.setState({showImagesList:!this.state.showImagesList});
  }

  render(){
    const availableImageNames = this.state.productModel.availableImageNames();
    var productModel = this.state.productModel;

    return (
      <div id="new-product-container" className="col-6">
        <div className='container-title'>Add product to your cart list</div>
        <form id="new-product-form">
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
              className="btn new-product-countBtn new-product-countBtn-minus"
              onClick={this.onClickCountButton.bind(this)}
            >
              -
            </button>
            <div id="new-product-count" />
            <button
              className="btn new-product-countBtn new-product-countBtn-plus"
              onClick={this.onClickCountButton.bind(this)}
            >
              +
            </button>
          </div>
          <div className="new-product-image-container">
            <img
              src={productModel.imageSrc()}
              id="new-product-image"
              onClick={this.onClickNewProductImage.bind(this)}
              alt="New Product"
              draggable="false"
            />
            <div id="new-product-images-list" className={this.state.showImagesList ? '' : "hidden"}>
              {availableImageNames.map(name =>
                <div
                  className="new-product-image-item-container"
                  key={name}
                  onClick={this.onClickImagesListItem.bind(this)}
                  data-name={name}
                >
                  <img
                    alt={name}
                    data-name={name}
                    className="new-product-image-item"
                    src={productModel.imageSrc(name)}
                    draggable="false"
                  />
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            id="new-product-submit-button"
            className={"btn " + (this.state.submitButtonIsActive ? '' : 'disabled')}
            disabled={!this.state.submitButtonIsActive}
            onClick={this.onClickSubmitButton.bind(this)}
          >
            Add to list
          </button>
        </form>
      </div>
    );
  }
}

export default NewProductContainer;