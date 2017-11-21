import React from 'react';
import IconDelete from "../../images/icon-delete.png";
import IconDetails from "../../images/icon-details.png";

const ControllButtons  = ({ product, index, deleteProduct, showProductDetails }) => (
  <div className="product-item-controll-buttons">
    <div className="product-item-controll-btn-container">
      <img
        className="product-item-delete"
        src={IconDelete}
        draggable="false"
        alt="Delete product"
        onClick={() => {deleteProduct(index);}}
      />
    </div>
    <div className="product-item-controll-btn-container">
      <img
        className="product-item-details"
        src={IconDetails}
        draggable="false"
        alt="Show details"
        onClick={() => {showProductDetails(product);}}
      />
    </div>
  </div>
)

export default ControllButtons