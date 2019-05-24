import React from 'react'
import { Button, Divider, Grid, Placeholder, Segment } from 'semantic-ui-react'
import Title from './Title'
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
        
        <Title city={this.state.city}/>

        <Tabs/>

      </div>

    );
  }
}

export default App;
