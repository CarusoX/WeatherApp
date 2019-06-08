import PropTypes from "prop-types";
import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";
import { getIconName } from "../../helpers/index.ts";

const Cell = props => {
  const { image, title, content, theme } = props;
  return (
    <Segment raised>
      <Grid container stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image
              src={getIconName(image, theme)}
              size="mini"
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Grid.Row>
              <h3 style={{ fontSize: 15 }}>{title}</h3>
            </Grid.Row>
            <Grid.Row>{content}</Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

Cell.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  theme: PropTypes.number.isRequired
};

export default Cell;
