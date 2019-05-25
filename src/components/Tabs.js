import React from 'react'
import WheaterCard from './WheaterCard.js'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import UVICard from './UVICard.js';

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
        <Tab menu={{
          pointing: true,
          style: { justifyContent: "center" }
        }}
          panes={[
            {
              menuItem: 'Current Weather', render: () =>
                <Tab.Pane attached={false}>
                  <h1> Search a city! </h1>
                  <img src={require('../images/lupa.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
                </Tab.Pane>
            },

            {
              menuItem: 'Week Forecast', render: () =>
                <Tab.Pane attached={false}>
                  <h1> Search a city! </h1>
                  <img src={require('../images/lupa.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
                </Tab.Pane>
            },

            {
              menuItem: 'UV Rays', render: () =>
                <Tab.Pane attached={false}>
                  <h1> Search a city! </h1>
                  <img src={require('../images/lupa.png')} style={{ maxHeight: 50, maxWidth: 50 }} />
                </Tab.Pane>
            },
          ]}

        />
      )
    } else {
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
