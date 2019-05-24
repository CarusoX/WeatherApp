import React from 'react'
import { Divider, Header, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import SearchBar from './SearchBar'

const Title = () => (
  
  <div>
    
    <Header as='h1' icon textAlign='center'>  
      <Image src={require('../images/cloud.png')}/>
      <Header.Content>Wheater app</Header.Content>
    </Header>

    <SearchBar />
    
    <Divider horizontal>City: </Divider>

  </div>
)

export default Title
