import PropTypes from "prop-types";
import React from "react";
import { Grid, Image, Statistic, Tab } from "semantic-ui-react";
import { getTemp, getIconName, unixToHoursMedium } from "../../../helpers/index.ts";
import { Cell } from "../../Modular/index.ts";

const path1 = "../../../icons/Theme1/";
const path2 = "../../../icons/Theme2/";

const WeatherCard = props => {
  const {
    state,
    iconName,
    temp,
    humidity,
    pressure,
    minTemp,
    maxTemp,
    windSpeed,
    windDir,
    clouds,
    sunrise,
    sunset,
    unit
  } = props;
  const icon = getIconName(iconName);
  return (
    <Tab.Pane attached={false}>
      <Grid columns={3} divided stackable>
        <Grid.Row stretched>
          <Grid.Column stretched>
            <Grid.Row>
              <h3 style={{ fontSize: 25 }}>State</h3>
            </Grid.Row>
            <Grid.Row>
              {icon && (
                <Image
                  src={require(`../../../icons/Theme2/${icon}.png`)}
                  size="medium"
                  verticalAlign="middle"
                />
              )}
            </Grid.Row>
            <Grid.Row>
              <Statistic>
                <Statistic.Label
                  style={{ paddingTop: "40%", fontWeight: "bold" }}
                >
                  {state}
                </Statistic.Label>
              </Statistic>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Cell
              image="039-thermometer.png"
              title="Temperature"
              content={getTemp(temp, unit)}
            />

            <Cell
              image="018-high temperature.png"
              title="Max Temperature"
              content={getTemp(maxTemp, unit)}
            />

            <Cell
              image="022-low temperature.png"
              title="Min Temperature"
              content={getTemp(minTemp, unit)}
            />

            <Cell
              image="004-clouds.png"
              title="Clouds"
              content={clouds.toString() + "%"}
            />

            <Cell
              image="048-wind.png"
              title="Wind Speed"
              content={windSpeed.toString() + " M/s"}
            />
          </Grid.Column>
          <Grid.Column>
            <Cell
              image="012-dawn.png"
              title="Sunrise"
              content={unixToHoursMedium(sunrise) + " Hs"}
            />

            <Cell
              image="037-sunset.png"
              title="Sunset"
              content={unixToHoursMedium(sunset) + " Hs"}
            />

            <Cell
              image="019-humidity.png"
              title="Humidity"
              content={humidity.toString() + "%"}
            />

            <Cell
              image="026-pressure.png"
              title="Preassure"
              content={pressure.toString() + " hPa"}
            />

            <Cell
              image="047-weathercock.png"
              title="Wind Direction"
              content={windDir.toString() + "º"}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  );
};

export default WeatherCard;

WeatherCard.defaultProps = {
  state: "",
  iconName: "",
  temp: 0,
  humidity: 0,
  pressure: 0,
  minTemp: 0,
  maxTemp: 0,
  windSpeed: 0,
  windDir: 0,
  clouds: 0,
  sunrise: 0,
  sunset: 0,
  unit: ""
};

WeatherCard.propTypes = {
  state: PropTypes.string,
  iconName: PropTypes.string,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  windSpeed: PropTypes.number,
  windDir: PropTypes.number,
  clouds: PropTypes.number,
  sunrise: PropTypes.number,
  sunset: PropTypes.number,
  unit: PropTypes.string
};
