import Product from '../models/Product';
import productDetails from './productDetails'
import * as types from '../constants/ActionTypes'

const initialState = {
  product: new Product(),
  isVisible: false
};
const defaultState = {
  product: new Product({ name: 'Buy apples', imageName: 'apple', price: 1 }),
  isVisible: true
}

describe('initial state', () => {
  it('sets an expected state', () => {
    expect(productDetails(undefined, {})).toEqual(initialState);
  })
});

describe(types.HIDE_PRODUCT_DETAILS, () => {
  it('resets the state to the initial value', () => {
    var state = defaultState;
    var action = { type: types.HIDE_PRODUCT_DETAILS };

    expect(productDetails(state, action)).toEqual(initialState)
  })
});

describe(types.SHOW_PRODUCT_DETAILS, () => {
  it('resets the imagesListIsVisible value', () => {
    var state = initialState;
    var action = {
      type: types.SHOW_PRODUCT_DETAILS,
      product: defaultState.product
    };

    expect(productDetails(state, action)).toEqual(defaultState)
  })
});