import React from 'react'
import { Segment, Grid, Icon, Divider } from 'semantic-ui-react'

class WheaterCard extends React.Component { 

  render() {    
    const {
      weather_id, weather_state, weather_description,
      temp, humidity, pressure, min_temp, max_temp, wind_speed,
      wind_dir, clouds, id
    } = this.props;

    var tempp = temp
    var Mtemp = min_temp
    var mtemp = max_temp

    if (this.props.unit === 'Fº') {
      tempp = (temp * (9/5)) + 32
      Mtemp = (min_temp * (9/5)) + 32
      mtemp = (max_temp * (9/5)) + 32
    } else if (this.props.unit === 'Kº') {
      tempp = temp + 273.15
      Mtemp = min_temp + 273.15
      mtemp = max_temp + 273.15
    }

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
              {Mtemp} {this.props.unit}
            </Segment>

            <Segment>
              Min temp
              <Divider />
              {mtemp} {this.props.unit}
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment>
              Temp
              <Divider />
              {tempp} {this.props.unit}
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