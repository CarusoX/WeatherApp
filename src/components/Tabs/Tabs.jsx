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

const dataPanes = (current, forecast, uv, unit) => [
  {
    menuItem: "Current Weather",
    render: () => {
      if (current) return <WeatherCard {...current} unit={unit} />;
      return <Tab.Pane loading />;
    }
  },
  {
    menuItem: "Week Forecast",
    render: () => {
      if (forecast) return <ForecastCard {...forecast} unit={unit} />;
      return <Tab.Pane loading />;
    }
  },
  {
    menuItem: "UV Rays",
    render: () => {
      if (uv) return <UVTab {...uv} />;
      return <Tab.Pane loading />;
    }
  }
];

const Tabs = props => {
  const { error, show, loading, unit, current, forecast, uv } = props;
  if (error > 0) {
    return (
      <Tab
        menu={{ pointing: true, style: { justifyContent: "center" } }}
        panes={errorPanes(error, false)}
      />
    );
  }
  if (!show) {
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
      panes={dataPanes(current, forecast, uv, unit)}
    />
  );
};

export default Tabs;

Tabs.propTypes = {
  error: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  unit: PropTypes.string.isRequired,
  current: PropTypes.shape({
    state: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    windDir: PropTypes.number.isRequired,
    clouds: PropTypes.number.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired
  }).isRequired,
  forecast: PropTypes.shape({
    detailedDays: PropTypes.array.isRequired,
    days: PropTypes.array.isRequired
  }).isRequired,
  uv: PropTypes.shape({
    index: PropTypes.number.isRequired,
    forecast: PropTypes.array.isRequired,
    history: PropTypes.array.isRequired
  }).isRequired
};
