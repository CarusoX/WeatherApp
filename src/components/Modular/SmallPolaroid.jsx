import PropTypes from "prop-types";
import React, { Component } from "react";
import { Divider, Transition } from "semantic-ui-react";
import { getTemp } from "../../helpers/index.ts";

const smallPolaroid = {
  cursor: "pointer",
  border: "2px solid gray",
  borderRadius: "5px",
  boxShadow: "0px 0px 20px 10px rgba(196, 196, 196, 0.7)",
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  maxWidth: "141px",
  maxHeight: "260px"
};

const smallImage = {
  marginTop: "10%",
  maxWidth: "80%",
  maxHeight: "80%"
};

const container = {
  padding: "0%"
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

export default class SmallPolaroid extends Component {
  state = { animation: "pulse", duration: 300, visible: true };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  render() {
    const { update, text, index, max, min, unit, image, theme } = this.props;
    const { animation, duration, visible } = this.state;
    return (
      <Transition animation={animation} duration={duration} visible={visible}>
        <div
          style={smallPolaroid}
          onClick={() => {
            this.toggleVisibility();
            update(index);
          }}
          role="presentation"
        >
          <img
            alt="img"
            style={smallImage}
            src={require(`../../icons/Theme${theme}/${image}`)}
          />
          <Divider style={{ marginBottom: "0%" }} />
          <div style={container}>
            <p style={smallHeader}>{text}</p>
            <p style={smallText}>{`Max: ${getTemp(max, unit)}`}</p>
            <p style={smallText}>{`Min: ${getTemp(min, unit)}`}</p>
          </div>
        </div>
      </Transition>
    );
  }
}

SmallPolaroid.propTypes = {
  update: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  theme: PropTypes.number.isRequired
};
