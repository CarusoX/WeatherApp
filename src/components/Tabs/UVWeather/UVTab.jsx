import React from "react";
import { Divider, Grid } from "semantic-ui-react";
import UVIndex from "./UVIndex";
import UVForecast from "./UVForecast";
import UVHistory from "./UVHistory";

const UVTab = props => {
  const { uvIndex, uvForecast, UVHistoryData } = props;
  return (
    <Grid stackable centered>
      <Grid.Row>
        <UVIndex uv_index={uvIndex} />
      </Grid.Row>
      <Divider />
      <Grid.Row stretched divided>
        <UVForecast uv_forecast={uvForecast} />
      </Grid.Row>
      <Grid.Row>
        <UVHistory uv_history_data={UVHistoryData} />
      </Grid.Row>
    </Grid>
  );
};

export default UVTab;
