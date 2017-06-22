import React from 'react';
import $ from 'jquery';
import Pins from './Pins.js'

class TodayWeather extends React.Component {
  state = {
    weather: ' winter'
  }

  getWeather = (coords) => {
    $.ajax({
    url: `https://api.darksky.net/forecast/75d437b78df3e67e3a20dfca92bc10b6/${coords.lat},${coords.lng}`,
    jsonp:"callback",
    dataType: "jsonp",
    success: (response) => {
      this.fetchBoardBasedOnWeather(response.currently)
      console.log('state', response)
    }})
  }

  _handleUserSearch = () => {
    fetch (`https://maps.googleapis.com/maps/api/geocode/json?address=${this.refs.location.value}&key=AIzaSyCNSrb_mgZJXIf8ctd8V62Y2WwvEPf_n5c`).then (function (response) {
      return response.json();
    }) .then((data) => {
      this.getWeather(data.results[0].geometry.location)
    })
  }

  _handleUserClick = () => {
  }

  fetchBoardBasedOnWeather = (currently) => {
    var temp = currently.temperature
    var precipProbability = currently.precipProbability

    if(temp < 32 && precipProbability > 0.4) {
      this.setState({weather: 'precwinter'})
    } else if (temp < 32 && precipProbability < 0.4) {
      this.setState({weather:'winter'})
    } else if (temp < 50 && precipProbability > 0.4) {
      this.setState({weather:'precautumn'})
    } else if (temp < 50 && precipProbability < 0.4) {
      this.setState({weather:'autumn'})
    } else if (temp < 70 && precipProbability > 0.4) {
      this.setState({weather:'precwarm'})
    } else if (temp < 70 && precipProbability < 0.4) {
      this.setState({weather:'spring'})
    } else if (temp > 70 && precipProbability < 0.4) {
      this.setState({weather:'summer'})
    }
  }

  render () {
    return (

    <div className="box">
        <input
          ref="location"
          type="text"
          id="search"
          placeholder="Where are you wearing?" />
        <button onClick={this._handleUserSearch} className="icon"><i className="fa fa-search"></i></button>
        <Pins weather={this.state.weather}/>
    </div>

    )
  }
}

export default TodayWeather;
