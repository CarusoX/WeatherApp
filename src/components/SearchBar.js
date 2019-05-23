import React, { Component } from 'react'
import { Container, Form, Grid, Icon } from 'semantic-ui-react'


const API_KEY_1 = '98a269de24c9f822e8bb26e56a96575f'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FETCH = '/data/2.5/weather'

const initialState = { value: '' }

export default class SearchBar extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleChange = (e, { value }) => {
    this.setState({ value })
  }
  handleFetch = () => {
    let url = API_ENDPOINT + API_FETCH + '?q=' + this.state.value + '&appid=' + API_KEY_1;
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <Container fluid>
        <Grid centered={true}>
          <Grid.Column>
            <Form onSubmit={this.handleFetch}>
              <Form.Group>
                <Form.Input placeholder='City' name='city'  onChange={this.handleChange} />
                <Form.Button icon="search"/>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}