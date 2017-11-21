import React from 'react';

const SubmitButton  = ({ product, isActive, addProduct, resetForm, hideProductDetails }) => {
  var submitForm = () => {
    addProduct(product);
    resetForm();
    hideProductDetails();
  };

  return (
    <button
      className={"new-product-submit-button btn " + (isActive ? '' : 'disabled')}
      disabled={!isActive}
      onClick={submitForm}
    >
      Add to list
    </button>
  );
}

export default SubmitButton;