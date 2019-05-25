const API_KEY_1 = '98a269de24c9f822e8bb26e56a96575f'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FETCH = '/data/2.5/weather'

const constructCurrentWeatherURL = (city, unit) => {
  let url = API_ENDPOINT + API_FETCH + '?q=' + city;

  if (unit === 'Cº') url += '&units=metric&appid=';
  else if (unit === 'Fº') url += '&units=imperial&appid=';
  else url += '&appid=';

  url += API_KEY_1

  return url;
}

export const fetch_data = (city, unit) => {
  // Different urls
  let currentWeatherURL = constructCurrentWeatherURL(city, unit);

  // API calls
  let currentWeather = fetch(currentWeatherURL);

  return Promise.all([currentWeather]).then(async (responses) => {
    // TODO: manage errors of fetchs

    // Extract values on success
    return await Promise.all(responses.map((response) => response.json()))
  }).then((data) => {
    if (data.filter((instance) => instance.cod === "429").length) {
      // What error?
      return null;
    }
    if (data.filter((instance) => instance.cod === "401").length) {
      // What error?
      return null;
    }
    if (data.filter((instance) => instance.cod === "400").length) {
      // Invalid search
      return null;
    }
    if (data.filter((instance) => instance.cod === "404").length) {
      // Not found
      return null;
    }
    // More errors?

    // Filter values
    let results = {
      "results": [
        {
          'weather_id': data[0]['weather'][0]['id'],
          'weather_state': data[0]['weather'][0]['main'],
          'weather_description': data[0]['weather'][0]['description'],
          'temp': data[0]['main']['temp'],
          'humidity': data[0]['main']['humidity'],
          'pressure': data[0]['main']['pressure'],
          'min_temp': data[0]['main']['temp_min'],
          'max_temp': data[0]['main']['temp_max'],
          'wind_speed': data[0]['wind']['speed'],
          'wind_dir': data[0]['wind']['deg'],
          'clouds': data[0]['clouds']['all'],
          'id': data[0]['id'],
        },
        // Forecast
        {

        },
        // UVI
        {

        }
      ]
    };
    console.log(results);
    return results;
  });
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

