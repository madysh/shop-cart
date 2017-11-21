import Product from '../models/Product';

const initialState = {
  product: new Product(),
  isVisible: false
};

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_PRODUCT_DETAILS':
      return {
        product: action.product,
        isVisible: true
      };
    case 'HIDE_PRODUCT_DETAILS':
      return initialState
    default:
      return state;
  }
}

export default productDetails