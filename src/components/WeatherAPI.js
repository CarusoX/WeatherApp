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

            this.props.clouds(data['clouds']['all'])
            this.props.weather_state(data['weather'][0]['main'])
            this.props.weather_description(data['weather'][0]['description'])
            this.props.temperature(data['main']['temp'])
            this.props.humidity(data['main']['humidity'])
            this.props.pressure(data['main']['pressure'])
            this.props.min_temp(data['main']['temp_min'])
            this.props.max_temp(data['main']['temp_max'])
            this.props.wind_speed(data['wind']['speed'])
            this.props.wind_direction(data['wind']['deg'])
        }
    }

    componentDidUpdate() {
        if(this.props.city !== this.state.city) {
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

