import Product from '../models/Product';
import * as types from '../constants/ActionTypes'

const initialState = {
  product: new Product(),
  isVisible: false
};

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_PRODUCT_DETAILS:
      return {
        product: action.product,
        isVisible: true
      };
    case types.HIDE_PRODUCT_DETAILS:
      return initialState
    default:
      return state;
  }
}

export default productDetails