import PropTypes from "prop-types";
import React from "react";
import { Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const image1 = require("../../icons/Theme1/045-weather.png");
const image2 = require("../../icons/Theme2/045-weather.png");

const Title = props => {
  const { size, title, theme } = props;
  return (
    <Header as={size} icon textAlign="center">
      <Image src={theme === 1 ? image1 : image2} />
      <Header.Content>{title}</Header.Content>
    </Header>
  );
};

export default Title;

Title.propTypes = {
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.number.isRequired
};
