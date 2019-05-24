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

      unit: 'Cº',
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
    this.setState({ temperature: newTemp })
  }

  changeHumidity(newHum) {
    this.setState({ humidity: newHum })
  }

  changePressure(newPress) {
    this.setState({ pressure: newPress })
  }

  changeMinTemp(newMin) {
    this.setState({ min_temp: newMin })
  }

  changeMaxTemp(newMax) {
    this.setState({ max_temp: newMax })
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

  FarToCel() {
    let temperature = (5 / 9) * (this.state.temperature - 32);
    let min_temp = (5 / 9) * (this.state.min_temp - 32);
    let max_temp = (5 / 9) * (this.state.max_temp - 32);
    this.setState({ temperature, min_temp, max_temp })
  }

  CelToFar() {
    let temperature = this.state.temperature * (9 / 5) + 32;
    let min_temp = this.state.temperature * (9 / 5) + 32;
    let max_temp = this.state.temperature * (9 / 5) + 32;
    this.setState({ temperature, min_temp, max_temp });
  }

  CelToKel() {
    let temperature = this.state.temperature + 273.15;
    let min_temp = this.state.temperature + 273.15;
    let max_temp = this.state.temperature + 273.15;
    this.setState({ temperature, min_temp, max_temp });
  }

  KelToCel() {
    let temperature = this.state.temperature - 273.15;
    let min_temp = this.state.temperature - 273.15;
    let max_temp = this.state.temperature - 273.15;
    this.setState({ temperature, min_temp, max_temp });
  }

  FarToKel() {
    let temperature = (this.state.temperature + 459.67) * (5 / 9);
    let min_temp = (this.state.temperature + 459.67) * (5 / 9);
    let max_temp = (this.state.temperature + 459.67) * (5 / 9);
    this.setState({ temperature, min_temp, max_temp });
  }

  KelToFar() {
    let temperature = this.state.temperature * (9 / 5) - 459.67;
    let min_temp = this.state.temperature * (9 / 5) - 459.67;
    let max_temp = this.state.temperature * (9 / 5) - 459.67;
    this.setState({ temperature, min_temp, max_temp });
  }

  updateUnit() {
    let now = this.props.unit;
    let last = this.state.unit;
    if (now === last) return;

    if (now === 'Cº' && last === 'Fº') {
      this.FarToCel();
    } else if (now === 'Fº' && last === 'Cº') {
      this.CelToFar();
    } else if (now === 'Cº' && last === 'Kº') {
      this.KelToCel();
    } else if (now === 'Kº' && last === 'Cº') {
      this.CelToKel();
    } else if (now === 'Fº' && last === 'Kº') {
      this.KelToFar();
    } else if (now === 'Kº' && last === 'Fº') {
      this.FarToKel();
    }
    this.setState({ unit: now });
  }

  componentDidUpdate() {
    if(this.props.unit !== this.state.unit) {
      this.updateUnit();
    }
  }

  render() {
    return (

      <Container fluid>

        <SearchBar newcity={(_) => this.changeCity(_)} />

        <Divider horizontal>City: {this.state.city}</Divider>

        <WeatherAPI city={this.state.city}
          clouds={(_) => this.changeClouds(_)}
          weather_state={(_) => this.changeWeatherState(_)}
          weather_description={(_) => this.changeWeatherDescription(_)}
          temperature={(_) => this.changeTemperature(_)}
          humidity={(_) => this.changeHumidity(_)}
          pressure={(_) => this.changePressure(_)}
          min_temp={(_) => this.changeMinTemp(_)}
          max_temp={(_) => this.changeMaxTemp(_)}
          wind_speed={(_) => this.changeWindSpeed(_)}
          wind_direction={(_) => this.changeWindDirection(_)}
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
