export const updateProductInForm = (attr, value) => ({
  type: 'UPDATE_PRODUCT_IN_THE_FORM',
  attr: attr,
  value: value
});

export const toggleImagesList = () => ({
  type: 'TOGGLE_IMAGES_LIST'
});

export const hideImagesList = () => ({
  type: 'HIDE_IMAGES_LIST'
});

export const resetForm = () => ({
  type: 'RESET_FORM'
});