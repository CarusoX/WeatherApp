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

  setData(data) {
    this.setState({
      weather_state: data['wheater_state'],
      weather_description: data['wheater_description'],
      temperature: data['temp'],
      humidity: data['humidity'],
      pressure: data['pressure'],
      min_temp: data['temp_min'],
      max_temp: data['temp_max'],
      wind_speed: data['wind_speed'],
      wind_direction: data['wind_dir'],
      clouds: data['clouds'],
    })
  }


  changeCity(newCity) {
    this.setState({ city: newCity })
  }

  FarToCel(callback) {
    let temperature = (5 / 9) * (this.state.temperature - 32);
    let min_temp = (5 / 9) * (this.state.min_temp - 32);
    let max_temp = (5 / 9) * (this.state.max_temp - 32);
    this.setState({ temperature, min_temp, max_temp }, callback)
  }

  CelToKel(callback) {
    let temperature = this.state.temperature + 273.15;
    let min_temp = this.state.temperature + 273.15;
    let max_temp = this.state.temperature + 273.15;
    this.setState({ temperature, min_temp, max_temp }, callback);
  }

  KelToFar(callback) {
    let temperature = this.state.temperature * (9 / 5) - 459.67;
    let min_temp = this.state.temperature * (9 / 5) - 459.67;
    let max_temp = this.state.temperature * (9 / 5) - 459.67;
    this.setState({ temperature, min_temp, max_temp }, callback);
  }

  updateUnit() {
    let now = this.props.unit;
    let last = this.state.unit;
    if (now === last) return;

    if (now === 'Cº' && last === 'Fº') {
      this.FarToCel();
    } else if (now === 'Fº' && last === 'Cº') {
      this.CelToKel(this.KelToFar);
    } else if (now === 'Cº' && last === 'Kº') {
      this.KelToFar(this.FarToCel);
    } else if (now === 'Kº' && last === 'Cº') {
      this.CelToKel();
    } else if (now === 'Fº' && last === 'Kº') {
      this.KelToFar();
    } else if (now === 'Kº' && last === 'Fº') {
      this.FarToCel(this.CelToKel);
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
          setData={(data) => this.setData(data)}
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
