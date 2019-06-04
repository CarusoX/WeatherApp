import PropTypes from "prop-types";
import React from "react";
import { Grid, Image, Statistic, Tab } from "semantic-ui-react";
import { getTemp, getIconName, unixToHours } from "../../../helpers/index.ts";
import { Cell } from "../../Modular/index.ts";

const path1 = "../../../icons/Theme1/";
const path2 = "../../../icons/Theme2/";

const WeatherCard = props => {
  const {
    state,
    iconname,
    temp,
    humidity,
    pressure,
    mintemp,
    maxtemp,
    windspeed,
    winddir,
    clouds,
    sunrise,
    sunset,
    unit
  } = props;
  const icon = getIconName(iconname);
  return (
    <Tab.Pane attached={false} loading={!temp}>
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
              content={getTemp(temp, unit).toString()}
            />

            <Cell
              image="018-high temperature.png"
              title="Max Temperature"
              content={getTemp(maxtemp, unit).toString()}
            />

            <Cell
              image="022-low temperature.png"
              title="Min Temperature"
              content={getTemp(mintemp, unit).toString()}
            />

            <Cell
              image="004-clouds.png"
              title="Clouds"
              content={clouds.toString()}
              unit="%"
            />

            <Cell
              image="048-wind.png"
              title="Wind Speed"
              content={windspeed.toString()}
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
              content={humidity.toString()}
              unit="%"
            />

            <Cell
              image="026-pressure.png"
              title="Preassure"
              content={pressure.toString()}
              unit="hPa"
            />

            <Cell
              image="047-weathercock.png"
              title="Wind Direction"
              content={winddir.toString()}
              unit="º"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  );
};

export default WeatherCard;

WeatherCard.defaultProps = {
  sunrise: "",
  sunset: ""
}

WeatherCard.propTypes = {
  state: PropTypes.string.isRequired,
  iconname: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  mintemp: PropTypes.number.isRequired,
  maxtemp: PropTypes.number.isRequired,
  windspeed: PropTypes.number.isRequired,
  winddir: PropTypes.number.isRequired,
  clouds: PropTypes.number.isRequired,
  sunrise: PropTypes.string,
  sunset: PropTypes.string,
  unit: PropTypes.string.isRequired
};
