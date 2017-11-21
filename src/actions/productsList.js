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