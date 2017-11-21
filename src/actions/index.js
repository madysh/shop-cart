export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  product: product
});

export const updateProduct = (index, attr, value) => ({
  type: 'UPDATE_PRODUCT',
  index: index,
  attr: attr,
  value: value
});

export const deleteProduct = (index) => ({
  type: 'DELETE_PRODUCT',
  index: index
});

export const resetForm = () => ({
  type: 'RESET_FORM'
});

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

export const showProductDetails = (product) => ({
  type: 'SHOW_PRODUCT_DETAILS',
  product: product
});

export const hideProductDetails = () => ({
  type: 'HIDE_PRODUCT_DETAILS'
});