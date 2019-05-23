import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Title = () => (
  <div>
    <Header as='h1' icon textAlign='center'>
      <Icon.Group size='large' >
        <Icon name='cloud' color='blue'/>
        <Icon corner name='sun' color='yellow'/>
      </Icon.Group>
      <Header.Content>Wheater app</Header.Content>
    </Header>
  </div>
)

export default Title
