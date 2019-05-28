import React from 'react'
import { Divider, Grid } from 'semantic-ui-react'
import UVIndex from './UVIndex';
import { UVForecast } from './UVForecast'
import UVHistory from './UVHistory'

export const UVTab = (props) => (
  <Grid stackable centered>
    <Grid.Row>
      <UVIndex uv_index={props.UV.uv_index} />
    </Grid.Row>
    <Divider />
    <Grid.Row stretched divided>
      <UVForecast
        uv_forecast={props.UV.uv_forecast}
      />
    </Grid.Row>
    <Grid.Row>
      <UVHistory 
        uv_history={props.UV.uv_history}
      />
    </Grid.Row>
  </Grid>
)