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

class Tabs extends React.Component {

  render() {

    let check = this.props.error
    if (check > 0 && check < 5) { // Either 1, 2, 3, or 4
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
