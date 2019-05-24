import React from 'react'

const API_KEY_1 = '98a269de24c9f822e8bb26e56a96575f'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FETCH = '/data/2.5/weather'

var url = ''
var last_fetch = ''

class Weather_API extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            working: true,
            loading: true,
            valid: true,
            data: null,
        }
    }

    // I'll make it work by name first, then by other options
    fetch_data() {
        last_fetch = this.props.city
        url = API_ENDPOINT + API_FETCH + '?q=' + last_fetch + '&appid=' + API_KEY_1;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            return this.setState({data, loading: false}, () => {
                this.set_values();
            })
        })
    }

    set_values() {
        if(this.data && this.data.cod === 429) {
            this.setState({working: false});
        } else if (this.data && this.data.cod === 401) {
            this.setState({valid: false});
        } else {
            this.setState({working: true, valid: true});

            this.props.clouds(this.state.data['clouds']['all'])
            this.props.weather_state(this.state.data['weather'][0]['main'])
            this.props.weather_description(this.state.data['weather'][0]['description'])
            this.props.temperature(this.state.data['main']['temp'])
            this.props.humidity(this.state.data['main']['humidity'])
            this.props.pressure(this.state.data['main']['pressure'])
            this.props.min_temp(this.state.data['main']['temp_min'])
            this.props.max_temp(this.state.data['main']['temp_max'])
            this.props.wind_speed(this.state.data['wind']['speed'])
            this.props.wind_direction(this.state.data['wind']['deg'])
        }
    }

    render() {
        if(this.state.working) { // We should change this, 'cos when it crashes once, then it never recovers

            if(this.props.city !== '' && this.props.city !== last_fetch) {
                this.fetch_data();
            }

            return(<p/>)
    
        }
    }

}

export default Weather_API;





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

