import React from 'react'
import ReactDOM from 'react-dom'
import Weather_API from './Weather_API'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  render() {
    return(

      <div>

        <h1>MyWeather App</h1>
      
        <button onClick={() => this.setState({city: 'La Plata'})}>La Plata City!</button>
        <button onClick={() => this.setState({city: 'Cordoba'})}>Cordoba City!</button>

        <Weather_API selected = {this.state.city}/>
      
      </div>

    );
  }
}

export default App;
