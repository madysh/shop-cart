import React from 'react';

class ProductImage extends React.Component{
  render(){
    var product = this.props.product;

    return (
      <div className="product-image-container">
        <img
          src={product.imageSrc()}
          className="product-image"
          alt={product.name}
          draggable="false"
        />
      </div>
    );
  };
}

export default ProductImage