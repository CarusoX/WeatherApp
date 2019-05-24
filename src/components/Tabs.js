import React from 'react'
import WheaterCard from './WheaterCard.js'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import UVICard from './UVICard.js';

const panes = [
  { menuItem: 'Current Weather', render: () => <Tab.Pane attached={false}> <WheaterCard /> </Tab.Pane> },
    
  { menuItem: 'Week Forecast', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    
  { menuItem: 'UV Rays', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: 1,
        }
    }

    render() {
      return(
        <Tab menu={{ pointing: true,
                     style: { justifyContent: "center" } }}
                     panes= {[
                       { menuItem: 'Current Weather', render: () =>
                         <Tab.Pane attached={false}>
                           <WheaterCard clouds={this.props.clouds}
                                       weather_state={this.props.weather_state}
                                       weather_description={this.props.weather_description}
                                       temperature={this.props.temperature}
                                       humidity={this.props.humidity}
                                       pressure={this.props.pressure}
                                       min_temp={this.props.min_temp}
                                       max_temp={this.props.max_temp}
                                       wind_speed={this.props.wind_speed}
                                       wind_direction={this.props.wind_direction}
                                       unit={this.props.unit}
                           />
                           
                           </Tab.Pane> },
                         
                       { menuItem: 'Week Forecast', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
                         
                       { menuItem: 'UV Rays', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
                     ]}
                     
        />
      );
    }
}

export default Tabs;
