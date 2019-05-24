import React from 'react'

const API_KEY_1 = '44dcc5512287c61aacb75ea1685bae29'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FETCH = '/data/2.5/forecast/daily'

var url = ''
var last_fetch = ''
var cnt = 5

class Forecast_API extends React.Component {
    
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
        url = API_ENDPOINT + API_FETCH + '?q=' + last_fetch + '&cnt=' + cnt + '&appid=' + API_KEY_1;
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

            this.props.list(this.state.data['list'])
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

export default Forecast_API;





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

