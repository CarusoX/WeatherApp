import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export const Title = (props) => (
  <Header as={props.size} icon textAlign='center'>
    <Image src={require('../../images/' + props.image)} />
    <Header.Content>{props.title}</Header.Content>
  </Header>
)