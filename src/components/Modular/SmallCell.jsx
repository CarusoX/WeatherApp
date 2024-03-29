import PropTypes from "prop-types";
import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";

const SmallCell = props => {
  const { image, title, content, style, theme } = props;
  return (
    <Segment vertical {...style}>
      <Image src={`/icons/Theme${theme}/${image}`} centered size="mini" />
      <Header>{title}</Header>
      {content}
    </Segment>
  );
};

SmallCell.defaultProps = {
  content: "",
  style: {}
};

SmallCell.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.number.isRequired,
  content: PropTypes.string,
  style: PropTypes.shape({})
};

export default SmallCell;
