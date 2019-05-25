import React from 'react'
import { Card, Image, Placeholder, Segment } from 'semantic-ui-react'

export const PlaceholderImageSquare = () => (
  <Card>
    <Card.Content>
    <Placeholder>
      <Placeholder.Image square />
    </Placeholder>
    </Card.Content>
  </Card>
);

export const PlaceholderParagraph = () => (
  <Placeholder>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
)

export const SegmentExampleLoading = () => (
  <Segment loading>
    <Image src={require('../images/paragraph.png')} />
  </Segment>
)
