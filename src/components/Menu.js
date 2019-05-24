import React from 'react'
import { Button, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import Weather_API from './Weather_API'
import SearchBar from './SearchBar'
import Tabs from './Tabs'

var temp = 0
var min = 0
var max = 0

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      weather_state: '',
      weather_description: '',
      temperature: 0,
      humidity: '',
      pressure: '',
      min_temp: 0,
      max_temp: 0,
      wind_speed: '',
      wind_direction: '',
      clouds: '',

      original_temp: '',
      original_min: '',
      original_max: '',
      unit: '',

      unit: 'Kº',
      city: ''
    }
  }

  changeWeatherState(newState){
    this.setState({weather_state: newState})    
  }

  changeWeatherDescription(newDesc){
    this.setState({weather_description: newDesc})
  }
  
  changeTemperature(newTemp){
    this.setState({temperature: newTemp})
  }

  changeHumidity(newHum){
    this.setState({humidity: newHum})
  }

  changePressure(newPress){
    this.setState({pressure: newPress})
  }

  changeMinTemp(newMin){
    this.setState({min_temp: newMin})
  }

  changeMaxTemp(newMax){
    this.setState({max_temp: newMax})
  }

  changeWindSpeed(newSpeed){
    this.setState({wind_speed: newSpeed})
  }

  changeWindDirection(newDir){
    this.setState({wind_direction: newDir})
  }

  changeClouds(newClouds){
    this.setState({clouds: newClouds})
  }

  changeCity(newCity) {
    this.setState({city: newCity})
  }

  updateUnit() {
    if(this.props.unit === 'Cº') {
        temp = this.state.temperature - 273.15
        min = this.state.min_temp - 273.15
        max = this.state.max_temp - 273.15
    } else if(this.props.unit === 'Fº') {
        temp = ((this.state.temperature - 273.15) * (9/5)) + 32
        min = ((this.state.min_temp - 273.15) * (9/5)) + 32
        max = ((this.state.max_temp - 273.15) * (9/5)) + 32
    } else {
        temp = this.state.temperature
        min = this.state.min_temp
        max = this.state.max_temp
    }
  }

  render() {

    if(this.props.unit !== this.state.unit) {
      this.setState({unit: this.props.unit})
      this.updateUnit();
    }

    return(

      <div>

        <SearchBar newcity={this.changeCity.bind(this)} />
        
        <Divider horizontal>City: {this.state.city}</Divider>

        <Weather_API city={this.state.city}
                     clouds={this.changeClouds.bind(this)}
                     weather_state={this.changeWeatherState.bind(this)}
                     weather_description={this.changeWeatherDescription.bind(this)}
                     temperature={this.changeTemperature.bind(this)}
                     humidity={this.changeHumidity.bind(this)}
                     pressure={this.changePressure.bind(this)}
                     min_temp={this.changeMinTemp.bind(this)}
                     max_temp={this.changeMaxTemp.bind(this)}
                     wind_speed={this.changeWindSpeed.bind(this)}
                     wind_direction={this.changeWindDirection.bind(this)}
        />

        <Tabs temperature={this.state.temperature} // Tendriamos que pasar temp, no esta.
              min_temp={this.state.min_temp} // Igual para min
              max_temp={this.state.max_temp} // y max.
              unit={this.state.unit}
              clouds={this.state.clouds}
              weather_state={this.state.weather_state}
              weather_description={this.state.weather_description}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              wind_speed={this.state.wind_speed}
              wind_direction={this.state.wind_direction}
        />

      </div>

    );
  }
}

export default Menu;
