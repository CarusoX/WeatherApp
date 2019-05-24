import React from 'react'
import { Button, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import Tabs from './Tabs'
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unit: 'Cº',
      city: ''
    }
  }

  changeCity(newcity) {
    this.setState({city: newcity})
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

        <SearchBar newcity={this.changeCity.bind(this)} />
        
        <Divider horizontal>City: {this.state.city}</Divider>

        <Tabs/>

      </div>

    );
  }
}

export default App;
