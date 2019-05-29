import React from 'react'
import { Tab } from 'semantic-ui-react'
import { DefaultTab, ErrorTab } from '../Modular/index.ts'
import WheaterCard from './CurrentWeather/WheaterCard'
import ForecastCard from './ForecastWeather/ForecastCard'
import { UVTab } from './UVWeather/UVTab';

const defaultPanes = (mode) => [
  { menuItem: 'Current Weather', render: () => <DefaultTab mode={mode} /> },
  { menuItem: 'Week Forecast', render: () => <DefaultTab mode={mode} /> },
  { menuItem: 'UV Rays', render: () => <DefaultTab mode={mode} /> },
]

const errorPanes = (mode) => [
  { menuItem: 'Current Weather', render: () => <ErrorTab mode={mode} /> },
  { menuItem: 'Week Forecast', render: () => <ErrorTab mode={mode} /> },
  { menuItem: 'UV Rays', render: () => <ErrorTab mode={mode} /> },
]

/*

There are 9 possible responses for icons.
Note: They'll change between day and night.

- clear sky ...................... 01d - 01n
- few clouds ..................... 02d - 02n
- scattered clouds ............... 03d - 03n
- broken clouds .................. 04d - 04n
- shower rain .................... 09d - 09n
- rain ........................... 10d - 10n
- thunderstorm ................... 11d - 11n
- snow ........................... 13d - 13n
- mist ........................... 50d - 50n

Icons taken of:
<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

*/

class Tabs extends React.Component {

  render() {

    if (typeof(this.props.error) === 'number') { // Either 1, 2, 3, or 4
      return (
        <Tab
          menu={{ pointing: true, style: { justifyContent: "center" } }}
          panes={ errorPanes() }
        />
      )
    }
    if (this.props.show === false) {
      return (
        <Tab
          menu={{ pointing: true, style: { justifyContent: "center" } }}
          panes={ defaultPanes(false) }
        />
      )
    }
    if (this.props.loading) {
      return (
        <Tab
          menu={{ pointing: true, style: { justifyContent: "center" } }}
          panes={ defaultPanes(true) }
        />
      )
    }
    
    return (
      <Tab menu={{ pointing: true, style: { justifyContent: "center" }}}
        panes={[
          {
            menuItem: 'Current Weather', render: () =>
              <Tab.Pane attached={false}>
                <WheaterCard
                  {...this.props.currentWeather}
                  unit={this.props.unit}
                />
              </Tab.Pane>
          },
          {
            menuItem: 'Week Forecast', render: () =>
              <Tab.Pane attached={false}>
                <ForecastCard list={this.props.list} />
            </Tab.Pane> 
          },
          {
            menuItem: 'UV Rays', render: () =>
              <Tab.Pane attached={false}>
                <UVTab UV={this.props.UV} />
              </Tab.Pane>
          },
        ]}
      />
    );
  }
}

export default Tabs;
