import React from 'react';
import logo from '../..//images/logo.jpg';

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <img src={logo} className="logo" alt="React" />
      </div>
    );
  };
}

export default Header