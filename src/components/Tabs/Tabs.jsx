import React from 'react'
import { Tab } from 'semantic-ui-react'
import { DefaultTab, ErrorTab } from '../Modular/index.ts'
import WeatherCard from './CurrentWeather/WeatherCard'
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

Icons taken of:
<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

*/
class Tabs extends React.Component {
  
  render() {
    {console.log(this.props)}
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
                <WeatherCard
                  unit={this.props.unit}
                  {...this.props.currentWeather}
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
