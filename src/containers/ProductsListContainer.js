import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addProduct, updateProduct, deleteProduct, showProductDetails, hideProductDetails } from '../actions'
import Item from './ProductsList/Item';
import TotalAmount from './ProductsList/TotalAmount';
import '../css/ProductsListContainer.css';

const ProductsListContainer = ({ products, isVisible, addProduct, updateProduct, deleteProduct, showProductDetails, hideProductDetails }) => (
  <div className={"products-list component-container col-6"+(isVisible ? '' :' hidden')}>
    <div className='container-title'>Product list</div>
    <div className="products-container">
      {products.map((product,index) =>
        <Item
          product={product}
          index={index}
          key={index}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
          showProductDetails={showProductDetails}
          hideProductDetails={hideProductDetails}
        />
      )}
    </div>
    <TotalAmount products={products} />
  </div>
)

ProductsListContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })).isRequired
}

const mapStateToProps = (state) => ({
  products: state.productsList,
  isVisible: !state.productDetails.isVisible
});

export default connect(
  mapStateToProps,
  { addProduct, updateProduct, deleteProduct, showProductDetails, hideProductDetails }
)(ProductsListContainer)