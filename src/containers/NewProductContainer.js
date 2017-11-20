import React from 'react';
import Product from '../models/Product';
import Inputs from './NewProduct/Inputs';
import CountContainer from './Common/CountContainer';
import ImageContainer from './NewProduct/ImageContainer';
import SubmitButton from './NewProduct/SubmitButton';
import '../css/NewProductContainer.css';

class NewProductContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product: new Product(),
      submitButtonIsActive: false
    };
  };

  updateProduct =(attr, value) => {
    this.setState((prevState, props) => {
      var product = prevState.product;
      product[attr] = value;
      return {
        product: product,
        submitButtonIsActive: product.isValid()
      };
    });
  };

  submitForm = () => {
    this.props.addNewProduct(this.state.product);
    this.setState({
      product: new Product(),
      submitButtonIsActive: false
    });
  };

  render(){
    var product = this.state.product;

    return (
      <div className="new-product-container component-container col-6">
        <div className='container-title'>Add product to your cart list</div>
        <div className="new-product">
          <Inputs
            product={product}
            updateProduct={this.updateProduct}
          />
          <CountContainer
            product={product}
            updateProduct={this.updateProduct}
          />
          <ImageContainer
            product={product}
            updateProduct={this.updateProduct}
          />
          <SubmitButton
            submitButtonIsActive={this.state.submitButtonIsActive}
            submitForm={this.submitForm}
          />
        </div>
      </div>
    );
  };
}

export default NewProductContainer;