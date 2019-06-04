import _ from "lodash";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";
import { fetchCities, getCountryName } from "../../helpers/index.ts";

const initialState = { isLoading: false, results: [], value: "" };
const errorState = { isLoading: false, results: [] };

const resultRenderer = ({ title, description }) => [
  <div key="content" className="content">
    {title && <div className="title">{title}</div>}
    {description && <div className="description">{description}</div>}
  </div>
];

export default class SearchExampleStandard extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => {
    const { setCity } = this.props;
    this.setState({ value: result.name });
    setCity(result);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value }, () => {
      setTimeout(() => {
        if (value.length < 1) return this.setState(initialState);

        return fetchCities(value).then(result => {
          if (!result) return this.setState(errorState);

          if (typeof result === "number") {
            const { setError } = this.props;
            setError(result);
            return this.setState(errorState);
          }

          const cities = result.map(city => {
            const newCity = Object.assign({}, city);
            newCity.title = `${city.name} - ${getCountryName(city.country)}`;
            newCity.description = `(Lat, Lon): (${city.coord.lat}, ${
              city.coord.lon
              })`;
            newCity.country = getCountryName(city.country);
            return newCity;
          });
          return this.setState({
            isLoading: false,
            results: cities
          });
        });
      }, 300);
    });
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid container stretched padded="vertically">
        <Grid.Column>
          <Search
            fluid
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 300, {
              leading: true
            })}
            results={results}
            value={value}
            resultRenderer={resultRenderer}
            selectFirstResult
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

SearchExampleStandard.propTypes = {
  setCity: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired
};
