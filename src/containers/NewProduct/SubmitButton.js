import React from 'react';

class SubmitButton extends React.Component{
  render(){
    return (
      <button
        className={"new-product-submit-button btn " + (this.props.submitButtonIsActive ? '' : 'disabled')}
        disabled={!this.props.submitButtonIsActive}
        onClick={this.props.submitForm}
      >
        Add to list
      </button>
    );
  }
}

export default SubmitButton;