import React from 'react'
import { Divider, Grid } from 'semantic-ui-react'
import UVIndex from './UVIndex';
import { UVForecast } from './UVForecast'

export const UVCard = (props) => (
  <Grid fluid='true' container centered>
    <Grid.Row>
      <UVIndex uvi_index={props.UV.uvi_index} />
    </Grid.Row>
    <Divider />
    <Grid.Row>
      <UVForecast
        uvi_forecast={props.UV.uvi_forecast}
      />
    </Grid.Row>

    <Grid.Row>

    </Grid.Row>

    <Grid.Row>

    </Grid.Row>

  </Grid>
)