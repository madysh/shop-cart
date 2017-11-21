import React from 'react';
import IconDelete from "../../images/icon-delete.png";
import IconDetails from "../../images/icon-details.png";

const ControllButtons  = (args) => (
  <div className="product-item-controll-buttons">
    <div className="product-item-controll-btn-container">
      <img
        className="product-item-delete"
        src={IconDelete}
        draggable="false"
        alt="Delete product"
        onClick={() => {args.deleteProduct(args.index);}}
      />
    </div>
    <div className="product-item-controll-btn-container">
      <img
        className="product-item-details"
        src={IconDetails}
        draggable="false"
        alt="Show details"
        onClick={() => {args.showProductDetails(args.product);}}
      />
    </div>
  </div>
)

export default ControllButtons