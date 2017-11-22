import Product from '../models/Product';
import newProductForm from './newProductForm'
import * as types from '../constants/ActionTypes'

const initialState = {
  product: new Product(),
  submitButtonIsActive: false,
  imagesListIsVisible: false
}
const defaultState = {
  product: new Product({ name: 'Buy apples', imageName: 'apple', price: 1 }),
  submitButtonIsActive: true,
  imagesListIsVisible: true
}

describe(types.UPDATE_PRODUCT_IN_THE_FORM, () => {
  it('updates the passed attribute in the state', () => {
    var state = defaultState;
    var newPrice = 0;
    var action = {
      type: types.UPDATE_PRODUCT_IN_THE_FORM,
      attr: 'price',
      value: newPrice
    };
    var expectedProduct = new Product(defaultState.product);
    expectedProduct.price = newPrice;
    var expectedState = { product: expectedProduct, submitButtonIsActive: false };

    expect(newProductForm(state, action)).toEqual(expectedState)
  })
});

describe(types.RESET_FORM, () => {
  it('resets the state to the initial value', () => {
    var state = defaultState;
    var action = { type: types.RESET_FORM };

    expect(newProductForm(state, action)).toEqual(initialState)
  })
});

describe(types.TOGGLE_IMAGES_LIST, () => {
  it('toggles the imagesListIsVisible value', () => {
    var state = initialState;
    var action = { type: types.TOGGLE_IMAGES_LIST };
    var expectedState = { ...state, imagesListIsVisible: true }

    expect(newProductForm(state, action)).toEqual(expectedState)
  })
});

describe(types.HIDE_IMAGES_LIST, () => {
  it('resets the imagesListIsVisible value', () => {
    var state = defaultState;
    var action = { type: types.HIDE_IMAGES_LIST };
    var expectedState = { ...state, imagesListIsVisible: false }

    expect(newProductForm(state, action)).toEqual(expectedState)
  })
});