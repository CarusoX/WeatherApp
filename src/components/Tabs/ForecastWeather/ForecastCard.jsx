import React from 'react'
import { Grid } from 'semantic-ui-react'
import { getDateName, getIconName } from '../../../helpers/index.ts'
import { Polaroid } from '../../Modular/index.ts'

class ForecastCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }

  day(day, width) {
    
    return (
      <Cell2 
        width={width}
        icon={getIconName(day.weather_icon)}
        date={day.dt_txt.slice(0, 10).split('-').join('/')}
        day={getDateName(day.dt_txt.slice(0, 10).split('-').join('/'))}
        max={day.max_temp}
        min={day.min_temp}
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

        // {this.day(this.props.list.days[0], 10)}

        // {this.props.list.days.map(day =>
        //   this.day(day, 3),
        // )}

        <Grid>

          <Grid.Column width={5}> {/* Card grande */}

            <Polaroid
              text='Selected'
              image='004-clouds.png'
            />

          </Grid.Column>

            <Grid.Column width={3}>
              <Polaroid
                text='DAY 1'
                image='004-clouds.png'
              />
            </Grid.Column>

            <Grid.Column width={3}>
              <Polaroid
                text='DAY 2'
                image='004-clouds.png'
              />
            </Grid.Column>

            <Grid.Column width={3}>
              <Polaroid
                text='DAY 3'
                image='004-clouds.png'
              />
            </Grid.Column>

        </Grid>
      );
    }
  };
}

export default ForecastCard