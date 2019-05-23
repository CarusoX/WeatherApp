import React, Component from 'react'
import ReactDOM from 'react-dom'

const API_KEY_1 = '98a269de24c9f822e8bb26e56a96575f'
const API_ENDPOINT = 'api.openweathermap.org'
const API_FETCH = '/data/2.5/weather?'

var url = ''
var city_id = ''
var city_name = ''
var city_coord = []
var city_zipcode = ''

var weather_state = ''
var weather_description = ''
var temperature = ''
var humidity = ''
var pressure = ''
var min_temp = ''
var max_temp = ''
var wind_speed = ''
var wind_direction = ''
var rain = ''
var clouds = ''

class Weather_API extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            frequency: true,
            loading: true,
            data: null
        }
    }

    // I'll make it work by name first, then by other options
    fetch_data() {
        url = API_ENDPOINT + API_FETCH + '?q=' + city_name;

        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            return this.setState({data, loading: false}, () => {
                this.set_values();
            })
        })
    }

    set_values() {
        if(data.cod === 429) {
            this.setState({frequency: false});
        } else {
            weather_state = this.state.data['weather']['main']
            weather_description = this.state.data['weather']['description']
            temperature = this.state.data['main']['temp']
            humidity = this.state.data['main']['humidity']
            pressure = this.state.data['main']['pressure']
            min_temp = this.state.data['main']['temp_min']
            max_temp = this.state.data['main']['temp_max']
            wind_speed = this.state.data['wind']['speed']
            wind_direction = this.state.data['wind']['deg']
            rain = this.state.data['rain']['3h']
            clouds = this.state.data['clouds']['all']

            city_id = this.state.data['id']
            city_name = this.state.data['name']
            city_coord[0] = this.state.data['coord']['lon'] //longitude
            city_coord[1] = this.state.data['coord']['lat'] //latitude
            city_zipcode = this.state.data['cod']
        }
    }

}

/*

60 requests per minute. 

Calls are made by:

- city name
- city ID
- geographic coordinates
- ZIP code

error response:
{
"cod": 429,
"message": "Your account is temporary blocked due to exceeding of requests limitation of your subscription type. 
Please choose the proper subscription http://openweathermap.org/price"
}

Example calls: 

by name
api.openweathermap.org/data/2.5/weather?q=London

by id
api.openweathermap.org/data/2.5/weather?id=2172797

by coord
api.openweathermap.org/data/2.5/weather?lat=35&lon=139

by zipcode
api.openweathermap.org/data/2.5/weather?zip=94040,us

*/

