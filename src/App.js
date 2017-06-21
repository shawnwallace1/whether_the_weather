import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardImage from "./boardimage.jsx"
import Pinterest from "./pinterest.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Whether the Weather!</h1>
        <div className="main-content">
          <h2>Where are you?</h2>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
