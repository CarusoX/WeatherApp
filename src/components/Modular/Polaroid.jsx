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
  const { clouds, windSpeed, image, text } = props;
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
        {/* <SmallCell
        image="039-thermometer.png"
        title="Temperature"
        content={getTemp(this.props.temp, this.props.unit).toString()}
      />

      <SmallCell
        image="018-high temperature.png"
        title="Max Temperature"
        content={getTemp(this.props.maxTemp, this.props.unit).toString()}
      />

      <SmallCell
        image="022-low temperature.png"
        title="Min Temperature"
        content={getTemp(this.props.minTemp, this.props.unit).toString()}
      /> */}

        <SmallCell
          style={{ width: "5px" }}
          image="004-clouds.png"
          title="Clouds"
          content={clouds.toString()}
          unit="%"
        />

        <SmallCell
          style={{ width: "5px" }}
          image="048-wind.png"
          title="Wind Speed"
          content={windSpeed.toString()}
          unit="M/s"
        />
      </div>
    </div>
  );
};
export const SmallPolaroid = props => {
  const { text, max, min, unit, image } = props;
  return (
    <div style={smallPolaroid}>
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

BigPolaroid.defaultProps = {
  clouds: 0,
  windSpeed: 0,
  image: "",
  text: ""
};

BigPolaroid.propTypes = {
  clouds: PropTypes.number,
  windSpeed: PropTypes.number,
  image: PropTypes.string,
  text: PropTypes.string
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
