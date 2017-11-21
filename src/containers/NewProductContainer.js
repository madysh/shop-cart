import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import productPropType from './Common/productPropType';
import { hideProductDetails } from '../actions/productDetails'
import { addProduct } from '../actions/productsList'
import {
  resetForm,
  updateProductInForm,
  toggleImagesList,
  hideImagesList
} from '../actions/newProductForm'
import Inputs from './NewProduct/Inputs';
import CountContainer from './Common/CountContainer';
import ImageContainer from './NewProduct/ImageContainer';
import SubmitButton from './NewProduct/SubmitButton';

import '../css/NewProductContainer.css';

const NewProductContainer = (args) => (
  <div className="new-product-container component-container col-6">
    <div className='container-title'>Add product to your cart list</div>
    <div className="new-product">
      <Inputs
        product={args.product}
        updateProduct={args.updateProductInForm}
      />
      <CountContainer
        product={args.product}
        updateProduct={args.updateProductInForm}
      />
      <ImageContainer
        product={args.product}
        updateProduct={args.updateProductInForm}
        toggleImagesList={args.toggleImagesList}
        hideImagesList={args.hideImagesList}
        imagesListIsVisible={args.imagesListIsVisible}
      />
      <SubmitButton
        product={args.product}
        imagesListIsVisible={args.imagesListIsVisible}
        addProduct={args.addProduct}
        resetForm={args.resetForm}
        isActive={args.submitButtonIsActive}
        hideProductDetails={args.hideProductDetails}
      />
    </div>
  </div>
)

NewProductContainer.propTypes = {
  product: PropTypes.shape(productPropType).isRequired,
  submitButtonIsActive: PropTypes.bool,
  resetForm: PropTypes.func.isRequired,
  updateProductInForm: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  toggleImagesList: PropTypes.func.isRequired,
  hideImagesList: PropTypes.func.isRequired,
  hideProductDetails: PropTypes.func.isRequired
}

const mapStateToProps = (state) => (state.form)
const mapDispatchToProps = {
  resetForm,
  updateProductInForm,
  toggleImagesList,
  hideImagesList,
  addProduct,
  hideProductDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProductContainer)