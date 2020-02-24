import React from 'react';

const SubmitButton  = (args) => {
  var submitForm = () => {
    args.addProduct(args.product);
    args.resetForm();
    args.hideProductDetails();
  };

  return (
    <button
      className={"new-product-submit-button btn " + (args.isActive ? '' : 'disabled')}
      disabled={!args.isActive}
      onClick={submitForm}
    >
      Add to list
    </button>
  );
}

export default SubmitButton;