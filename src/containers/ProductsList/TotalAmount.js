import React from 'react';

const TotalAmount  = ({ products }) => {
  var totalAmount = () => {
    var totalAmount = products.reduce((s, p) => s + p.amount(), 0);
    return totalAmount;
  };

  return (
    <div className='total-amount-container'>
      Total:
      <span className='total-amount'>{totalAmount()}</span>
      $
    </div>
  );
}

export default TotalAmount