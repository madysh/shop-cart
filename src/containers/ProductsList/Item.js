import React from 'react';
import ProductImage from '../Common/ProductImage';
import CountContainer from '../Common/CountContainer';
import ControllButtons from './ControllButtons';
import ProductAmount from './ProductAmount';

class Item extends React.Component{
  totalAmount(){
    var totalAmount = this.state.products.reduce((s, p) => s + p.amount(), 0);
    return totalAmount;
  };

  render(){
    var product = this.props.product;
    var index = this.props.index;

    return (
      <div className="products-item" key={index}>
        <ProductImage product={product} />
        <div className="products-item-details">
          <div className="products-item-name">{product.name}</div>
          <CountContainer
            product={product}
            index={index}
            updateProduct={this.props.updateProduct}
          />
          <ProductAmount product={product} />
        </div>
        <ControllButtons
          index={index}
          deleteProduct={this.props.deleteProduct}
          showProductDetails={this.props.showProductDetails}
        />
      </div>
    );
  };
}

export default Item