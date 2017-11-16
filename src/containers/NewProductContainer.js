import React from 'react';
import productModel from '../models/productModel'

class NewProductContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      productModel: new productModel(),
      submitButtonIsActive: false,
      showImagesList: false
    };
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
    var wasPressedMinusButton = target.classList.contains("new-product-countButton-minus");

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

  onClickNewProductImage(e){
    this.setState({showImagesList:!this.state.showImagesList});
  }

  onClickImagesListItem(e){
    var imageName = e.target.getAttribute('data-name');
    console.log(e.target);
    this.state.productModel.setValue('imageName', imageName);
    this.setState({showImagesList:!this.state.showImagesList});
  }

  render(){
    const availableImageNames = this.state.productModel.availableImageNames();
    var productModel = this.state.productModel;

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
            <img
              src={productModel.imageSrc()}
              className="new-product-image"
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
          >
            Add to list
          </button>
        </form>
      </div>
    );
  }
}

export default NewProductContainer;