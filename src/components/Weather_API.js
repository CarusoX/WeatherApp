import React from 'react'

const API_KEY_1 = '98a269de24c9f822e8bb26e56a96575f'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FETCH = '/data/2.5/weather'

var url = ''
// var city_id = ''
var city_name = ''
var city_coord = []
// var city_zipcode = ''

var weather_state = ''
var weather_description = ''
var temperature = ''
var humidity = ''
var pressure = ''
var min_temp = ''
var max_temp = ''
var wind_speed = ''
var wind_direction = ''
var clouds = ''

class Weather_API extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            working: true,
            loading: true,
            valid: true,
            data: null,

            original_temp: '',
            original_min: '',
            original_max: '',
            unit: ''
        }
    }

    // I'll make it work by name first, then by other options
    fetch_data() {
        city_name = this.props.selected
        url = API_ENDPOINT + API_FETCH + '?q=' + city_name + '&appid=' + API_KEY_1;
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

            weather_state = this.state.data['weather'][0]['main']
            weather_description = this.state.data['weather'][0]['description']
            temperature = this.state.data['main']['temp']
            humidity = this.state.data['main']['humidity']
            pressure = this.state.data['main']['pressure']
            min_temp = this.state.data['main']['temp_min']
            max_temp = this.state.data['main']['temp_max']
            wind_speed = this.state.data['wind']['speed']
            wind_direction = this.state.data['wind']['deg']
            clouds = this.state.data['clouds']['all']

            // city_id = this.state.data['id']
            city_name = this.state.data['name']
            city_coord[0] = this.state.data['coord']['lon']
            city_coord[1] = this.state.data['coord']['lat']
            // city_zipcode = this.state.data['cod']
            
            this.state.original_temp = temperature
            this.state.original_min = min_temp
            this.state.original_max = max_temp

        }
    }

    updateUnit() {
        if(this.props.unit === 'Cº') {
            temperature = this.state.original_temp - 273.15
            min_temp = this.state.original_min - 273.15
            max_temp = this.state.original_max - 273.15
        } else if(this.props.unit === 'Fº') {
            temperature = ((this.state.original_temp - 273.15) * (9/5)) + 32
            min_temp = ((this.state.original_min - 273.15) * (9/5)) + 32
            max_temp = ((this.state.original_max - 273.15) * (9/5)) + 32
        } else {
            temperature = this.state.original_temp
            min_temp = this.state.original_min
            max_temp = this.state.original_max
        }
    }


    render() {
        if(this.state.working) { // We should change this, 'cos when it crashes once, then it never recovers

            if(this.props.selected !== '' && this.props.selected !== city_name) {
                this.fetch_data();
            } else if (this.props.selected === '') {
                return(
                    <div>
                        <p>Select a city!</p>
                    </div>
                )
            }

            if(this.props.unit !== this.state.unit) {
                this.updateUnit();
            }

            return(
    
                <div>
    
                    <h1>{city_name} Weather</h1>
    
                    <p>Weather State: {weather_state}</p>
                    <p>Weather Description: {weather_description}</p>
                    <p>Temperature: {temperature.toFixed(2)} {this.props.unit}</p>
                    <p>Humidity: {humidity} %</p>
                    <p>Pressure: {pressure} hPa</p>
                    <p>Minimum Temp: {min_temp.toFixed(2)} {this.props.unit}</p>
                    <p>Maximum Temp: {max_temp.toFixed(2)} {this.props.unit}</p>
                    <p>Wind Speed: {wind_speed} M/s</p>
                    <p>Wind Direction: {wind_direction}º</p>
                    <p>Clouds: {clouds} %</p>
    
                </div>
    
            )
    
        } else {
            return(
                <p>Sorry, you can only do 60 requests per minute</p>
            )
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

