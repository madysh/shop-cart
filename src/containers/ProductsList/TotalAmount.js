import React from 'react';

class TotalAmount extends React.Component{
  totalAmount = () => {
    var totalAmount = this.props.products.reduce((s, p) => s + p.amount(), 0);
    return totalAmount;
  }

  render(){
    return (
      <div className='total-amount-container'>
        Total:
        <span className='total-amount'>{this.totalAmount()}</span>
        $
      </div>
    );
  };
}

export default TotalAmount