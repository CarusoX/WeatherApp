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
      city: undefined,
      current: undefined,
      forecast: undefined,
      uv: undefined
    };
  }

  setData() {
    const { city } = this.state;

    return fetchData(city).then(data => {
      if (!data) return null;
      if (typeof data === "number") {
        return this.setState({ error: data });
      }
      return this.setState({
        forecast: data.results[0],
        uv: data.results[1],
        error: 0
      });
    });
  }

  setCity(newCity) {
    const result = { ...newCity };
    const { city } = this.state;
    if (!city || newCity.key !== city.id) {
      this.setState(
        {
          city: { id: result.key, name: result.name, coords: result.coord },
          current: result,
          forecast: undefined,
          uv: undefined
        },
        () => this.setData()
      );
    }
  }

  setError(err) {
    this.setState({ error: err });
  }

  render() {
    const { unit } = this.props;
    const { city, error, current, uv, forecast } = this.state;
    return (
      <Container fluid>
        <SearchBar
          setCity={newCity => this.setCity(newCity)}
          setError={err => this.setError(err)}
        />
        <Divider section horizontal>
          City:
          {city ? city.name : ""}
        </Divider>
        <Tabs
          error={error}
          show={city !== undefined}
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
