import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BoardImage from "./boardimage.jsx"
import Pinterest from "./pinterest.jsx"

import TodayWeather from './TodayWeather.js';
import Pins from './Pins.js';


class App extends Component {
  render() {
    return (

      <div className="App" style={{
          fontFamily: 'avenir',
          fontSize: '30px',
        }}>
        <div className="App-header">
          <img src={'http://png.clipart.me/previews/080/hand-ok-sign-vector-art-25490.png'} className="App-logo" alt="logo"/>
          <h1>
            Whether the Weather
          </h1>
        </div>
        <div className="main-content">
          <h2>Where are you?</h2>
          {this.props.children}
        </div>

        <TodayWeather />
        <Pins />
      </div>
    );
  }
}

export default App;
