import { combineReducers } from 'redux'
import newProductForm from './newProductForm'
import products from './products'

export default combineReducers({
  form: newProductForm,
  productsList: products
})