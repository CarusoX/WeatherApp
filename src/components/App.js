import React from 'react'
import ReactDOM from 'react-dom'
import Weather_API from './Weather_API'
import './App.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  render() {
    return(

      <div className='BigDiv'>

        <h1 className='title'>MyWeather App</h1>
      
        <button className='buttons' onClick={() => this.setState({city: 'La Plata'})}>La Plata City!</button>
        <button className='buttons' onClick={() => this.setState({city: 'Cordoba'})}>Cordoba City!</button>

        <Weather_API className='BigDiv' selected = {this.state.city}/>
      
      </div>

    );
  }
}

export default App;
