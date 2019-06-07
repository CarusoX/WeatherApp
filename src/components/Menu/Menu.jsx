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
      error: 0,
      loading: false,
      city: undefined,
      current: undefined,
      forecast: undefined,
      uv: undefined
    };
  }

  setData() {
    const { city } = this.state;
    this.setState({ loading: true });

    return fetchData(city.coords).then(data => {
      if (!data) return null;
      if (typeof data === "number") {
        return this.setState({ error: data });
      }
      city.city_name = data.results[3].name;
      return this.setState({
        current: data.results[0],
        forecast: data.results[1],
        uv: data.results[2],
        error: 0,
        loading: false
      });
    });
  }

  setCity(newCity) {
    const { city } = this.state;
    if (!city || newCity.id !== city.id)
      this.setState({ city: newCity }, () => this.setData());
  }

  setError(err) {
    this.setState({ error: err });
  }

  render() {
    const { unit } = this.props;
    const { city, error, loading, current, uv, forecast } = this.state;
    return (
      <Container fluid>
        <SearchBar
          setCity={newCity => this.setCity(newCity)}
          setError={err => this.setError(err)}
        />
        <Divider section horizontal>
          City:
          {city ? ` ${city.city_name}` : ""}
        </Divider>
        <Tabs
          error={error}
          show={city !== undefined}
          loading={loading}
          unit={unit}
          current={current}
          forecast={forecast}
          uv={uv}
        />
      </Container>
    );
  }
}

Menu.propTypes = {
  unit: PropTypes.string.isRequired
};

export default Menu;
