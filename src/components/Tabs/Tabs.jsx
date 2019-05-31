import PropTypes from "prop-types";
import React from "react";
import { Tab } from "semantic-ui-react";
import { DefaultTab, ErrorTab } from "../Modular/index.ts";
import WeatherCard from "./CurrentWeather/WeatherCard";
import ForecastCard from "./ForecastWeather/ForecastCard";
import UVTab from "./UVWeather/UVTab";

const defaultPanes = mode => [
  { menuItem: "Current Weather", render: () => <DefaultTab mode={mode} /> },
  { menuItem: "Week Forecast", render: () => <DefaultTab mode={mode} /> },
  { menuItem: "UV Rays", render: () => <DefaultTab mode={mode} /> }
];

const errorPanes = error => [
  { menuItem: "Current Weather", render: () => <ErrorTab error={error} /> },
  { menuItem: "Week Forecast", render: () => <ErrorTab error={error} /> },
  { menuItem: "UV Rays", render: () => <ErrorTab error={error} /> }
];

const Tabs = props => {
  const { error, show, loading, unit, currentWeather, list, UV } = props;
  if (error > 0) {
    return (
      <Tab
        menu={{ pointing: true, style: { justifyContent: "center" } }}
        panes={errorPanes(error, false)}
      />
    );
  }
  if (show === false) {
    return (
      <Tab
        menu={{ pointing: true, style: { justifyContent: "center" } }}
        panes={defaultPanes(false)}
      />
    );
  }
  if (loading) {
    return (
      <Tab
        menu={{ pointing: true, style: { justifyContent: "center" } }}
        panes={defaultPanes(true)}
      />
    );
  }
  return (
    <Tab
      menu={{ pointing: true, style: { justifyContent: "center" } }}
      panes={[
        {
          menuItem: "Current Weather",
          render: () => (
            <Tab.Pane attached={false}>
              <WeatherCard unit={unit} {...currentWeather} />
            </Tab.Pane>
          )
        },
        {
          menuItem: "Week Forecast",
          render: () => (
            <Tab.Pane attached={false}>
              <ForecastCard list={list} />
            </Tab.Pane>
          )
        },
        {
          menuItem: "UV Rays",
          render: () => (
            <Tab.Pane attached={false}>
              <UVTab UV={UV} />
            </Tab.Pane>
          )
        }
      ]}
    />
  );
};

export default Tabs;

Tabs.defaultProps = {
  currentWeather: {},
  list: {},
  UV: {}
};

Tabs.propTypes = {
  error: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  unit: PropTypes.string.isRequired,
  currentWeather: PropTypes.shape({
    state: PropTypes.string,
    icon: PropTypes.string,
    temp: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    minTemp: PropTypes.number,
    maxTemp: PropTypes.number,
    windSpeed: PropTypes.number,
    windDir: PropTypes.string,
    clouds: PropTypes.string,
    sunrise: PropTypes.string,
    sunset: PropTypes.string
  }),
  list: PropTypes.shape({
    detailedDays: PropTypes.array,
    days: PropTypes.array
  }),
  UV: PropTypes.shape({
    index: PropTypes.number,
    forecast: PropTypes.array,
    history: PropTypes.array
  })
};
