import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { SearchBar } from "../Search/index.ts";
import { Tabs } from "../Tabs/index.ts";
import { FetchData } from "../../helpers/index.ts";

class Menu extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      icon: undefined,
      loading: false,
      city: undefined, // { id, coords:{ lat, lon }}
      currentWeather: undefined,
      UV: undefined,
      list: [],
      id: 0,
    }
  }

  setData() {
    this.setState({ loading: true });
    FetchData(this.state.city).then((data) => {
      if (!data) return;
      console.log(data)
      if(typeof(data) == 'number') {
        return this.setState({error: data})
      } 
      this.setState({
        icon: data['results'][0]['weather_icon'],
        currentWeather: data['results'][0],
        list: data['results'][1],
        UV: data['results'][2],
        error: undefined,
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

        <Divider section horizontal>
          City: {(this.state.city) ? this.state.city.city_name : ''}
        </Divider>

        <Tabs
          error={this.state.error}
          show={this.state.city !== undefined}
          currentWeather={this.state.currentWeather}
          UV={this.state.UV}
          list={this.state.list}
          unit={this.props.unit}
          loading={this.state.loading}
        />

      </Container >
    );
  }
}

export default Menu;
