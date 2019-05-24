import React from 'react'
import { Button, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import Tabs from './Tabs'
import Menu from './Menu'
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unit: 'Cº'
    }
  }
  
  render() {
    return(

      <div>
        <Segment>
          <Grid>
            <Grid.Column textAlign="center">
              <Button.Group floated='right'>
                <Button size='mini' onClick={() => this.setState({unit: 'Cº'})}>Cº</Button>
                <Button size='mini' onClick={() => this.setState({unit: 'Fº'})}>Fº</Button>
                <Button size='mini' onClick={() => this.setState({unit: 'Kº'})}>Kº</Button>
              </Button.Group>  
            </Grid.Column>
          </Grid>
        </Segment>
        
        <Header as='h1' icon textAlign='center'>  
          <Image src={require('../images/cloud.png')}/>
          <Header.Content>Wheater app</Header.Content>
        </Header>

        <Menu unit={this.state.unit}/>

      </div>

    );
  }
}

export default App;
