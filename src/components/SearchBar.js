import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


const API_KEY_1 = '98a269de24c9f822e8bb26e56a96575f'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FETCH = '/data/2.5/weather'

const initialState = { value: '' }

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleChange = (e, { value }) => {
    this.setState({ value })
  }

  handleFetch = () => {
    this.props.newcity(this.state.value)
    let url = API_ENDPOINT + API_FETCH + '?q=' + this.state.value + '&appid=' + API_KEY_1;
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    })
  }

  render() {
    return (
      <div style={{margin: 30}} class="ui one column stackable center aligned page grid">
        <Form onSubmit={this.handleFetch}>
          <Form.Group>
            <Form.Input placeholder='Search city...' name='city' onChange={this.handleChange} />
            <Form.Button icon="search"/>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
