import React from "react";
import { Button, Container, Grid, Segment } from "semantic-ui-react";
import { Title } from "./Title/index.ts";
import { Menu } from "./Menu/index.ts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "C"
    };
  }

  render() {
    const { unit } = this.state;
    return (
      <Container fluid>
        <Segment>
          <Grid>
            <Grid.Column textAlign="center">
              <Button.Group floated="right" size="mini">
                <Button
                  onClick={() => this.setState({ unit: "C" })}
                  active={unit === "C"}
                  content="Cº"
                />
                <Button
                  onClick={() => this.setState({ unit: "F" })}
                  active={unit === "F"}
                  content="Fº"
                />
                <Button
                  onClick={() => this.setState({ unit: "K" })}
                  active={unit === "K"}
                  content="Kº"
                />
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Segment>

        <Title title="WEATHER APP" size="h1" image="045-weather.png" />

        <Grid centered>
          <Grid.Column width="15" verticalAlign="middle">
            <Menu unit={unit} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
