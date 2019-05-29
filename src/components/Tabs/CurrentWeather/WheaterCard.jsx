import React from 'react'
import { Segment, Grid, Image, Divider } from 'semantic-ui-react'
import { getTemp } from '../../../helpers/index.ts'

const path1 = '../../../icons/Theme1/'
const path2 = '../../../icons/Theme2/'

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
            <Image src={require('../../../icons/Theme2/036-sun.png')}
                   size='medium' verticalAlign='middle' />
            </Segment>

            <Segment>
              Max temp
              <Divider />
              <Image src={require('../../../icons/Theme2/018-high temperature.png')}
                     size='mini' verticalAlign='middle' />
              {getTemp(max_temp, unit)}
            </Segment>

            <Segment>
              Min temp
              <Divider />
              <Image src={require('../../../icons/Theme2/022-low temperature.png')}
                     size='mini' verticalAlign='middle' />
              {getTemp(min_temp, unit)}
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment>
              Temp
              <Divider />
              <Image src={require('../../../icons/Theme2/039-thermometer.png')}
                     size='mini' verticalAlign='middle' />
              {getTemp(temp, unit)}
            </Segment>

            <Segment>
              State
              <Divider />
              <Image src={require('../../../icons/Theme2/045-weather.png')}
                     size='mini' verticalAlign='middle' />
              {weather_state}
            </Segment>

            <Segment>
              Humidity
              <Divider />
              <Image src={require('../../../icons/Theme2/019-humidity.png')}
                     size='mini' verticalAlign='middle' />
              {humidity} %
            </Segment>

            <Segment>
              Wind
              <Divider />
              <Image src={require('../../../icons/Theme2/048-wind.png')}
                     size='mini' verticalAlign='middle' />
              {wind_speed} M/s
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment>
              Sunrise
              <Divider />
              <Image src={require('../../../icons/Theme2/012-dawn.png')}
                     size='mini' verticalAlign='middle' />
              No se jaja salu2 AM
            </Segment>

            <Segment>
              Sunset
              <Divider />
              <Image src={require('../../../icons/Theme2/037-sunset.png')}
                     size='mini' verticalAlign='middle' />
              No se jaja salu2 PM
            </Segment>

            <Segment>
              Preassure
              <Divider />
              <Image src={require('../../../icons/Theme2/026-pressure.png')}
                     size='mini' verticalAlign='middle' />
              {pressure} hPa
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default WheaterCard;