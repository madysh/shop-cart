import React from 'react';

const SubmitButton  = ({ product, isActive, addProduct, resetForm }) => {
  var submitForm = () => {
    addProduct(product);
    resetForm();
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