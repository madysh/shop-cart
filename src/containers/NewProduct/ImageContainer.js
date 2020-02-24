import React from 'react';

const ImageContainer  = (args) => {
  var onClickImagesListItem = (imageName) => {
    args.updateProduct('imageName', imageName);
    args.hideImagesList();
  }
  const availableImageNames = args.product.availableImageNames();

  return (
    <div className="new-product-image-container">
      <img
        src={args.product.imageSrc()}
        className="new-product-image"
        onClick={args.toggleImagesList}
        alt="New Product"
        draggable="false"
      />
      <div
        className={"new-product-images-list " + (args.imagesListIsVisible ? '' : "hidden")}>
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
              src={args.product.imageSrc(name)}
              draggable="false"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageContainer;