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
    setCity({
      id: result.key,
      coords: result.coords,
      city_name: result.name
    });
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

          const cities = result.map(res => ({
            title: `${res.name} - ${getCountryName(res.sys.country)}`,
            description: `(Lat, Lon): (${res.coord.lat}, ${res.coord.lon})`,
            name: res.name,
            country: getCountryName(res.sys.country),
            coords: res.coord,
            key: res.id
          }));
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
          {/* <Geolocalization /> */}
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
