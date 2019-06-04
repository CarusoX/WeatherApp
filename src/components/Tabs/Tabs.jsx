import PropTypes from "prop-types";
import React from "react";
import { Tab } from "semantic-ui-react";
import { DefaultTab, ErrorTab } from "../Modular/index.ts";
import WeatherCard from "./CurrentWeather/WeatherCard";
import ForecastCard from "./ForecastWeather/ForecastCard";
import UVTab from "./UVWeather/UVTab";

const defaultPanes = () => [
  { menuItem: "Current Weather", render: () => <DefaultTab /> },
  { menuItem: "Week Forecast", render: () => <DefaultTab /> },
  { menuItem: "UV Rays", render: () => <DefaultTab /> }
];

const errorPanes = error => [
  { menuItem: "Current Weather", render: () => <ErrorTab error={error} /> },
  { menuItem: "Week Forecast", render: () => <ErrorTab error={error} /> },
  { menuItem: "UV Rays", render: () => <ErrorTab error={error} /> }
];

const dataPanes = (current, forecast, uv, unit) => [
  current && {
    menuItem: "Current Weather",
    render: () => <WeatherCard {...current} unit={unit} />
  },
  !current && {
    menuItem: "Current Weather",
    render: () => <Tab.pane loading />
  },
  forecast && {
    menuItem: "Week Forecast",
    render: () => <ForecastCard {...forecast} {...uv} unit={unit} />
  },
  !forecast && {
    menuItem: "Week Forecast",
    render: () => <Tab.pane loading />
  },
  uv && {
    menuItem: "UV Rays",
    render: () => <UVTab {...uv} />
  },
  !uv && { menuItem: "UV Rays", render: () => <Tab.pane loading /> }
];

const Tabs = props => {
  const { error, show, unit, current, forecast, uv } = props;
  if (error > 0) {
    return (
      <Tab
        menu={{ pointing: true, style: { justifyContent: "center" } }}
        panes={errorPanes(error)}
      />
    );
  }
  if (!show) {
    return (
      <Tab
        menu={{ pointing: true, style: { justifyContent: "center" } }}
        panes={defaultPanes()}
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

Tabs.defaultProps = {
  current: {},
  forecast: {},
  uv: {}
};

Tabs.propTypes = {
  error: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  unit: PropTypes.string.isRequired,
  current: PropTypes.shape({
    state: PropTypes.string,
    iconname: PropTypes.string,
    temp: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    mintemp: PropTypes.number,
    maxtemp: PropTypes.number,
    windspeed: PropTypes.number,
    winddir: PropTypes.number,
    clouds: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string
  }),
  forecast: PropTypes.shape({
    detaileddays: PropTypes.array,
    days: PropTypes.array
  }),
  uv: PropTypes.shape({
    index: PropTypes.number,
    forecast: PropTypes.array,
    history: PropTypes.array
  })
};
