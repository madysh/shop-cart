import React from 'react';
import IconDelete from "../../images/icon-delete.png";
import IconDetails from "../../images/icon-details.png";

class ControllButtons extends React.Component{
  render(){
    var index = this.props.index;

    return (
      <div className="product-item-controll-buttons">
        <div className="product-item-controll-btn-container">
          <img
            className="product-item-delete"
            src={IconDelete}
            draggable="false"
            alt="Delete product"
            onClick={() => {this.props.deleteProduct(index);}}
          />
        </div>
        <div className="product-item-controll-btn-container">
          <img
            className="product-item-details"
            src={IconDetails}
            draggable="false"
            alt="Show details"
            onClick={() => {this.props.showProductDetails(index);}}
          />
        </div>
      </div>
    );
  };
}

export default ControllButtons