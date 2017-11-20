import React from 'react';
import NewProductContainer from './NewProductContainer';
import ProductsListContainer from './ProductsListContainer';
import ProductDetailsContainer from './ProductDetailsContainer';
import Product from '../models/Product';
import Header from './App/Header';
import '../css/App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      products: [
        new Product({name: 'Buy apples', imageName: 'apple', price: '1'}),
        new Product({name: 'fish sticks', imageName: 'fish', price: '7'})
      ],
      showProductsList: true,
      currentProduct: new Product()
    };
  };

  addNewProduct = (product) => {
    this.setState((prevState, props) => {
      var products = prevState.products;
      products.push(product);
      return {
        products: products,
        showProductsList: true
      };
    });
  };

  updateProduct = (product, index) => {
    this.setState((prevState, props) => {
      var products = prevState.products;
      products[index] = product;
      return {products: products};
    });
  };

  deleteProduct = (index) => {
    this.setState((prevState, props) => {
      var products = prevState.products;
      products.splice(index, 1);
      return {products: products};
    });
  };

  showProductsList =() => {
    this.setState({showProductsList: true});
  };

  showProductDetails =(index) => {
    this.setState({
      showProductsList: false,
      currentProduct: this.state.products[index]
    });
  };

  render(){
    return(
      <div>
        <Header />
        <div className="products row">
          <NewProductContainer
            addNewProduct={this.addNewProduct}
          />
          <ProductsListContainer
            products={this.state.products}
            updateProduct={this.updateProduct}
            deleteProduct={this.deleteProduct}
            showProductDetails={this.showProductDetails}
            showComponent={this.state.showProductsList}
          />
          <ProductDetailsContainer
            product={this.state.currentProduct}
            showProductsList={this.showProductsList}
            showComponent={!this.state.showProductsList}
          />
        </div>
      </div>
    );
  };
}

export default App