import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import productPropType from './Common/productPropType';
import { addProduct, updateProduct, deleteProduct } from '../actions/productsList'
import { hideProductDetails, showProductDetails } from '../actions/productDetails'
import Item from './ProductsList/Item';
import TotalAmount from './ProductsList/TotalAmount';
import '../css/ProductsListContainer.css';

const ProductsListContainer = (args) => (
  <div className={"products-list component-container col-6"+(args.isVisible ? '' :' hidden')}>
    <div className='container-title'>Product list</div>
    <div className="products-container">
      {args.products.map((product,index) =>
        <Item
          product={product}
          index={index}
          key={index}
          updateProduct={args.updateProduct}
          deleteProduct={args.deleteProduct}
          showProductDetails={args.showProductDetails}
          hideProductDetails={args.hideProductDetails}
        />
      )}
    </div>
    <TotalAmount products={args.products} />
  </div>
)

ProductsListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(productPropType)).isRequired,
  addProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  hideProductDetails: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: state.productsList,
  isVisible: !state.productDetails.isVisible
});
const mapDispatchToProps = {
  addProduct,
  updateProduct,
  deleteProduct,
  showProductDetails,
  hideProductDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer)