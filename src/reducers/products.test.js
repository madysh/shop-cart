import Product from '../models/Product';
import products from './products'
import * as types from '../constants/ActionTypes'

const initialState = [
  new Product({ name: 'Buy apples', imageName: 'apple', price: 1 }),
  new Product({ name: 'fish sticks', imageName: 'fish', price: 7 })
];
const defaultProduct = new Product(
  { name: 'Buy a tractor', imageName: 'default', price: 10000000 }
);

describe('initial state', () => {
  it('sets an expected state', () => {
    expect(products(undefined, {})).toEqual(initialState);
  })
});

describe(types.ADD_PRODUCT, () => {
  it('adds the passed product to the state', () => {
    var action = { type: types.ADD_PRODUCT, product: defaultProduct };
    var expectedState = initialState.slice();
    expectedState.push(action.product);

    expect(products(initialState, action)).toEqual(expectedState)
  })
});

describe(types.DELETE_PRODUCT, () => {
  it('deletes the passed product from the state', () => {
    var state = initialState.slice();
    state.push(defaultProduct);
    var action = { type: types.DELETE_PRODUCT, index: 1 };
    var expectedState = [initialState[0], defaultProduct];

    expect(products(state, action)).toEqual(expectedState)
  })
});

describe(types.UPDATE_PRODUCT, () => {
  it('updates the passed product in the state', () => {
    var state = initialState.slice();
    state.push(defaultProduct);
    var productIndex = 1;
    var attr = 'count';
    var newValue = 10;
    var action = {
      type: types.UPDATE_PRODUCT,
      index: productIndex,
      attr: attr,
      value: newValue
    };
    var expectedState = state.slice();
    expectedState[productIndex][attr] = newValue;

    expect(products(state, action)).toEqual(expectedState)
  })
});