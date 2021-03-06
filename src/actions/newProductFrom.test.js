import * as actions from './newProductForm'
import * as types from '../constants/ActionTypes'

describe('updateProductInForm', () => {
  it('should create an action to update a product in the form', () => {
    var attr = 'count'
    var value = 10
    var expectedAction = {
      type:types.UPDATE_PRODUCT_IN_THE_FORM,
      attr: attr,
      value: value
    }

    expect(actions.updateProductInForm(attr, value)).toEqual(expectedAction)
  })
})

describe('toggleImagesList', () => {
  it('should toggle the list of images in the form', () => {
    var expectedAction = {
      type: types.TOGGLE_IMAGES_LIST
    }

    expect(actions.toggleImagesList()).toEqual(expectedAction)
  })
})

describe('hideImagesList', () => {
  it('should hide the list of images in the form', () => {
    var expectedAction = {
      type: types.HIDE_IMAGES_LIST
    }

    expect(actions.hideImagesList()).toEqual(expectedAction)
  })
})

describe('resetForm', () => {
  it('should reset the state of the form', () => {
    var expectedAction = {
      type: types.RESET_FORM
    }

    expect(actions.resetForm()).toEqual(expectedAction)
  })
})