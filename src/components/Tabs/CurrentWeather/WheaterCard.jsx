import React from 'react'
import { Segment, Grid, Image, Divider, GridColumn } from 'semantic-ui-react'
import { getTemp, iconmap } from '../../../helpers/index.ts'
import { bold } from 'ansi-colors';

const path1 = '../../../icons/Theme1/'
const path2 = '../../../icons/Theme2/'

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
                    <h3 style={{fontSize: 15}}>Temp</h3>
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
                    <h3 style={{fontSize: 15}}>State</h3>
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
                    <h3 style={{fontSize: 15}}>Humidity</h3>
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
                    <h3 style={{fontSize: 15}}>Wind</h3>
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
                    <h3 style={{fontSize: 15}}>Sunrise</h3>
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
                    <h3 style={{fontSize: 15}}>Sunset</h3>
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
                <Image src={require('../../../icons/Theme2/018-high temperature.png')}
                       size='mini' verticalAlign='middle' />
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    <h3 style={{fontSize: 15}}>Max temp</h3>
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
                    <h3 style={{fontSize: 15}}>Min temp</h3>
                  </Grid.Row>
                  <Grid.Row>
                    {getTemp(min_temp, unit)}
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
                    <h3 style={{fontSize: 15}}>Preassure</h3>
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