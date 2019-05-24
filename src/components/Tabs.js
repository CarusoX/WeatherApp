import React from 'react'
import WheaterCard from './WheaterCard.js'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}><WheaterCard /> </Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
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
            <Tab menu={{ pointing: true, style: { justifyContent: "center" } }} panes={panes} />
        );
    }
}

export default Tabs;
