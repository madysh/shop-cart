import * as types from '../constants/ActionTypes'

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product: product
});

export const updateProduct = (index, attr, value) => ({
  type: types.UPDATE_PRODUCT,
  index: index,
  attr: attr,
  value: value
});

export const deleteProduct = (index) => ({
  type: types.DELETE_PRODUCT,
  index: index
});