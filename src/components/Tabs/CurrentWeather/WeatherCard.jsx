import React from 'react'
import { Segment, Grid, Image } from 'semantic-ui-react'
import { getTemp, iconMap, unixtohours } from '../../../helpers/index.ts'
import { Cell } from '../../Modular/index.ts'

const path1 = '../../../icons/Theme1/'
const path2 = '../../../icons/Theme2/'

class WeatherCard extends React.Component {

  render() {
    const {
      weather_id, weather_state, weather_description, weather_icon,
      temp, humidity, pressure, min_temp, max_temp, wind_speed,
      wind_dir, clouds, id, unit
    } = this.props;

    const icon = iconMap(weather_icon)
    
    return (
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>

            <Segment raised compact>
              <h3 style={{fontSize: 25}}>State</h3>
              {
                icon && <Image
                  src={require(`../../../icons/Theme2/${icon}.png`)}
                  size='medium'
                  verticalAlign='middle'
                />
              }
              <p style={{fontWeight: 'bold'}}>{weather_state}</p>
              <p>{weather_description}</p>
            </Segment>

          </Grid.Column>
          <Grid.Column>

            <Cell 
              image='039-thermometer.png'
              title='Temperature'
              content={getTemp(temp, unit)}
            />

            <Cell 
              image='018-high temperature.png'
              title='Max Temperature'
              content={getTemp(max_temp, unit)}
            />

            <Cell 
              image='022-low temperature.png'
              title='Min Temperature'
              content={getTemp(min_temp, unit)}
            />

            <Cell 
              image='004-clouds.png'
              title='Clouds'
              content={clouds}
              unit='%'
            />

            <Cell 
              image='048-wind.png'
              title='Wind Speed'
              content={wind_speed}
              unit='M/s'
            />

          </Grid.Column>
          <Grid.Column>

            <Cell 
              image='012-dawn.png'
              title='Sunrise'
              content={unixtohours(sunrise)}
            />

            <Cell 
              image='037-sunset.png'
              title='Sunset'
              content={unixtohours(sunset)}
            />

            <Cell 
              image='019-humidity.png'
              title='Humidity'
              content={humidity}
              unit='%'
            />
            
            <Cell 
              image='026-pressure.png'
              title='Preassure'
              content={pressure}
              unit='hPa'
            />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default WeatherCard;