import React from 'react'

const API_KEY_1 = '98a269de24c9f822e8bb26e56a96575f'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FETCH = '/data/2.5/weather'

class WeatherAPI extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: null,
      working: true,
      loading: true,
      valid: true
    }
  }

  fetch_data() {
    this.setState({ city: this.props.city }, () => {
      let url = API_ENDPOINT + API_FETCH + '?q=' + this.state.city + '&units=metric&appid=' + API_KEY_1;
      fetch(url).then((response) => {
        return response.json();
      }).then((data) => {
        return this.setState({ loading: false }, () => {
          this.set_values(data);
        })
      })
    })
  }

  set_values(data) {
    if (data && data.cod === "429") {
      this.setState({ working: false });
    } else if (data && data.cod === "401") {
      this.setState({ valid: false });
    } else if (data && data.cod === "400") {
      // Invalid search
      this.setState({ valid: false });
    } else if (data && data.cod === "404") {
      // Not found
      this.setState({ valid: false });
    }
    else {
      this.setState({ working: true, valid: true });

      let results = {
        'clouds': data['clouds']['all'],
        'wheater_state': data['weather'][0]['main'],
        'wheater_description': data['weather'][0]['description'],
        'temp': data['main']['temp'],
        'humidity': data['main']['humidity'],
        'pressure': data['main']['pressure'],
        'temp_min': data['main']['temp_min'],
        'temp_max': data['main']['temp_max'],
        'wind_speed': data['wind']['speed'],
        'wind_dir': data['wind']['deg'],
        'id': data['id'],
      }
      this.setState({working:false}, this.props.setData(results));
    }
  }

  componentDidUpdate() {
    if (this.props.city !== this.state.city) {
      this.fetch_data();
    }
  }
  render() {
    return null;
  }
}

export default WeatherAPI;





/*
60 requests per minute.

Calls are made by:

- city name
- city ID
- geographic coordinates
- ZIP code

Example calls:

by name
api.openweathermap.org/data/2.5/weather?q=London + apikey

by id
api.openweathermap.org/data/2.5/weather?id=2172797 + apikey

by coord
api.openweathermap.org/data/2.5/weather?lat=35&lon=139 + apikey

by zipcode
api.openweathermap.org/data/2.5/weather?zip=94040,us + apikey

Names
http://bulk.openweathermap.org/sample/

Returned Icons
https://openweathermap.org/weather-conditions

coords to install and implement:
https://www.npmjs.com/package/react-geolocated
*/

