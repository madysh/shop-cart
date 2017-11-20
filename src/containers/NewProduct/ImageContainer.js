import React from 'react';

class ImageContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {showImagesList: false};
  }

  onClickNewProductImage = () => {
    this.setState({showImagesList:!this.state.showImagesList});
  }

  onClickImagesListItem = (imageName) => {
    this.props.updateProduct('imageName', imageName);
    this.setState({showImagesList:!this.state.showImagesList});
  }

  render(){
    var product = this.props.product;
    const availableImageNames = product.availableImageNames();

    return (
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
    );
  }
}

export default ImageContainer;