import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Weather_API from './Weather_API'

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

  handleInput = () => {
    this.props.newcity(this.state.value);
    let update = <Weather_API city={this.state.value} />;
    console.log(update)
  }

  render() {
    return (
      <div style={{margin: 30 }} class="ui one column stackable center aligned page grid">
        <Form onSubmit={this.handleInput}>
          <Form.Group>
            <Form.Input placeholder='Search city...' name='city' onChange={this.handleChange} />
            <Form.Button icon="search"/>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
