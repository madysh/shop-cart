import * as types from '../constants/ActionTypes'

export const showProductDetails = (product) => ({
  type: types.SHOW_PRODUCT_DETAILS,
  product: product
});

export const hideProductDetails = () => ({
  type: types.HIDE_PRODUCT_DETAILS
});