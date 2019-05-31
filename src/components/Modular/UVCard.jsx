import PropTypes from "prop-types";
import React from "react";
import { Card } from "semantic-ui-react";

const getColor = index => {
  if (index < 3) return "green";
  if (index < 6) return "yellow";
  if (index < 8) return "orange";
  if (index < 11) return "red";
  return "purple";
};

const UVCard = props => {
  const { dateName, date, index } = props;
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{dateName}</Card.Header>
        <Card.Meta>{date}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 200"
          height="100%"
          width="100%"
        >
          <circle
            r="110"
            cy="97"
            cx="497"
            strokeWidth="2"
            stroke="#E4AF4C"
            fill={getColor(index)}
          />
        </svg>
      </Card.Content>
      <Card.Content extra>{index}</Card.Content>
    </Card>
  );
};
UVCard.propTypes = {
  dateName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default UVCard;
