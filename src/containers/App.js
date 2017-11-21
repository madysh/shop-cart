import React from 'react';
import ProductsListContainer from './ProductsListContainer';
import ProductDetailsContainer from './ProductDetailsContainer';
import Header from './App/Header';
import NewProductContainer from './NewProductContainer';
import '../css/App.css';

const App = () => (
  <div>
    <Header />
    <div className="products row">
      <NewProductContainer />
      <ProductsListContainer />
      <ProductDetailsContainer />
    </div>
  </div>
)

export default App