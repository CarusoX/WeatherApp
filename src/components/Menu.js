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
      UV: undefined,
      list: undefined,
    }
  }

  // TODO: Set correct Unit

  setData() {
    fetch_data(this.state.city).then((data) => {
      if (!data) return;
      console.log(data);
      this.setState({
        currentWeather: data['results'][0],
        UV: data['results'][2],
      });
    })
  }

  changeCity(city) {
    this.setState({ city }, () => this.setData());
  }

  render() {

    return (

      <Container fluid>

        <SearchBar newcity={(_) => this.changeCity(_)} />

        <Divider horizontal>City: {this.state.city}</Divider>

        <Tabs show={this.state.city !== ''}
          currentWeather={this.state.currentWeather}
          UV={this.state.UV}
          unit={this.props.unit}
        />

      </Container >

    );
  }
}

export default Menu;
