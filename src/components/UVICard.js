import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import UVIIndex from './UVIIndex';

class UVICard extends React.Component {
  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Row>
            <UVIIndex {...this.props.UV} />
          </Grid.Row>

          <Grid.Row>

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