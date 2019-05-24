import React from 'react'
import { Card, Image, Placeholder, Segment } from 'semantic-ui-react'

export default PlaceholderImageSquare = () => (
  <Card>
    <Card.Content>
    <Placeholder>
      <Placeholder.Image square />
    </Placeholder>
    </Card.Content>
  </Card>
)

export default PlaceholderParagraph = () => (
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

export default SegmentExampleLoading = () => (
  <Segment loading>
    <Image src={require('../images/paragraph.png')} />
  </Segment>
)
