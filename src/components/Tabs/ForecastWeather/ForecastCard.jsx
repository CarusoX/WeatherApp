import React from 'react'
import { getDateName, getIconName } from '../../../helpers/index.ts'
import { BigPolaroid, SmallPolaroid } from '../../Modular/index.ts'
import UVHistory from '../UVWeather/UVHistory'

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
        icon={getIconName(day.icon)}
        date={day.dt_txt.slice(0, 10).split('-').join('/')}
        day={getDateName(day.dt_txt.slice(0, 10).split('-').join('/'))}
        max={day.maxTemp}
        min={day.minTemp}
      />
    );
  }

  render() {
    return (

      // {this.day(this.props.list.days[0], 10)}

      // {this.props.list.days.map(day =>
      //   this.day(day, 3),
      // )}

      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <BigPolaroid
          text='Selected'
          image='004-clouds.png'
        />

        <div style={{ flexGrow: '2', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>

          <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>

            {this.props.days.map(day =>
              <SmallPolaroid
                text={day.dt_txt}
                image='004-clouds.png'
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

    );
  }
};

export default ForecastCard;
