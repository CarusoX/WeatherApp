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
      />
    );
  }

  render() {
    console.log(this.props)
    if(this.props.list.length === 0){
      return (
        <h1> LOADING </h1>
      )
    } else {
      return (

        <Grid columns={6} divided centered>

          <Grid.Row>
            {this.day(this.props.list.days[0], 10)}
          </Grid.Row>

          <Grid.Row>
            {this.props.list.days.map(day =>
                this.day(day, 3),
            )}
          </Grid.Row>

        </Grid>
      );
    }
  };
}

export default ForecastCard