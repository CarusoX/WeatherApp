import React from 'react'
import { Button, Container, Grid, Header, Image, Segment } from 'semantic-ui-react'
import Menu from './Menu/Menu'
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unit: 'Cº'
    }
  }

  render() {
    return (

      <Container fluid>

        <Segment>
          <Grid>
            <Grid.Column textAlign="center">
              <Button.Group floated='right'>
                <Button size='mini' onClick={() => this.setState({ unit: 'Cº' })}>Cº</Button>
                <Button size='mini' onClick={() => this.setState({ unit: 'Fº' })}>Fº</Button>
                <Button size='mini' onClick={() => this.setState({ unit: 'Kº' })}>Kº</Button>
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Segment>

        {/* <img src={require('../images/map.jpg')} className='background'/> */}

        <Header as='h1' icon textAlign='center'>
          <Image src={require('../images/cloud.png')} />
          <Header.Content>Wheater app</Header.Content>
        </Header>

        <Grid centered>
          <Grid.Column width='15' verticalAlign='middle'>

            <Menu unit={this.state.unit} />

          </Grid.Column>
        </Grid>
      </Container>

    );
  }
}

export default App;
