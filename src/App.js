import React, { Component } from 'react';
import logo from './images/logo.jpg';
import './App.css';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default App;
