import React, { Component } from "react";
import { Button, Container, Grid, Segment } from "semantic-ui-react";
import { Title } from "./Title/index.ts";
import { Menu } from "./Menu/index.ts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 2,
      unit: "C"
    };
  }

  render() {
    const { unit, theme } = this.state;
    return (
      <Container fluid>
        <Segment>
          <Grid>
            <Grid.Column textAlign="center">
              <Button
                floated="left"
                color="blue"
                size="mini"
                inverted
                content={`Theme ${theme}`}
                active={false}
                onClick={() => {
                  if (theme === 1) return this.setState({ theme: 2 });
                  return this.setState({ theme: 1 });
                }}
              />
              <Button.Group floated="right" size="mini" inverted color="blue">
                <Button
                  onClick={() => this.setState({ unit: "C" })}
                  active={unit === "C"}
                  content="ºC"
                />
                <Button
                  onClick={() => this.setState({ unit: "F" })}
                  active={unit === "F"}
                  content="ºF"
                />
                <Button
                  onClick={() => this.setState({ unit: "K" })}
                  active={unit === "K"}
                  content="ºK"
                />
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Segment>

        <Title title="WEATHER APP" size="h1" theme={theme} />

        <Grid centered>
          <Grid.Column width="15" verticalAlign="middle">
            <Menu unit={unit} theme={theme} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
