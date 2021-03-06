import Product from '../models/Product'
import * as actions from './productDetails'
import * as types from '../constants/ActionTypes'

describe('showProductDetails', () => {
  it('should the details page for the passed product', () => {
    var product = new Product();
    var expectedAction = {
      type:types.SHOW_PRODUCT_DETAILS,
      product: product
    }

    expect(actions.showProductDetails(product)).toEqual(expectedAction)
  })
})

describe('hideProductDetails', () => {
  it('should hide the details page', () => {
    var expectedAction = {
      type: types.HIDE_PRODUCT_DETAILS
    }

    expect(actions.hideProductDetails()).toEqual(expectedAction)
  })
})