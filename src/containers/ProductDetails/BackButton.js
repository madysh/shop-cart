import React from 'react';

const BackButton = ({hideProductDetails}) =>(
  <button
    className="back-to-list-btn"
    onClick={hideProductDetails}
  >
    Back to list
  </button>
)

export default BackButton