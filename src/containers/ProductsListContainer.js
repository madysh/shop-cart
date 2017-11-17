import React from 'react';
import '../css/ProductsListContainer.css';

class ProductsListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products
    }
  }

  onClickCountButton(product, productIndex, e){
    e.preventDefault();
    var target = e.target;
    var value = product.count;
    var wasPressedMinusButton = target.classList.contains("product-countBtn-minus");

    // TODO: DRY
    if (wasPressedMinusButton) {
      if (value < 2){
        return;
      }
      value--;
    } else {
      value++;
    }

    product.setValue('count', value);
    this.props.updateProduct(product, productIndex);
  }

  onClickDeleteProduct(productIndex, e){
    console.log()
    this.props.deleteProduct(productIndex);
  }

  totalAmount(){
    var totalAmount = this.state.products.reduce((s, p) => s + p.amount(), 0)

    return totalAmount;
  }

  render(){
    return (
      <div id="products-list" className="col-6">
        <div className='container-title'>Product list</div>
        <div id="products-container">
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
                    className="btn product-countBtn product-countBtn-minus"
                    onClick={this.onClickCountButton.bind(this, product, index)}
                  >
                    -
                  </button>
                  <div className="product-count">{product.count}</div>
                  <button
                    className="btn product-countBtn product-countBtn-plus"
                    onClick={this.onClickCountButton.bind(this, product, index)}
                  >
                    +
                  </button>

                </div>
                <div className="products-item-amount-container">
                  Total
                  <span className="products-item-amount">
                    {product.amount()}
                  </span>
                  $
                </div>
              </div>

              <div className="product-item-controllButtons">
                <div className="product-item-controllBtn-container">
                  <img
                    className="product-item-delete"
                    src={require("../images/icon-delete.png")}
                    draggable="false"
                    alt="Delete product"
                    onClick={this.onClickDeleteProduct.bind(this, index)}
                  />
                </div>
                <div className="product-item-controllBtn-container">
                  <img
                    className="product-item-details"
                    src={require("../images/icon-details.png")}
                    draggable="false"
                    alt="Show details"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div id='total-amount-container'>
          Total
          <span id='total-amount'>{this.totalAmount()}</span>
          $
        </div>
      </div>
    )
  }
}

export default ProductsListContainer