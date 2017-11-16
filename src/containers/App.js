import React from 'react'
import NewProductContainer from './NewProductContainer'
import ProductsListContainer from './ProductsListContainer'

import '../css/App.css';

const App = () => (
  <div>
    <div className="header">
      <img src={require('../images/logo.jpg')} className="logo" alt="logo" />
    </div>
    <div className="products row">
      <NewProductContainer />
      <ProductsListContainer />
    </div>
  </div>
)

export default App

