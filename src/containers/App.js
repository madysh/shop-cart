import React from 'react';
//import ProductsListContainer from './ProductsListContainer';
//import ProductDetailsContainer from './ProductDetailsContainer';
import Header from './App/Header';
import NewProductContainer from './NewProductContainer';
import '../css/App.css';

const App = () => (
/*
  constructor(){
    super();
    this.state = {
      showProductsList: true,
      currentProduct: new Product()
    };
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
  };*/

  <div>
    <Header />
    <div className="products row">
      <NewProductContainer />
    </div>
  </div>
)

export default App
          /*
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
          */