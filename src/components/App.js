import React from 'react'
import Title from './Title'
import Tabs from './Tabs'
import SearchBar from './SearchBar'
import './App.css'


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

      <div>
      <Title />

      <SearchBar />
      <Tabs/>
      </div>
      // <div className='BigDiv'>

      //   <h1 className='title'>MyWeather App</h1>
      
      //   <button className='buttons' onClick={() => this.setState({city: 'La Plata'})}>La Plata City!</button>
      //   <button className='buttons' onClick={() => this.setState({city: 'Cordoba'})}>Cordoba City!</button>
      //   <form>
      //     <input className='textbox' type="text" placeholder="Search for a city here!"/>
      //   </form>
        
      //   <Weather_API className='BigDiv'
      //                selected = {this.state.city}
      //                unit = {this.state.unit}/>

      //   <button className='unitbutton' onClick={() => this.setState({unit: 'Kº'})}>Kelvin</button>
      //   <button className='unitbutton' onClick={() => this.setState({unit: 'Cº'})}>Celcius</button>
      //   <button className='unitbutton' onClick={() => this.setState({unit: 'Fº'})}>Fahrenheit</button>

      // </div>

    );
  }
}

export default App;
