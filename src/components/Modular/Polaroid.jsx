import PropTypes from "prop-types";
import React from "react";
import { Divider, Segment } from "semantic-ui-react";
import { SmallCell } from "./index.ts";
import { getTemp, unixToHours } from "../../helpers/index.ts";

const bigPolaroid = {
  border: "2px solid gray",
  borderRadius: "5px",
  boxShadow: "0px 0px 27px 13px rgba(196,196,196,0.7)",
  backgroundColor: "white",
  flexGrow: "2",
  alignItems: "stretch",
  width: "100%"
};

const smallPolaroid = {
  cursor: "pointer",
  border: "2px solid gray",
  borderRadius: "5px",
  boxShadow: "0px 0px 20px 10px rgba(196, 196, 196, 0.7)",
  backgroundColor: "white",
  maxWidth: "17%",
  height: "50%"
};

const bigImage = {
  marginTop: "3%",
  maxWidth: "80%",
  maxHeight: "80%"
};

const smallImage = {
  marginTop: "10%",
  maxWidth: "80%",
  maxHeight: "80%"
};

const container = {
  padding: "0%"
};

const bigHeader = {
  fontSize: "200%",
  fontWeight: "900",
  marginTop: "0%",
  marginBottom: "0%"
};

const bigText = {
  fontSize: "150%",
  marginTop: "0%"
};

const smallHeader = {
  fontSize: "130%",
  fontWeight: "900",
  marginTop: "5%"
};

const smallText = {
  fontSize: "100%",
  marginTop: "0%"
};

export const BigPolaroid = props => {
  const {
    image,
    text,
    state,
    unit,
    temp,
    maxtemp,
    mintemp,
    clouds,
    humidity,
    windspeed,
    winddir,
    sunrise,
    sunset,
    pressure
  } = props;

  return (
    <div style={bigPolaroid}>
      <img
        alt="img"
        style={bigImage}
        src={require(`../../icons/Theme2/${image}`)}
      />
      <Divider />
      <div style={container}>
        <p style={bigHeader}>{text}</p>
        <p style={bigText}>{state}</p>

        <Segment.Group vertical>
          <Segment.Group horizontal>
            <SmallCell
              image="039-thermometer.png"
              title="Temperature"
              content={getTemp(temp, unit).toString()}
            />
            <SmallCell
              image="004-clouds.png"
              title="Clouds"
              content={clouds.toString()}
              unit="%"
            />
          </Segment.Group>

          <Segment.Group horizontal>
            <SmallCell
              image="018-high temperature.png"
              title="Max Temperature"
              content={getTemp(maxtemp, unit).toString()}
            />
            <SmallCell
              image="022-low temperature.png"
              title="Min Temperature"
              content={getTemp(mintemp, unit).toString()}
            />
          </Segment.Group>

          <Segment.Group horizontal>
            <SmallCell
              image="048-wind.png"
              title="Wind Speed"
              content={windspeed.toString()}
              unit="M/s"
            />
            <SmallCell
              image="047-weathercock.png"
              title="Wind Direction"
              content={winddir.toString()}
              unit="º"
            />
          </Segment.Group>

          <Segment.Group horizontal>
            <SmallCell
              image="012-dawn.png"
              title="Sunrise"
              content={unixToHours(sunrise)}
              unit="Hs"
            />
            <SmallCell
              image="037-sunset.png"
              title="Sunset"
              content={unixToHours(sunset)}
              unit="Hs"
            />
          </Segment.Group>

          <Segment.Group horizontal>
            <SmallCell
              image="019-humidity.png"
              title="Humidity"
              content={humidity.toString()}
              unit="%"
            />
            <SmallCell
              image="026-pressure.png"
              title="Preassure"
              content={pressure.toString()}
              unit="hPa"
            />
          </Segment.Group>
        </Segment.Group>
      </div>
    </div>
  );
};

export const SmallPolaroid = props => {
  const { update, text, index, max, min, unit, image } = props;
  return (
    <div
      style={smallPolaroid}
      onClick={() => update(index)}
      role="presentation"
    >
      <img
        alt="img"
        style={smallImage}
        src={require(`../../icons/Theme2/${image}`)}
      />
      <Divider style={{ marginBottom: "0%" }} />
      <div style={container}>
        <p style={smallHeader}>{text}</p>
        <p style={smallText}>
          Max:
          {max}
          {unit}
        </p>
        <p style={smallText}>
          Min:
          {min}
          {unit}
        </p>
      </div>
    </div>
  );
};

BigPolaroid.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  maxtemp: PropTypes.number.isRequired,
  mintemp: PropTypes.number.isRequired,
  clouds: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windspeed: PropTypes.number.isRequired,
  winddir: PropTypes.number.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  pressure: PropTypes.number.isRequired
};

SmallPolaroid.propTypes = {
  update: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

// {props.texts.map(txt => (
//   <p style={text}>{txt}</p>
// ))}
