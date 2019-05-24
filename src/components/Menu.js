import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import WeatherAPI from './WeatherAPI'
import SearchBar from './SearchBar'
import Tabs from './Tabs'

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

      unit: 'Kº',
      city: ''
    }
  }

  changeWeatherState(newState) {
    this.setState({ weather_state: newState })
  }

  changeWeatherDescription(newDesc) {
    this.setState({ weather_description: newDesc })
  }

  changeTemperature(newTemp) {
    this.setState({ original_temp: newTemp })
  }

  changeHumidity(newHum) {
    this.setState({ humidity: newHum })
  }

  changePressure(newPress) {
    this.setState({ pressure: newPress })
  }

  changeMinTemp(newMin) {
    this.setState({ original_min: newMin })
  }

  changeMaxTemp(newMax) {
    this.setState({ original_max: newMax })
  }

  changeWindSpeed(newSpeed) {
    this.setState({ wind_speed: newSpeed })
  }

  changeWindDirection(newDir) {
    this.setState({ wind_direction: newDir })
  }

  changeClouds(newClouds) {
    this.setState({ clouds: newClouds })
  }

  changeCity(newCity) {
    this.setState({ city: newCity })
  }

  updateUnit() {
    if (this.props.unit === 'Cº') {
      this.changeTemperature(this.state.original_temp - 273.15);
      this.changeMinTemp(this.state.original_min - 273.15);
      this.changeMaxTemp(this.state.original_max - 273.15);
    } else if (this.props.unit === 'Fº') {
      this.changeTemperature((this.state.original_temp - 273.15) * (9 / 5) + 32);
      this.changeMinTemp((this.state.original_min - 273.15) * (9 / 5) + 32);
      this.changeMaxTemp((this.state.original_max - 273.15) * (9 / 5) + 32);
    } else {
      this.changeTemperature(this.state.original_temp);
      this.changeMinTemp(this.state.original_min);
      this.changeMaxTemp(this.state.original_max);
    }
  }

  render() {

    if (this.props.unit !== this.state.unit) {
      this.setState({ unit: this.props.unit })
      this.updateUnit();
    }

    return (

      <Container fluid>

        <SearchBar newcity={this.changeCity.bind(this)} />

        <Divider horizontal>City: {this.state.city}</Divider>

        <WeatherAPI city={this.state.city}
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

        <Tabs temperature={this.state.temperature}
          min_temp={this.state.min_temp}
          max_temp={this.state.max_temp}
          unit={this.state.unit}
          clouds={this.state.clouds}
          weather_state={this.state.weather_state}
          weather_description={this.state.weather_description}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          wind_speed={this.state.wind_speed}
          wind_direction={this.state.wind_direction}
        />

      </Container>

    );
  }
}

export default Menu;
