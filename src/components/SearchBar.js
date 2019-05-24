import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class SearchBar extends Component {

  handleChange = (e, { value }) => {
    this.setState({ value });
  }

  handleInput = () => {
    this.props.newcity(this.state.value);
  }

  render() {
    return (
      <div style={{ margin: 30 }} class="ui one column stackable center aligned page grid">
        <Form onSubmit={this.handleInput}>
          <Form.Group>
            <Form.Input placeholder='Search city...' name='city' onChange={this.handleChange} />
            <Form.Button icon="search" />
          </Form.Group>
        </Form>
      </div>
    )
  }
}
