import Product from '../models/Product'
import * as actions from './productsList'
import * as types from '../constants/ActionTypes'

describe('addProduct', () => {
  it('should add the passed product', () => {
    var product = new Product();
    var expectedAction = {
      type:types.ADD_PRODUCT,
      product: product
    }

    expect(actions.addProduct(product)).toEqual(expectedAction)
  })
})

describe('updateProduct', () => {
  it('should update the passed product', () => {
    var index = Math.floor((Math.random() * 100) + 1);
    var attr = 'price'
    var value = Math.floor((Math.random() * 100) + 1);
    var expectedAction = {
      type:types.UPDATE_PRODUCT,
      index: index,
      attr: attr,
      value: value
    }

    expect(actions.updateProduct(index, attr, value)).toEqual(expectedAction)
  })
})

describe('deleteProduct', () => {
  it('should delete the passed product', () => {
    var index = Math.floor((Math.random() * 100) + 1);
    var expectedAction = {
      type: types.DELETE_PRODUCT,
      index: index
    }

    expect(actions.deleteProduct(index)).toEqual(expectedAction)
  })
})