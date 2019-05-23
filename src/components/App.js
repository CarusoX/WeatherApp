import React from 'react'
import ReactDOM from 'react-dom'
import Weather_API from './Weather_API'

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hi!</h1>
        <p>Test with La Plata city!</p>
        <Weather_API/>
        <p>La cata se debe estar cagando de frio tho</p>
      </div>
    );
  }
}

export default App;
