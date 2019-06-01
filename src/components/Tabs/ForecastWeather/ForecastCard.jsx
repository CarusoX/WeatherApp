import React from 'react'
import { Tab } from "semantic-ui-react";
import { getDateName, getIconName } from '../../../helpers/index.ts'
import { BigPolaroid, SmallPolaroid } from '../../Modular/index.ts'
import UVHistory from '../UVWeather/UVHistory'

class ForecastCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      index: 0,
    }
  }

<<<<<<< HEAD
  render() {
    return (

      <div style={{ display: 'flex', flexDirection: 'row' }}>
=======
  // icon={getIconName(day.icon)}
  // date={day.dt_txt.slice(0, 10).split('-').join('/')}
  // day={getDateName(day.dt_txt.slice(0, 10).split('-').join('/'))}
  // max={day.maxTemp}
  // min={day.minTemp}
  
  // {this.day(this.props.list.days[0], 10)}

  // {this.props.list.days.map(day =>
  //   this.day(day, 3),
  // )}

  render() {
    return (

      <Tab.Pane attached={false}>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
>>>>>>> 581b4f11ace24cd01d8e581e6340534a4a2e06c0

        <BigPolaroid
          text={this.props.days[this.state.index].dt_txt}
          image={getIconName(this.props.days[this.state.index].weather_icon) + '.png'}
        />

        <div style={{ flexGrow: '2', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>

          <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

            {this.props.days.map(day =>
              <SmallPolaroid
                text={day.dt_txt}
                image={getIconName(day.weather_icon) + '.png'}
              />
            )}

          </div>

          <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <UVHistory
              history={this.props.history}
            />

          </div>

        </div>

        </div>

      </Tab.Pane>

    );
  }
};

export default ForecastCard;
