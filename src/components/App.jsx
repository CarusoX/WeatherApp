import React from 'react'
import { Button, Container, Grid, Segment } from 'semantic-ui-react'
// import { ButtonList } from './ButtonList/index.ts'
import { Title } from './Title/index.ts'
import { Menu } from './Menu/index.ts'
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
                <Button size='mini' onClick={() => this.setState({ unit: 'Cº' })} active>Cº</Button>
                <Button size='mini' onClick={() => this.setState({ unit: 'Fº' })}>Fº</Button>
                <Button size='mini' onClick={() => this.setState({ unit: 'Kº' })}>Kº</Button>
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Segment>

        <Title title='Wheater app' size='h1' image='cloud.png' />

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
