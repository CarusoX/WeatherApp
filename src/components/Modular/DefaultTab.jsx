import React from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export const DefaultTab = (props) => (
  <Tab.Pane attached={false} loading={props.mode}>
    <h1> Search a city! </h1>
    <img src={require('../../images/lupa.png')} alt='Search city' style={{ maxHeight: 50, maxWidth: 50 }} />
  </Tab.Pane>
)