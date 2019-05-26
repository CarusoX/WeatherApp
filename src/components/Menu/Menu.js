import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { fetch_data } from '../../helpers/WeatherAPI'
import { SearchBar } from './Search'
import { Tabs } from './Tabs'

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      city: undefined, // { id, coords:{ lat, lon }}
      currentWeather: undefined,
      UV: undefined,
      list: undefined,
    }
  }

  // TODO: Set correct Unit

  setData() {
    // Start loading
    this.setState({ loading: true });
    fetch_data(this.state.city).then((data) => {
      if (!data) return;
      this.setState({
        currentWeather: data['results'][0],
        UV: data['results'][2],
        loading: false,
      });
    })
  }

  setCity(city) {
    this.setState({ city }, () => this.setData());
  }

  render() {

    return (

      <Container fluid>

        <SearchBar setCity={(city) => this.setCity(city)} />

        <Divider section horizontal>City: {(this.state.city) ? this.state.city.city_name : ""}</Divider>

        <Tabs
          show={this.state.city !== undefined}
          currentWeather={this.state.currentWeather}
          UV={this.state.UV}
          unit={this.props.unit}
          loading={this.state.loading}
        />

      </Container >

    );
  }
}

export default Menu;
