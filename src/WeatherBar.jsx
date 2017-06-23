import TodayWeather from './TodayWeather.js'
import React, {PropTypes} from 'react'
import $ from 'jquery';
import './WeatherBar.css'

class WeatherBar extends React.Component {

  renderIcon = () => {
    switch (this.props.weather) {
      case 'winter':
        return (<i className='fa fa-mail'> </i>)
      case 'summer':
        return (<i className='fa fa-envelope'> </i>)
      default:
        return (<i className='fa fa-car'> </i>)
    }
  }

  render() {
    return (
      <div className="temperaturereading">
        {this.renderIcon()}
        {this.props.currently.temperature + "\xB0"}
      </div>
    )
  }
}

export default WeatherBar;
