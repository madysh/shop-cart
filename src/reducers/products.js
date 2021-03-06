import Product from '../models/Product';
import * as types from '../constants/ActionTypes'

const products = (state, action) => {
  if (state === undefined){
    state = [
      new Product({ name: 'Buy apples', imageName: 'apple', price: 1 }),
      new Product({ name: 'fish sticks', imageName: 'fish', price: 7 })
    ]
  }

  let products = state.slice();
  switch (action.type) {
    case types.ADD_PRODUCT:
      products.push(action.product);
      return products;
    case types.DELETE_PRODUCT:
      products.splice(action.index, 1);
      return products;
    case types.UPDATE_PRODUCT:
      products[action.index][action.attr] = action.value;
      return products;
    default:
      return products;
  }
}

export default products