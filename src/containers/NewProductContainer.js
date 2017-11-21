import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { resetForm, updateProductInForm, addProduct, toggleImagesList, hideImagesList } from '../actions'

import Inputs from './NewProduct/Inputs';
import CountContainer from './Common/CountContainer';
import ImageContainer from './NewProduct/ImageContainer';
import SubmitButton from './NewProduct/SubmitButton';

import '../css/NewProductContainer.css';

const NewProductContainer = ({ product, submitButtonIsActive, imagesListIsVisible, resetForm, updateProductInForm, addProduct, toggleImagesList, hideImagesList }) => (
  <div className="new-product-container component-container col-6">
    <div className='container-title'>Add product to your cart list</div>
    <div className="new-product">
      <Inputs
        product={product}
        updateProduct={updateProductInForm}
      />
      <CountContainer
        product={product}
        updateProduct={updateProductInForm}
      />
      <ImageContainer
        product={product}
        updateProduct={updateProductInForm}
        toggleImagesList={toggleImagesList}
        hideImagesList={hideImagesList}
        imagesListIsVisible={imagesListIsVisible}
      />
      <SubmitButton
        product={product}
        imagesListIsVisible={imagesListIsVisible}
        addProduct={addProduct}
        resetForm={resetForm}
        isActive={submitButtonIsActive}
      />
    </div>
  </div>
)
NewProductContainer.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired,
  submitButtonIsActive: PropTypes.bool
}

const mapStateToProps = (state) => (state.form)

export default connect(
  mapStateToProps,
  { resetForm, updateProductInForm, addProduct, toggleImagesList, hideImagesList }
)(NewProductContainer)
