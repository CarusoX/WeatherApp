import PropTypes from "prop-types";
import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";

const Cell = props => {
  const { image, title, content, unit } = props;
  return (
    <Segment raised>
      <Grid container stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image
              src={require(`../../icons/Theme2/${image}`)}
              size="mini"
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Grid.Row>
              <h3 style={{ fontSize: 15 }}>{title}</h3>
            </Grid.Row>
            <Grid.Row>
              {content}
              {unit}
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

Cell.defaultProps = {
  unit: ""
};

Cell.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  unit: PropTypes.string
};

export default Cell;
