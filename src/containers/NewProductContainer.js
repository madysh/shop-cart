import React from 'react';

class NewProductContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      isValid: false
    }
  }

  render(){
    return (
      <div className="new-product col-6">
        <div className='container-title'>Add product to your cart list</div>
        <form className="new-product-form">
          <input type="text" id="new-product-name" className="form-control" placeholder="Product name"/>
          <input
            type="number"
            min="1"
            id="new-product-price"
            className="form-control"
            placeholder="Product price"
          />
          <button
            type="submit"
            className={"btn " + (this.state.isValid ? '' : 'disabled')}
            disabled={!this.state.isValid}
          >
            Add to list
          </button>
        </form>
      </div>
    );
  }
}

export default NewProductContainer;