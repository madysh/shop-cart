export const showProductDetails = (product) => ({
  type: 'SHOW_PRODUCT_DETAILS',
  product: product
});

export const hideProductDetails = () => ({
  type: 'HIDE_PRODUCT_DETAILS'
});