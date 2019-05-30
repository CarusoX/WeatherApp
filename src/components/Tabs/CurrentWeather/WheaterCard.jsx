import React from 'react'
import { Segment, Grid, Image, Divider, GridColumn } from 'semantic-ui-react'
import { getTemp } from '../../../helpers/index.ts'

const path1 = '../../../icons/Theme1/'
const path2 = '../../../icons/Theme2/'

var iconmap = {
  '01d': '036-sun', '01n': '024-moon',
  '02d': '007-cloudy day', '02n': '025-night',
  '03d': '003-cloud', '03n': '003-cloud',
  '04d': '004-clouds', '04n': '004-clouds',
  '09d': '027-rain', '09n': '027-rain',
  '10d': '046-weather', '10n': '046-weather',
  '11d': '041-thunderstorm', '11n': '041-thunderstorm',
  '13d': '032-snowy', '13n': '033-snowy',
  '50d': '016-haze', '50n': '016-haze',
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
            {/* Cuando pongo require('../../../icons/Theme2/' + icon + '.png') me tira error :( */}
            <Segment raised compact>
            <Image src={require('../../../icons/Theme2/018-high temperature.png')}
                   size='medium' verticalAlign='middle' />
            </Segment>

            <Segment raised compact>
              <Grid columns={2} stackable>
                <Grid.Column>
                <Image src={require('../../../icons/Theme2/018-high temperature.png')}
                      size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    Max temp
                  </Grid.Row>
                  <Grid.Row>
                    {getTemp(max_temp, unit)}
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Segment>

            <Segment raised compact>
              <Grid columns={2} stackable>
                <Grid.Column>
                <Image src={require('../../../icons/Theme2/022-low temperature.png')}
                      size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    Min temp
                  </Grid.Row>
                  <Grid.Row>
                    {getTemp(min_temp, unit)}
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment raised compact>
              <Grid columns={2} stackable>
                <Grid.Column>
                <Image src={require('../../../icons/Theme2/039-thermometer.png')}
                      size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    Temp
                  </Grid.Row>
                  <Grid.Row>
                    {getTemp(temp, unit)}
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Segment>

            <Segment raised compact>
              <Grid columns={2} stackable>
                <Grid.Column>
                <Image src={require('../../../icons/Theme2/045-weather.png')}
                      size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    State
                  </Grid.Row>
                  <Grid.Row>
                    {weather_state}
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Segment>

            <Segment raised compact>
              <Grid columns={2} stackable>
                <Grid.Column>
                <Image src={require('../../../icons/Theme2/019-humidity.png')}
                      size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    Humidity
                  </Grid.Row>
                  <Grid.Row>
                    {humidity} %
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Segment>

            <Segment raised compact>
              <Grid columns={2} stackable>
                <Grid.Column>
                <Image src={require('../../../icons/Theme2/048-wind.png')}
                      size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    Wind
                  </Grid.Row>
                  <Grid.Row>
                    {wind_speed} M/s
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Segment raised compact>
              <Grid columns={2} stackable>
                <Grid.Column>
                <Image src={require('../../../icons/Theme2/012-dawn.png')}
                      size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    Sunrise
                  </Grid.Row>
                  <Grid.Row>
                    No se jaja salu2 AM
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Segment>

            <Segment raised compact>
              <Grid columns={2} stackable>
                <Grid.Column>
                <Image src={require('../../../icons/Theme2/037-sunset.png')}
                      size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    Sunset
                  </Grid.Row>
                  <Grid.Row>
                    No se jaja salu2 PM
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Segment>

            <Segment raised compact>
              <Grid columns={2} stackable>
                <Grid.Column>
                <Image src={require('../../../icons/Theme2/026-pressure.png')}
                      size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    Preassure
                  </Grid.Row>
                  <Grid.Row>
                    {pressure} hPa
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default WheaterCard;