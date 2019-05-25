const API_KEY_1 = '98a269de24c9f822e8bb26e56a96575f'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FIND = '/data/2.5/find'
const API_WEATHER = '/data/2.5/weather'
const API_UVI = '/data/2.5/uvi'

const getCityList = (city) => {
  const url = `${API_ENDPOINT}${API_FIND}?q=${city}&appid=${API_KEY_1}`;
  return fetch(url);
}

const getCurrentWeather = (id) => {
  const url = `${API_ENDPOINT}${API_WEATHER}?id=${id}&units=metric&appid=${API_KEY_1}`;
  return fetch(url);
}

const getUVIndex = (coords) => {
  const url = `${API_ENDPOINT}${API_UVI}?appid=${API_KEY_1}&lat=${coords.lat}&lon=${coords.lon}`;
  return fetch(url);
}

export const fetch_data = async (city) => {

  return Promise.all([
    getCurrentWeather(city.city_id),
    getCurrentWeather(city.city_id),
    getUVIndex(city.coords),
  ]).then(responses => {
    console.log(responses);
    return Promise.all(responses.map(result => result.json()))
  }).then(results => {
    if (results.filter((instance) => instance.cod === "429").length) {
      // {What error?}
      return null;
    }
    if (results.filter((instance) => instance.cod === "401").length) {
      // {What error?}
      return null;
    }
    if (results.filter((instance) => instance.cod === "400").length) {
      // Invalid search
      return null;
    }
    if (results.filter((instance) => instance.cod === "404").length) {
      // Not found
      return null;
    }
    let data = {
      "results": [
        {
          'weather_id': results[0]['weather'][0]['id'],
          'weather_state': results[0]['weather'][0]['main'],
          'weather_description': results[0]['weather'][0]['description'],
          'temp': results[0]['main']['temp'],
          'humidity': results[0]['main']['humidity'],
          'pressure': results[0]['main']['pressure'],
          'min_temp': results[0]['main']['temp_min'],
          'max_temp': results[0]['main']['temp_max'],
          'wind_speed': results[0]['wind']['speed'],
          'wind_dir': results[0]['wind']['deg'],
          'clouds': results[0]['clouds']['all'],
          'id': results[0]['id'],
        },
        // Forecast
        {

        },
        // UVI
        {
          'uvi_index': results[2]['value'],
        }
      ]
    };
    return data;
  })
}

export const fetch_cities = (city) => {
  return getCityList(city).then(response => response.json())
    .then(data => {
      if (data.cod === '400') return null;
      if (data.cod === '404') return null;
      return data['list']
    })
}

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

