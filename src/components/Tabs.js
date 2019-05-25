import React from 'react'
import WheaterCard from './WheaterCard.js'
import DefaultTab from './DefaultTab.js'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import UVICard from './UVICard.js';

const defaultPanes = (mode) => [
  { menuItem: 'Current Weather', render: () => <DefaultTab mode={mode} /> },
  { menuItem: 'Week Forecast', render: () => <DefaultTab mode={mode} /> },
  { menuItem: 'UV Rays', render: () => <DefaultTab mode={mode} /> },
]

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 1,
      loading: false,
      error: false
    }
  }

  render() {
    if (this.props.show === false) {
      return (
        <Tab
          menu={{ pointing: true, style: { justifyContent: "center" } }}
          panes={defaultPanes(false)}
        />
      )
    } else if (this.props.loading) {
      return (
        <Tab
          menu={{ pointing: true, style: { justifyContent: "center" } }}
          panes={defaultPanes(true)}
        />
      )
    }
    else {
      return (
        <Tab menu={{
          pointing: true,
          style: { justifyContent: "center" }
        }}
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
                <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
            },

            {
              menuItem: 'UV Rays', render: () =>
                <Tab.Pane attached={false}>
                  <UVICard UV={this.props.UV} />
                </Tab.Pane>
            },
          ]}
        />
      );

    }
  }
}

export default Tabs;
