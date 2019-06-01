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

  render() {
    return (

      <Tab.Pane attached={false}>

        <div style={{ display: 'flex', flexDirection: 'row' }}>

        <BigPolaroid
          text='Selected'
          image={getIconName(this.props.days[this.state.index].weather_icon) + '.png'}
        />
        {console.log(this.props.days)}
        <div style={{ flexGrow: '2', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>

          <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

            {this.props.days.map((day, index) =>
              <SmallPolaroid
                image={getIconName(day.weather_icon) + '.png'}
                text={getDateName(day.dt_txt)}
                max={day.maxTemp}
                min={day.minTemp}
                unit={this.props.unit}
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
