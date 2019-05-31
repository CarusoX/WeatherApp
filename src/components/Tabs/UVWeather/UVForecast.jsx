import React from "react";
import PropTypes from "prop-types";
import { Container, Card } from "semantic-ui-react";
import { UVCard } from "../../Modular/index.ts";
import { getDateName } from "../../../helpers/index.ts";

const UVForecast = props => {
  const { uvForecast } = props;
  return (
    <Container>
      <Card.Group stackable centered itemsPerRow="5">
        {uvForecast.map(item => (
          <UVCard
            date={item.date.slice(5)}
            dateName={getDateName(item.date)}
            index={item.index}
          />
        ))}
      </Card.Group>
    </Container>
  );
};

UVForecast.propTypes = {
  uvForecast: PropTypes.arrayOf(PropTypes.shape).isRequired
};

export default UVForecast;
