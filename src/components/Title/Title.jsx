import PropTypes from "prop-types";
import React from "react";
import { Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const icon = require("../../icons/Theme2/045-weather.png");

const Title = props => {
  const { size, title } = props;
  return (
    <Header as={size} icon textAlign="center">
      <Image src={icon} />
      <Header.Content>{title}</Header.Content>
    </Header>
  );
};

export default Title;

Title.propTypes = {
  size: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
