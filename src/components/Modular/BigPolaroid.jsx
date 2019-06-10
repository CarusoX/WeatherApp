import PropTypes from "prop-types";
import React, { Component } from "react";
import { Divider, Modal, Segment, Transition } from "semantic-ui-react";
import { SmallCell } from "./index.ts";
import { getTemp, getIconName, getWindDir } from "../../helpers/index.ts";

const bigPolaroid = {
  border: "2px solid gray",
  borderRadius: "5px",
  boxShadow: "0px 0px 27px 13px rgba(196, 196, 196, 0.7)",
  backgroundColor: "white",
  flexGrow: "2",
  alignItems: "stretch",
  width: "100%",
  maxWidth: "400px"
};

const bigImage = {
  marginTop: "3%",
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

const miniCell = theme => {
  return (
    <div>
      <SmallCell image="plus.png" title="Show more!" theme={theme} />
    </div>
  );
};

export default class BigPolaroid extends Component {
  state = { animation: "pulse", duration: 1000, visible: true };

  componentWillReceiveProps() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  render() {
    const {
      image,
      text,
      state,
      unit,
      temp,
      maxTemp,
      minTemp,
      clouds,
      windSpeed,
      windDir,
      pressure,
      theme
    } = this.props;
    const { animation, duration, visible } = this.state;
    return (
      <Transition animation={animation} duration={duration} visible={visible}>
        <div style={bigPolaroid}>
          <img
            alt="img"
            style={bigImage}
            src={`/icons/Theme${theme}/${getIconName(image)}`}
          />
          <Divider />
          <div style={container}>
            <p style={bigHeader}>{text}</p>
            <p style={bigText}>{state}</p>

            <Segment.Group>
              <SmallCell
                image="039-thermometer.png"
                title="Average Temperature"
                content={getTemp(temp, unit)}
                theme={theme}
              />
              <SmallCell
                image="018-high temperature.png"
                title="Max Temperature"
                content={getTemp(maxTemp, unit)}
                theme={theme}
              />
              <SmallCell
                image="022-low temperature.png"
                title="Min Temperature"
                content={getTemp(minTemp, unit)}
                theme={theme}
              />
              <Divider />
              <Modal closeIcon trigger={miniCell(theme)}>
                <Modal.Header>{`Know more about ${text}`}</Modal.Header>
                <Modal.Content scrolling>
                  <Segment.Group raised horizontal>
                    <SmallCell
                      image="048-wind.png"
                      title="Wind Speed"
                      content={`${windSpeed.toString()} M/s`}
                      style={{ color: "blue" }}
                      theme={theme}
                    />
                    <SmallCell
                      image="047-weathercock.png"
                      title="Wind Direction"
                      content={getWindDir(windDir)}
                      style={{ color: "blue" }}
                      theme={theme}
                    />
                  </Segment.Group>
                  <Segment.Group raised horizontal>
                    <SmallCell
                      image="004-clouds.png"
                      title="Clouds"
                      content={`${clouds.toString()}%`}
                      style={{ color: "blue" }}
                      theme={theme}
                    />
                    <SmallCell
                      image="026-pressure.png"
                      title="Preassure"
                      content={`${pressure.toString()} hPa`}
                      style={{ color: "blue" }}
                      theme={theme}
                    />
                  </Segment.Group>
                </Modal.Content>
              </Modal>
            </Segment.Group>
          </div>
        </div>
      </Transition>
    );
  }
}

BigPolaroid.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  clouds: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDir: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  theme: PropTypes.number.isRequired
};
