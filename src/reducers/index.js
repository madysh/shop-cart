import { combineReducers } from 'redux'
import newProductForm from './newProductForm'
import products from './products'
import productDetails from './productDetails'

export default combineReducers({
  form: newProductForm,
  productsList: products,
  productDetails: productDetails
})