import React from 'react';
import Item from './ProductsList/Item';
import TotalAmount from './ProductsList/TotalAmount';
import '../css/ProductsListContainer.css';

class ProductsListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products
    };
  };

  updateProduct =(productIndex, attr, value) => {
    this.setState((prevState, props) => {
      var products = prevState.products;
      products[productIndex][attr] = value;
      return {products: products};
    });
  };

  render(){
    return (
      <div className={"products-list component-container col-6"+(this.props.showComponent ? '' : ' hidden')}>
        <div className='container-title'>Product list</div>
        <div className="products-container">
          {this.state.products.map((product,index) =>
            <Item
              product={product}
              index={index}
              key={index}
              updateProduct={this.updateProduct}
              deleteProduct={this.props.deleteProduct}
              showProductDetails={this.props.showProductDetails}
            />
          )}
        </div>
        <TotalAmount products={this.state.products} />
      </div>
    );
  };
}

export default ProductsListContainer