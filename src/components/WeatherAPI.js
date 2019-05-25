const API_KEY_1 = '98a269de24c9f822e8bb26e56a96575f'
const API_ENDPOINT = 'http://api.openweathermap.org'
const API_FETCH = '/data/2.5/weather'
const API_UVI = '/data/2.5/uvi'

const getCurrentWeather = (city) => {
  const url = `${API_ENDPOINT}${API_FETCH}?q=${city}&units=metric&appid=${API_KEY_1}`;
  return fetch(url)
}

const getUVIndex = (coords) => {
  const url = `${API_ENDPOINT}${API_UVI}?appid=${API_KEY_1}&lat=${coords.lat}&lon=${coords.lon}`;
  return fetch(url);
}

export const fetch_data = async (city) => {

  // Different api-calls
  const tasks = [
    getCurrentWeather, getCurrentWeather, getUVIndex
  ];

  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then(chainResults => {
      // Distribute arguments
      let arg = '';
      if (currentTask === getCurrentWeather) arg = city;
      if (currentTask === getUVIndex) arg = chainResults[0]['coord'];
      // Call the api
      return currentTask(arg).then(currentResult => {
        // Extract and concat the result
        return currentResult.json().then(result => [...chainResults, result])
      })
    });
  }, Promise.resolve([])).then(responses => {
    // Now here we have an array of responses
    // Every response is either data or a message with an error code

    // Seeks errors -- TODO: Return real errors to app
    if (responses.filter((instance) => instance.cod === "429").length) {
      // {What error?}
      return null;
    }
    if (responses.filter((instance) => instance.cod === "401").length) {
      // {What error?}
      return null;
    }
    if (responses.filter((instance) => instance.cod === "400").length) {
      // Invalid search
      return null;
    }
    if (responses.filter((instance) => instance.cod === "404").length) {
      // Not found
      return null;
    }
    let results = {
      "results": [
        {
          'weather_id': responses[0]['weather'][0]['id'],
          'weather_state': responses[0]['weather'][0]['main'],
          'weather_description': responses[0]['weather'][0]['description'],
          'temp': responses[0]['main']['temp'],
          'humidity': responses[0]['main']['humidity'],
          'pressure': responses[0]['main']['pressure'],
          'min_temp': responses[0]['main']['temp_min'],
          'max_temp': responses[0]['main']['temp_max'],
          'wind_speed': responses[0]['wind']['speed'],
          'wind_dir': responses[0]['wind']['deg'],
          'clouds': responses[0]['clouds']['all'],
          'id': responses[0]['id'],
        },
        // Forecast
        {

        },
        // UVI
        {
          'uvi_index': responses[2]['value'],
        }
      ]
    };
    return results;
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

