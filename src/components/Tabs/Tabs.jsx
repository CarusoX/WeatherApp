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

const errorPanes = mode => [
  { menuItem: "Current Weather", render: () => <ErrorTab mode={mode} /> },
  { menuItem: "Week Forecast", render: () => <ErrorTab mode={mode} /> },
  { menuItem: "UV Rays", render: () => <ErrorTab mode={mode} /> }
];

const Tabs = props => {
  const { error, show, loading, unit, currentWeather, list, UV } = props;
  if (typeof error === "number") {
    // Either 1, 2, 3, or 4
    return (
      <Tab
        menu={{ pointing: true, style: { justifyContent: "center" } }}
        panes={errorPanes()}
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

Tabs.defaultProps = {
  error: false,
  currentWeather: {},
  list: {},
  UV: {}
};

const weather_propTypes = {
  weather_state: PropTypes.string,
  weather_icon: PropTypes.string,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  min_temp: PropTypes.number,
  max_temp: PropTypes.number,
  wind_speed: PropTypes.number,
  wind_dir: PropTypes.string,
  clouds: PropTypes.string,
  sunrise: PropTypes.string,
  sunset: PropTypes.string
};

Tabs.propTypes = {
  error: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  unit: PropTypes.string.isRequired,
  currentWeather: PropTypes.shape({
    weather_state: PropTypes.string,
    weather_icon: PropTypes.string,
    temp: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    min_temp: PropTypes.number,
    max_temp: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_dir: PropTypes.string,
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

export default Tabs;
