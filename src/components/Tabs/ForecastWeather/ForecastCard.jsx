import React from 'react'
import { Grid } from 'semantic-ui-react'
import { getDateName, getIconName } from '../../../helpers/index.ts'
import { Cell2 } from '../../Modular/index.ts'


class ForecastCard extends React.Component {

  day(d, w) {
    return (
      <Cell2 
        width={w}
        icon={getIconName(d.weather_icon)}
        date={d.dt_txt.slice(0, 10).split('-').join('/')}
        day={getDateName(d.dt_txt.slice(0, 10).split('-').join('/'))}
        max={d.max_temp}
        min={d.min_temp}
        temp={d.temp}
        humidity={d.humidity}
        wind_direction={d.wind_dir}
        wind_speed={d.wind_speed}
      />
    );
  }

  render() {
    if(this.props.list.length === 0){
      return (
        <h1> LOADING </h1>
      )
    } else {
      return (

        <Grid columns={6} divided>

          {/*Day by default*/}

          {this.day(this.props.list.days[0], 5)}


          {/*Days (clicked)*/}
          {/*this.props.list.days.map(day =>
              this.day(day, 2),
          )*/}

        </Grid>
      );
    }
  };
}

export default ForecastCard