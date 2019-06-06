import PropTypes from "prop-types";
import React from "react";
import { Divider, Grid, Tab } from "semantic-ui-react";
import UVIndex from "./UVIndex";
import UVForecast from "./UVForecast";
import UVHistory from "./UVHistory";

const UVTab = props => {
  const { index, forecast, history } = props;
  return (
    <Tab.Pane attached={false}>
      <Grid stackable centered>
        <Grid.Row>
          <UVIndex index={index} />
        </Grid.Row>
        <Divider />
        <Grid.Row stretched divided>
          <UVForecast forecast={forecast} />
        </Grid.Row>
        <Grid.Row>
          <UVHistory history={history} />
        </Grid.Row>
      </Grid>
    </Tab.Pane>
  );
};

export default UVTab;

UVTab.propTypes = {
  index: PropTypes.number.isRequired,
  forecast: PropTypes.arrayOf(PropTypes.shape).isRequired,
  history: PropTypes.arrayOf(PropTypes.shape).isRequired
};
