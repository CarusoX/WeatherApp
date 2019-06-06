import PropTypes from "prop-types";
import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";

const SmallCell = props => {
  const { image, title, content, style } = props;
  return (
    <Segment {...style}>
      <Image
        src={require(`../../icons/Theme2/${image}`)}
        centered
        size="mini"
      />
      <Header>{title}</Header>
      {content}
    </Segment>
  );
};

SmallCell.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  style: PropTypes.shape({}).isRequired
};

export default SmallCell;
