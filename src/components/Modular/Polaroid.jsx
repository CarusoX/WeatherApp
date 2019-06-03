import PropTypes from "prop-types";
import React from "react";
import { Divider } from "semantic-ui-react";
import { SmallCell } from "./index.ts";
import { getTemp } from "../../helpers/index.ts";

const bigPolaroid = {
  border: "2px solid gray",
  borderRadius: "5px",
  boxShadow: "0px 0px 27px 13px rgba(196,196,196,0.3)",
  backgroundColor: "white",
  flexGrow: "2",
  alignItems: "stretch",
  width: "75%"
};

const smallPolaroid = {
  border: "2px solid gray",
  borderRadius: "5px",
  boxShadow: "0px 0px 20px 10px rgba(196, 196, 196, 0.7)",
  backgroundColor: "white",
  marginBottom: "10%",
  maxWidth: "17%",
  height: "70%"
};

const bigImage = {
  maxWidth: "80%",
  maxHeight: "80%"
};

const smallImage = {
  marginTop: "10%",
  maxWidth: "80%",
  maxHeight: "80%"
};

const container = {
  padding: "10%"
};

const bigHeader = {
  fontSize: "200%",
  fontWeight: "900",
  marginTop: "0%"
};

const bigText = {
  fontSize: "150%"
};

const smallHeader = {
  fontSize: "130%",
  fontWeight: "900",
  marginTop: "0%"
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
    maxTemp,
    minTemp,
    clouds,
    humidity,
    windSpeed,
    windDir,
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
        
        <SmallCell
          image="039-thermometer.png"
          title="Temperature"
          content={getTemp(temp, unit).toString()}
        />

        <SmallCell
          image="018-high temperature.png"
          title="Max Temperature"
          content={getTemp(maxTemp, unit).toString()}
        />

        <SmallCell
          image="022-low temperature.png"
          title="Min Temperature"
          content={getTemp(minTemp, unit).toString()}
        />

        <SmallCell
          image="004-clouds.png"
          title="Clouds"
          content={clouds.toString()}
          unit="%"
        />

        <SmallCell
          image="048-wind.png"
          title="Wind Speed"
          content={windSpeed.toString()}
          unit="M/s"
        />

        <SmallCell
          image="047-weathercock.png"
          title="Wind Direction"
          content={windDir.toString()}
          unit="º"
        />

        <SmallCell
          image="019-humidity.png"
          title="Humidity"
          content={humidity.toString()}
          unit="%"
        />

        <SmallCell
          image="012-dawn.png"
          title="Sunrise"
          content={sunrise.toString()}
          unit="Hs"
        />

        <SmallCell
          image="037-sunset.png"
          title="Sunset"
          content={sunset.toString()}
          unit="Hs"
        />

        <SmallCell
          image="026-pressure.png"
          title="Preassure"
          content={pressure.toString()}
          unit="hPa"
        />

      </div>
    </div>
  );
};

export const SmallPolaroid = props => {
  const { text, max, min, unit, image } = props;
  return (
    <div 
      style={smallPolaroid}
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
          Max: {max} {unit}
        </p>
        <p style={smallText}>
          Min: {min} {unit}
        </p>
      </div>
    </div>
  );
};

BigPolaroid.defaultProps = {
  image: "",
  text: "",
  state: "",
  unit: 0,
  temp: 0,
  maxTemp: 0,
  minTemp: 0,
  clouds: 0,
  humidity: 0,
  windSpeed: 0,
  windDir: 0,
  sunrise: 0,
  sunset: 0,
  pressure: 0,
};

BigPolaroid.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  state: PropTypes.string,
  unit: PropTypes.string,
  temp: PropTypes.number,
  maxTemp: PropTypes.number,
  minTemp: PropTypes.number,
  clouds: PropTypes.number,
  humidity: PropTypes.number,
  windSpeed: PropTypes.number,
  windDir: PropTypes.number,
  sunrise: PropTypes.number,
  sunset: PropTypes.number,
  pressure: PropTypes.number,
};

SmallPolaroid.defaultProps = {
  text: "",
  max: 0,
  min: 0,
  unit: "",
  image: ""
};

SmallPolaroid.propTypes = {
  text: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  unit: PropTypes.string,
  image: PropTypes.string
};

// {props.texts.map(txt => (
//   <p style={text}>{txt}</p>
// ))}
