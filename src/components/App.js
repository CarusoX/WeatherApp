import React from 'react'
import Title from './Title'
import Tabs from './Tabs'
import SearchBar from './SearchBar'
import { Container } from 'semantic-ui-react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unit: 'Cº',
      city: ''
    }
  }

  render() {
    return(
      <Container fluid>
        <Title />
        <SearchBar />
        <Tabs/>
      </Container>
    );
  }
}

export default App;
