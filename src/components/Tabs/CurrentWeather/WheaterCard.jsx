import React from 'react'
import { Segment, Grid, Image, Divider } from 'semantic-ui-react'
import { getTemp } from '../../../helpers/index.ts'

const path1 = '../../../icons/Theme1/'
const path2 = '../../../icons/Theme2/'

var iconmap = {
  ['01d']: '036-sun', ['01n']: '024-moon',
  ['02d']: '007-cloudy day', ['02n']: '025-night',
  ['03d']: '003-cloud', ['03n']: '003-cloud',
  ['04d']: '004-clouds', ['04n']: '004-clouds',
  ['09d']: '027-rain', ['09n']: '027-rain',
  ['10d']: '046-weather', ['10n']: '046-weather',
  ['11d']: '041-thunderstorm', ['11n']: '041-thunderstorm',
  ['13d']: '032-snowy', ['13n']: '033-snowy',
  ['50d']: '016-haze', ['50n']: '016-haze',
}

class WheaterCard extends React.Component {
  
  render() {
    const {
      weather_id, weather_state, weather_description, weather_icon,
      temp, humidity, pressure, min_temp, max_temp, wind_speed,
      wind_dir, clouds, id, unit
    } = this.props;

    const icon = iconmap[this.props.nana]
    
    return (
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>

            ireceive {this.props.nana}
            i process {iconmap[this.props.nana]}
            const is equall to {icon}
            {/* 
            Cuando pongo require('../../../icons/Theme2/' + icon + '.png') me tira error :(
            */}
            <Segment raised compact>
            <Image src={require('../../../icons/Theme2/018-high temperature.png')}
                   size='medium' verticalAlign='middle' />
            </Segment>

            <Segment raised compact>
              Max temp
              <Divider />
              <Image src={require('../../../icons/Theme2/018-high temperature.png')}
                     size='mini' verticalAlign='middle' />
              {getTemp(max_temp, unit)}
            </Segment>

            <Segment raised compact>
              Min temp
              <Divider />
              <Image src={require('../../../icons/Theme2/022-low temperature.png')}
                     size='mini' verticalAlign='middle' />
              {getTemp(min_temp, unit)}
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment raised compact>
              Temp
              <Divider />
              <Image src={require('../../../icons/Theme2/039-thermometer.png')}
                     size='mini' verticalAlign='middle' />
              {getTemp(temp, unit)}
            </Segment>

            <Segment raised compact>
              State
              <Divider />
              <Image src={require('../../../icons/Theme2/045-weather.png')}
                     size='mini' verticalAlign='middle' />
              {weather_state}
            </Segment>

            <Segment raised compact>
              Humidity
              <Divider />
              <Image src={require('../../../icons/Theme2/019-humidity.png')}
                     size='mini' verticalAlign='middle' />
              {humidity} %
            </Segment>

            <Segment raised compact>
              Wind
              <Divider />
              <Image src={require('../../../icons/Theme2/048-wind.png')}
                     size='mini' verticalAlign='middle' />
              {wind_speed} M/s
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment raised compact>
              Sunrise
              <Divider />
              <Image src={require('../../../icons/Theme2/012-dawn.png')}
                     size='mini' verticalAlign='middle' />
              No se jaja salu2 AM
            </Segment>

            <Segment raised compact>
              Sunset
              <Divider />
              <Image src={require('../../../icons/Theme2/037-sunset.png')}
                     size='mini' verticalAlign='middle' />
              No se jaja salu2 PM
            </Segment>

            <Segment raised compact>
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