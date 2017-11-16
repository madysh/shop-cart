import React from 'react'
import NewProductContainer from './NewProductContainer'
import ProductsListContainer from './ProductsListContainer'

import logo from '../images/logo.jpg';
import '../css/App.css';

const App = () => (
  <div>
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="products row">
      <NewProductContainer />
      <ProductsListContainer />
    </div>
  </div>
)

export default App

