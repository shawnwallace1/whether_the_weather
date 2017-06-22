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
    </div>

    )
  }
}

export default TodayWeather;

// import React from 'react';
//
// class TodayWeather extends React.Component {
//
//   state = {
//     weatherData: {
//
//     }
//   }
//
//   componentDidMount() {
//     fetch ('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCyYdryPOWd6hAIPalfuCym6C5Kl4S-fas').then (function (response) {
//       return response.json();
//     }) .then(function(data) {
//       console.log (data)
//     })
//     // fetch ('https://api.darksky.net/forecast/90ace10fcbf93545bb119cf90ba25f67/37.8267,-122.4233')
//   }
//
//
//   _handleUserSearch = () => {
//     this.setState
//     var location = this.refs.location.value
//     fetch('https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCyYdryPOWd6hAIPalfuCym6C5Kl4S-fas')
//       .then((weather) => {
//         return weather.json()
//       })
//
//   }
//
//   render () {
//     return (
//       <div>
//         <input
//           ref="location"
//           type="text"
//           placeholder="Where are you wearing?"/>
//         <button onClick={this.handleUserSearch}>Search</button>
//       </div>
//     )
//   }
// }
//
// export default TodayWeather;
