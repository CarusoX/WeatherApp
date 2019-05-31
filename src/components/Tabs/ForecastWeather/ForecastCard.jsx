import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
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

        <div style={{display: 'flex', flexDirection: 'row'}}>

            <Polaroid
              text='Selected'
              image='004-clouds.png'
              style={{flexGrow: '2', alignItems: 'stretch', width: '75%'}}
            />

            <div style={{flexGrow: '2', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>

              <div style={{flexGrow: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>

                {this.props.list.days.map(day =>
                  <Polaroid
                    text={day.dt_txt}
                    image='004-clouds.png'
                    style={{maxWidth: '15%', height: '70%'}}
                  />
                )}

              </div> 

              <div style={{flexGrow: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>

              </div> 

            </div>

        </div>

      );
    }
  };
}

export default ForecastCard