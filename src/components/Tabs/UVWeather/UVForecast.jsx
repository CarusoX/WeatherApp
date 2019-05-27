import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import { UVCard } from '../../Modular/index.ts'
import { getDateName } from '../../../helpers/index.ts'

export const UVForecast = (props) => (
  <Container>
    <Card.Group centered itemsPerRow={'5'}>
      {
        props.uv_forecast.map((item, index) =>
          <UVCard
            key={index}
            date={item.date.slice(5)}
            dateName={getDateName(item.date)}
            index={item.index}
          />
        )
      }
    </Card.Group>
  </Container>
)