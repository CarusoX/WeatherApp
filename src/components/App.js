import React from 'react'
import { Button, Grid, Header, Image, Segment } from 'semantic-ui-react'
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

        <Header as='h1' icon textAlign='center'>
          <Image src={require('../images/cloud.png')} />
          <Header.Content>Wheater app</Header.Content>
        </Header>

        <Menu unit={this.state.unit} />

      </Container>

    );
  }
}

export default App;
