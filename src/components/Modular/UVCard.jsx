import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const getColor = (index) => {
  if(index < 3) return "green"
  if(index < 6) return "yellow"
  if(index < 8) return "orange"
  if(index < 11) return "red"
  return "purple"
} 

export const UVCard = (props) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>{props.dateName}</Card.Header>
      <Card.Meta>{props.date}</Card.Meta>
    </Card.Content>
    <Card.Content>
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 200" height="100%" width="100%">
        <circle r="110" cy="97" cx="497"
          stroke-width="2" stroke="#E4AF4C"
          fill={getColor(props.index)} />
      </svg>
    </Card.Content>
    <Card.Content extra>
      {props.index}
    </Card.Content>
  </Card >
)