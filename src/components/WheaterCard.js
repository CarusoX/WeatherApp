import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'

const WheaterCard = () => (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>
          <Icon.Group size='massive'>
            <Icon name='sun' color='yellow'/>
          </Icon.Group>
        </Segment>
        <Segment>Temp</Segment>
        <Segment>State</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Preassure</Segment>
        <Segment>Min temp</Segment>
        <Segment>Sunrise</Segment>
        <Segment>Wind</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Humidity</Segment>
        <Segment>Max temp</Segment>
        <Segment>Sunset</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default WheaterCard