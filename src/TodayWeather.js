import React from 'react';

class TodayWeather extends React.Component {

  state = {
    weatherData: {

    }
  }

  componentDidMount() {
    fetch ('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCyYdryPOWd6hAIPalfuCym6C5Kl4S-fas').then (function (response) {
      return response.json();
    }) .then(function(data) {
      console.log (data)
    })
    // fetch ('https://api.darksky.net/forecast/90ace10fcbf93545bb119cf90ba25f67/37.8267,-122.4233')
  }


  _handleUserSearch = () => {
    this.setState
    var location = this.refs.location.value
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCyYdryPOWd6hAIPalfuCym6C5Kl4S-fas')
      .then((weather) => {
        return weather.json()
      })

  }

  render () {
    return (
      <div>
        <input
          ref="location"
          type="text"
          placeholder="Where are you wearing?"/>
        <button onClick={this.handleUserSearch}>Search</button>
      </div>
    )
  }
}

export default TodayWeather;
