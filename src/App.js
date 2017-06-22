import React, { Component } from 'react';
import './App.css';
import BoardImage from "./boardimage.jsx";
import TodayWeather from './TodayWeather.js';
import menButton from './menButton.js';
import womenButton from './womenButton.js';
import logoIMG from './images/logo.png'

class App extends Component {
  render() {
    return (

      <div className="App" style={{
          fontFamily: 'avenir',
          fontSize: '30px',

        }}>
        <div className="App-header">

        <div className="logo"> <img src={logoIMG} alt="logo"
style={{
  height: '200px',
  width: 'auto',
}}/> </div>

            <TodayWeather></TodayWeather>

            <div className="buttons">

                <menButton className="men"></menButton>

                <womenButton className="women"></womenButton>

            </div>
          </div>

      <div className="main-content">

          {this.props.children}

        </div>
        </div>
    );
  }
}

export default App;
