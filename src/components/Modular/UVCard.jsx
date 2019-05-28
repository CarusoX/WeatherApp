import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export const UVCard = (props) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{ props.dateName }</Card.Header>
      <Card.Meta>{ props.date }</Card.Meta>
    </Card.Content>
    <Card.Content>
    HERE GOES AN ICON
    </Card.Content>
    <Card.Content extra>
      {props.index}
    </Card.Content>
  </Card>
)