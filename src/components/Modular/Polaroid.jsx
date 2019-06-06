import PropTypes from "prop-types";
import React from "react";
import { Divider, Modal, Segment } from "semantic-ui-react";
import { SmallCell } from "./index.ts";
import { getTemp, unixToHoursMedium } from "../../helpers/index.ts";

const bigPolaroid = {
  border: "2px solid gray",
  borderRadius: "5px",
  boxShadow: "0px 0px 27px 13px rgba(196, 196, 196, 0.7)",
  backgroundColor: "white",
  flexGrow: "2",
  alignItems: "stretch",
  width: "75%"
};

const smallPolaroid = {
  cursor: "pointer",
  border: "2px solid gray",
  borderRadius: "5px",
  boxShadow: "0px 0px 20px 10px rgba(196, 196, 196, 0.7)",
  backgroundColor: "white",
  maxWidth: "17%",
  height: "70%"
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

        <Segment.Group mini vertical>
          <SmallCell
            image="039-thermometer.png"
            title="Average Temperature"
            content={getTemp(temp, unit)}
          />
          <SmallCell
            image="018-high temperature.png"
            title="Max Temperature"
            content={getTemp(maxTemp, unit)}
          />
          <SmallCell
            image="022-low temperature.png"
            title="Min Temperature"
            content={getTemp(minTemp, unit)}
          />
          <Modal
            closeIcon
            trigger={
              <div><SmallCell image="plus.png" title="Show more!" /></div>
            }
          >
            <Modal.Header>{`Know more about ${text}`}</Modal.Header>
            <Modal.Content scrolling>
              <Segment.Group raised horizontal>
                <SmallCell
                  image="039-thermometer.png"
                  title="Temperature"
                  content={getTemp(temp, unit)}
                  style={{
                    inverted: "inverted",
                    color: "blue",
                    raised: "true",
                    loading: "true"
                  }}
                />
                <SmallCell
                  image="004-clouds.png"
                  title="Clouds"
                  content={`${clouds.toString()}%`}
                  style={{ color: "blue" }}
                />
              </Segment.Group>
              <Segment.Group raised horizontal>
                <SmallCell
                  image="018-high temperature.png"
                  title="Max Temperature"
                  content={getTemp(maxTemp, unit)}
                  style={{ color: "blue" }}
                />
                <SmallCell
                  image="022-low temperature.png"
                  title="Min Temperature"
                  content={getTemp(minTemp, unit)}
                  style={{ color: "blue" }}
                />
              </Segment.Group>
              <Segment.Group raised horizontal>
                <SmallCell
                  image="048-wind.png"
                  title="Wind Speed"
                  content={`${windSpeed.toString()} M/s`}
                  style={{ color: "blue" }}
                />
                <SmallCell
                  image="047-weathercock.png"
                  title="Wind Direction"
                  content={`${windDir.toString()}º`}
                  style={{ color: "blue" }}
                />
              </Segment.Group>

              <Segment.Group raised horizontal>
                <SmallCell
                  image="012-dawn.png"
                  title="Sunrise"
                  content={`${unixToHoursMedium(sunrise)} Hs`}
                  style={{ color: "blue" }}
                />
                <SmallCell
                  image="037-sunset.png"
                  title="Sunset"
                  content={`${unixToHoursMedium(sunset)} Hs`}
                  style={{ color: "blue" }}
                />
              </Segment.Group>

              <Segment.Group raised horizontal>
                <SmallCell
                  image="019-humidity.png"
                  title="Humidity"
                  content={`${humidity.toString()}%`}
                  style={{ color: "blue" }}
                />
                <SmallCell
                  image="026-pressure.png"
                  title="Preassure"
                  content={`${pressure.toString()}hPa`}
                  style={{ color: "blue" }}
                />
              </Segment.Group>
            </Modal.Content>
          </Modal>
        </Segment.Group>
      </div>
    </div>
  );
};

export const SmallPolaroid = props => {
  const { update, text, index, max, min, unit, image } = props;
  return (
    <div style={smallPolaroid} onClick={() => update(index)}>
      <img
        alt="img"
        style={smallImage}
        src={require(`../../icons/Theme2/${image}`)}
      />
      <Divider style={{ marginBottom: "0%" }} />
      <div style={container}>
        <p style={smallHeader}>{text}</p>
        <p style={smallText}>{`Max: ${getTemp(max, unit)}`}</p>
        <p style={smallText}>{`Min: ${getTemp(min, unit)}`}</p>
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
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  clouds: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDir: PropTypes.number.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
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
