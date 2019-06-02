import PropTypes from "prop-types";
import React from "react";
import { Image, Segment } from "semantic-ui-react";

const SmallCell = props => {
  const { image, title, content, unit } = props;
  return (
    <Segment raised style={{ margin: "2px", padding: "0" }}>
      <Image
        src={require(`../../icons/Theme2/${image}`)}
        verticalAlign="middle"
        size="mini"
      />
      <h3>{title}</h3>
      {content}
      {unit}
    </Segment>
  );
};

SmallCell.defaultProps = {
  unit: ""
};

SmallCell.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  unit: PropTypes.string
};

export default SmallCell;
