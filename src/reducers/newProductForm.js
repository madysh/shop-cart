import Product from '../models/Product';
import * as types from '../constants/ActionTypes'

const initialState = {
  product: new Product(),
  submitButtonIsActive: false,
  imagesListIsVisible: false
}

const newProductForm = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCT_IN_THE_FORM:
      let product = new Product(state.product);
      product[action.attr] = action.value
      return {
        product: product,
        submitButtonIsActive: product.isValid()
      };
    case types.RESET_FORM:
      return initialState;
    case types.TOGGLE_IMAGES_LIST:
      return { ...state, imagesListIsVisible: !state.imagesListIsVisible };
    case types.HIDE_IMAGES_LIST:
      return { ...state, imagesListIsVisible: initialState.imagesListIsVisible };
    default:
      return state;
  }
}

export default newProductForm