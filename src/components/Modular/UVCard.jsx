import React from 'react'
import { Card } from 'semantic-ui-react'

export const UVCard = (props) => (
  <Card>
    <Card.Content>
      <Card.Header>Day of week</Card.Header>
      <Card.Meta>Month/DayNumber</Card.Meta>
    </Card.Content>
    <Card.Content>
      CIRCLE OF COLOR
    </Card.Content>
    <Card.Content extra>
      UV index for the day
    </Card.Content>
  </Card>
)