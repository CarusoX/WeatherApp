import React from 'react'
import { Card } from 'semantic-ui-react'

export const UVCard = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>{ props.dateName }</Card.Header>
      <Card.Meta>{ props.date }</Card.Meta>
    </Card.Content>
    <Card.Content>
      CIRCLE OF COLOR
    </Card.Content>
    <Card.Content extra>
      {props.index}
    </Card.Content>
  </Card>
)