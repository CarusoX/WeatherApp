import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export const UVCard = (props) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{props.dateName}</Card.Header>
      <Card.Meta>{props.date}</Card.Meta>
    </Card.Content>
    <Card.Content>
      <svg id="color-fill" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="300">
        <polygon class="hex" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>  
      </svg>
    </Card.Content>
  <Card.Content extra>
    {props.index}
  </Card.Content>
  </Card >
)