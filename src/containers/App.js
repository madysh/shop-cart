import React from 'react'
import NewProductContainer from './NewProductContainer'
import ProductsListContainer from './ProductsListContainer'
import productModel from '../models/productModel'

import '../css/App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products: [
        new productModel({name: 'Buy apples', imageName: 'apple', price: '1'}),
        new productModel({name: 'fish sticks', imageName: 'fish', price: '7'})
      ]
    };
  }

  addNewProduct(product){
    var products = this.state.products;
    products.push(product);
    this.setState({products: products});
  }

  updateProduct(product, index){
    var products = this.state.products;
    products[index] = product;
    this.setState({products: products});
  }

  deleteProduct(index){
    var products = this.state.products;
    products.splice(index, 1);
    this.setState({products: products});
  }

  render(){
    return(
      <div>
        <div className="header">
          <img src={require('../images/logo.jpg')} className="logo" alt="logo" />
        </div>
        <div className="products row">
          <NewProductContainer
            addNewProduct = {this.addNewProduct.bind(this)}
          />
          <ProductsListContainer
            products={this.state.products}
            updateProduct={this.updateProduct.bind(this)}
            deleteProduct={this.deleteProduct.bind(this)}
          />
        </div>
      </div>
    );
  };
}

export default App

