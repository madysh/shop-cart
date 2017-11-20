import React from 'react';
import '../css/ProductsListContainer.css';

class ProductsListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products
    }
  }

  onClickCountButton = (action, product, productIndex, e) => {
    e.preventDefault();
    var value = product.count;

    if (action === 'minus') {
      if (value < 2){
        return;
      }
      value--;
    } else {
      value++;
    }

    this.setState((prevState, props) => {
      var products = prevState.products
      products[productIndex].count = value
      return {products: products};
    });
  }

  totalAmount(){
    var totalAmount = this.state.products.reduce((s, p) => s + p.amount(), 0)
    return totalAmount;
  }

  render(){
    return (
      <div className={"products-list component-container col-6"+(this.props.showComponent ? '' : ' hidden')}>
        <div className='container-title'>Product list</div>
        <div className="products-container">
          {this.state.products.map((product,index) =>
            <div className="products-item" key={index}>
              <div className="products-item-image">
                <img
                  src={product.imageSrc()}
                  draggable="false"
                  alt={product.name}
                />
              </div>
              <div className="products-item-details">
                <div className="products-item-name">{product.name}</div>
                <div className="products-item-count-container">
                  <button
                    className="btn product-count-btn product-count-btn-minus"
                    onClick={(e) => {this.onClickCountButton('minus', product, index, e);}}
                  >
                    -
                  </button>
                  <div className="product-count">{product.count}</div>
                  <button
                    className="btn product-count-btn product-count-btn-plus"
                    onClick={(e) => {this.onClickCountButton('plus', product, index, e);}}
                  >
                    +
                  </button>
                </div>
                <div className="products-item-amount-container">
                  Total:
                  <span className="products-item-amount">
                    {product.amount()}
                  </span>
                  $
                </div>
              </div>
              <div className="product-item-controll-buttons">
                <div className="product-item-controll-btn-container">
                  <img
                    className="product-item-delete"
                    src={require("../images/icon-delete.png")}
                    draggable="false"
                    alt="Delete product"
                    onClick={() => {this.props.deleteProduct(index);}}
                  />
                </div>
                <div className="product-item-controll-btn-container">
                  <img
                    className="product-item-details"
                    src={require("../images/icon-details.png")}
                    draggable="false"
                    alt="Show details"
                    onClick={() => {this.props.showProductDetails(index);}}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='total-amount-container'>
          Total:
          <span className='total-amount'>{this.totalAmount()}</span>
          $
        </div>
      </div>
    )
  }
}

export default ProductsListContainer