import * as types from '../constants/ActionTypes'

export const updateProductInForm = (attr, value) => ({
  type: types.UPDATE_PRODUCT_IN_THE_FORM,
  attr: attr,
  value: value
});

export const toggleImagesList = () => ({
  type: types.TOGGLE_IMAGES_LIST
});

export const hideImagesList = () => ({
  type: types.HIDE_IMAGES_LIST
});

export const resetForm = () => ({
  type: types.RESET_FORM
});