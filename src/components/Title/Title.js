import PropTypes from "prop-types";
import React from "react";
import { Header, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export const Title = props => {
  const { size, image, title } = props;
  return (
    <Header as={size} icon textAlign="center">
      <Image src={require("../../icons/Theme2/" + image)} />
      <Header.Content>{title}</Header.Content>
    </Header>
  );
};

Title.propTypes = {
  size: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
