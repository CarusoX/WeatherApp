import PropTypes from "prop-types";
import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { SearchBar } from "../Search/index.ts";
import { Tabs } from "../Tabs/index.ts";
import { fetchData } from "../../helpers/index.ts";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      loading: false,
      city: undefined, // { id, coords:{ lat, lon }}
      currentWeather: undefined,
      UV: undefined,
      list: undefined
    };
  }

  setData() {
    const { city } = this.state;
    this.setState({ loading: true });

    fetchData(city).then(data => {
      if (!data) return null;
      if (typeof data === "number") {
        return this.setState({ error: data });
      }
      return this.setState({
        currentWeather: data.results[0],
        list: data.results[1],
        UV: data.results[2],
        error: undefined,
        loading: false
      });
    });
  }

  setCity(city) {
    this.setState({ city }, () => this.setData());
  }

  render() {
    const { unit } = this.props;
    const { city, error, currentWeather, UV, list, loading } = this.state;
    return (
      <Container fluid>
        <SearchBar setCity={newCity => this.setCity(newCity)} />

        <Divider section horizontal>
          City:
          {city ? city.city_name : ""}
        </Divider>

        <Tabs
          error={error}
          show={city !== undefined}
          currentWeather={currentWeather}
          UV={UV}
          list={list}
          unit={unit}
          loading={loading}
        />
      </Container>
    );
  }
}

Menu.propTypes = {
  unit: PropTypes.string.isRequired
};

export default Menu;
