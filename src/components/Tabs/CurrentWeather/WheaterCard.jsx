import React from 'react'
import { Segment, Grid, Icon, Divider } from 'semantic-ui-react'
import { getTemp } from '../../../helpers/index.ts'

class WheaterCard extends React.Component {

  render() {
    const {
      weather_id, weather_state, weather_description, weather_icon,
      temp, humidity, pressure, min_temp, max_temp, wind_speed,
      wind_dir, clouds, id, unit
    } = this.props;

    return (
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>

            <Segment>
              <Icon.Group size='massive'>
                <Icon name='sun' color='yellow' />
              </Icon.Group>
            </Segment>

            <Segment>
              Max temp
              <Divider />
              {getTemp(max_temp, unit)}
            </Segment>

            <Segment>
              Min temp
              <Divider />
              {getTemp(min_temp, unit)}
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment>
              Temp
            <Divider />
              {getTemp(temp, unit)}
            </Segment>

            <Segment>
              State
              <Divider />
              {weather_state}
            </Segment>

            <Segment>
              Humidity
              <Divider />
              {humidity} %
            </Segment>

            <Segment>
              Wind
              <Divider />
              {wind_speed} M/s
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment>
              Sunrise
              <Divider />
              No se jaja salu2 AM
            </Segment>

            <Segment>
              Sunset
              <Divider />
              No se jaja salu2 PM
            </Segment>

            <Segment>
              Preassure
              <Divider />
              {pressure} hPa
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default WheaterCard;