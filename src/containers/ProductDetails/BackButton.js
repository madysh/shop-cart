import React from 'react';

class BackButton extends React.Component{
  render(){
    return (
      <button
        className="back-to-list-btn"
        onClick={this.props.showProductsList}
      >
        Back to list
      </button>
    );
  };
}

export default BackButton