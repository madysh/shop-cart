import React from 'react';

const ImageContainer  = ({ product, imagesListIsVisible, updateProduct, toggleImagesList, hideImagesList }) => {
  var onClickImagesListItem = (imageName) => {
    updateProduct('imageName', imageName);
    hideImagesList();
  }
  const availableImageNames = product.availableImageNames();

  return (
    <div className="new-product-image-container">
      <img
        src={product.imageSrc()}
        className="new-product-image"
        onClick={toggleImagesList}
        alt="New Product"
        draggable="false"
      />
      <div
        className={"new-product-images-list " + (imagesListIsVisible ? '' : "hidden")}>
        {availableImageNames.map(name =>
          <div
            className="new-product-image-item-container"
            key={name}
            onClick={() => {onClickImagesListItem(name);}}
          >
            <img
              alt={name}
              data-name={name}
              className="new-product-image-item"
              src={product.imageSrc(name)}
              draggable="false"
            />
          </div>
        )};
      </div>
    </div>
  );
}

export default ImageContainer;