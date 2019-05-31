import PropTypes from "prop-types";
import React from "react";
import { Segment, Grid, Image, Statistic } from "semantic-ui-react";
import { getTemp, getIconName, unixToHours } from "../../../helpers/index.ts";
import { Cell } from "../../Modular/index.ts";

const path1 = "../../../icons/Theme1/";
const path2 = "../../../icons/Theme2/";

const WeatherCard = props => {
  const {
    state,
    icon,
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
  return (
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column stretched>
          <Segment raised stretched>
            <div>
              <h3 style={{ fontSize: 25 }}>State</h3>
              {icon && (
                <Image
                  src={require(`../../../icons/Theme2/${getIconName(
                    icon
                  )}.png`)}
                  size="medium"
                  verticalAlign="middle"
                />
              )}
            </div>
            <Statistic>
              <Statistic.Label
                style={{ paddingTop: "40%", fontWeight: "bold" }}
              >
                {state}
              </Statistic.Label>
            </Statistic>
          </Segment>
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
            content={clouds}
            unit="%"
          />

          <Cell
            image="048-wind.png"
            title="Wind Speed"
            content={windSpeed}
            unit="M/s"
          />
        </Grid.Column>
        <Grid.Column>
          <Cell
            image="012-dawn.png"
            title="Sunrise"
            content={unixToHours(sunrise)}
            unit="Hs"
          />

          <Cell
            image="037-sunset.png"
            title="Sunset"
            content={unixToHours(sunset)}
            unit="Hs"
          />

          <Cell
            image="019-humidity.png"
            title="Humidity"
            content={humidity}
            unit="%"
          />

          <Cell
            image="026-pressure.png"
            title="Preassure"
            content={pressure}
            unit="hPa"
          />

          <Cell
            image="047-weathercock.png"
            title="Wind Direction"
            content={windDir}
            unit="º"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default WeatherCard;

WeatherCard.propTypes = {
  state: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDir: PropTypes.string.isRequired,
  clouds: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired
};
