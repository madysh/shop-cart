import React from 'react'
import NewProductContainer from './NewProductContainer'
import ProductsListContainer from './ProductsListContainer'
import logo from '../images/logo.jpg'
import Product from '../models/Product'
import '../css/App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products: [
        new Product({name: 'Buy apples', imageName: 'apple', price: '1'}),
        new Product({name: 'fish sticks', imageName: 'fish', price: '7'})
      ]
    };
  }

  addNewProduct(product){
    this.setState((prevState, props) => {
      var products = prevState.products;
      products.push(product);
      return {products: products};
    });
  }

  updateProduct(product, index){
    this.setState((prevState, props) => {
      var products = prevState.products;
      products[index] = product;
      return {products: products};
    });
  }

  deleteProduct(index){
    this.setState((prevState, props) => {
      var products = prevState.products;
      products.splice(index, 1);
      return {products: products};
    });
  }

  render(){
    return(
      <div>
        <div className="header">
          <img src={logo} className="logo" alt="React" />
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

