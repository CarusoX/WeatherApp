import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import WeatherAPI from './WeatherAPI'
import ForecastAPI from './ForecastAPI'
import SearchBar from './SearchBar'
import Tabs from './Tabs'

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWeather: undefined,

      list: undefined,
      city: ''
    }
  }

  setData(data) {
    this.setState({
      currentWeather: data['results'][0]
    })
  }

  setForeData(data) {
    this.setState({
      list: data['list'],
    })
  }


  changeCity(newCity) {
    this.setState({ city: newCity })
  }

  render() {
    return (

      <Container fluid>

        <SearchBar newcity={(_) => this.changeCity(_)} />

        <Divider horizontal>City: {this.state.city}</Divider>

        <WeatherAPI
          city={this.state.city}
          setData={(data) => this.setData(data)}
          unit={this.props.unit}
        />

        <ForecastAPI id={this.state.id}
          setData={(data) => this.setForeData(data)}
        />

        <Tabs show={this.state.city !== ''}
          currentWeather={this.state.currentWeather}
          unit={this.props.unit}
        />

      </Container>

    );
  }
}

export default Menu;
