import Product from '../models/Product';

const initialState = {
  product: new Product(),
  submitButtonIsActive: false,
  imagesListIsVisible: false
}

const newProductForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCT_IN_THE_FORM':
      let product = new Product(state.product);
      product[action.attr] = action.value
      return {
        product: product,
        submitButtonIsActive: product.isValid()
      };
    case 'RESET_FORM':
      return initialState
    case 'TOGGLE_IMAGES_LIST':
      return { ...state, imagesListIsVisible: !state.imagesListIsVisible }
    case 'HIDE_IMAGES_LIST':
      return { ...state, imagesListIsVisible: false }
    default:
      return state;
  }
}

export default newProductForm