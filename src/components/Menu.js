import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { fetch_data } from './WeatherAPI'
import SearchBar from './SearchBar'
import Tabs from './Tabs'

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      currentWeather: undefined,
      list: undefined,
    }
  }

  setData() {
    fetch_data(this.state.city, this.props.unit).then((data) => {
      if (!data) return;
      this.setState({ currentWeather: data['results'][0] });
    })

  }

  changeCity(city) {
    this.setState({ city }, this.setData());
  }

  render() {

    return (

      <Container fluid>

        <SearchBar newcity={(_) => this.changeCity(_)} />

        <Divider horizontal>City: {this.state.city}</Divider>

        <Tabs show={this.state.city !== ''}
          currentWeather={this.state.currentWeather}
          unit={this.props.unit}
        />

      </Container >

    );
  }
}

export default Menu;
