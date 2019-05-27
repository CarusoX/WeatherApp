import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import UVIndex from './UVIndex';

class UVICard extends React.Component {
  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Row>
            <UVIndex {...this.props.UV} />
          </Grid.Row>
          <Grid.Row>
            <UVIForecast />
          </Grid.Row>

          <Grid.Row>

          </Grid.Row>

          <Grid.Row>

          </Grid.Row>

        </Grid>
      </Container>
    )
  }
}

export default UVICard;