import _ from "lodash";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";
import Flag from "react-world-flags";
import { fetchCities, getCountryName } from "../../helpers/index.ts";
import { Geolocalization } from "./index.ts";

const initialState = { isLoading: false, results: [], value: "" };
const errorState = { isLoading: false, results: [] };

const resultRenderer = ({ title, description, image }) => [
  <div key="content" className="content">
    <Grid textAlign="left">
      <Grid.Column width={3}>
        <Flag code={image.toLowerCase()} height="30" />
      </Grid.Column>
      <Grid.Column width={5}>
        {title && <div className="title">{title}</div>}
        {description && <div className="description">{description}</div>}
      </Grid.Column>
    </Grid>
  </div>
];

export default class SearchBar extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => {
    const { setCity } = this.props;
    this.setState({ value: result.title });
    setCity({
      id: result.key,
      coords: result.coords,
      name: result.title
    });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value }, () => {
      setTimeout(() => {
        if (value.length < 3) return null;

        return fetchCities(value).then(result => {
          if (!result) return this.setState(errorState);

          if (typeof result === "number") {
            const { setError } = this.props;
            setError(result);
            return this.setState(errorState);
          }
          const cities = _.uniqBy(
            result.map(res => ({
              title: res.name,
              description: getCountryName(res.sys.country),
              full: `${res.name} - ${res.sys.country}`,
              image: res.sys.country,
              country: getCountryName(res.sys.country),
              coords: res.coord,
              key: res.id
            })),
            "full"
          );

          return this.setState({
            isLoading: false,
            results: cities
          });
        });
      }, 300);
    });
  };

  handleGeolocalization = coords => {
    const { setCity } = this.props;
    setCity({
      id: -1,
      coords,
      name: "Geolocalizated"
    });
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid container stretched padded="vertically">
        <Grid.Row centered>
          <Geolocalization newCity={geo => this.handleGeolocalization(geo)} />
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 300, {
              leading: true,
              maxWait: 500,
              trailing: true
            })}
            results={results}
            value={value}
            resultRenderer={resultRenderer}
            selectFirstResult
            {...this.props}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  setCity: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
};
