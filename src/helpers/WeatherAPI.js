const API_KEY=process.env.API_KEY;
const API_ENDPOINT=process.env.API_ENDPOINT;
const API_FIND=process.env.API_FIND;
const API_WEATHER=process.env.API_WEATHER;
const API_FORECAST=process.env.API_FORECAST;
const API_UVI=process.env.API_UVI;
const API_UVF=process.env.API_UVF;
const API_UVH=process.env.API_UVH;

const getCityList = (city) => {
  const url = `${API_ENDPOINT}${API_FIND}?q=${city}&appid=${API_KEY}`;
  return fetch(url);
}

const getCurrentWeather = (id) => {
  const url = `${API_ENDPOINT}${API_WEATHER}?id=${id}&units=metric&appid=${API_KEY}`;
  return fetch(url);
}

const getForecastWeather = (id) => {
  const url = `${API_ENDPOINT}${API_FORECAST}?id=${id}&units=metric&appid=${API_KEY}`;
  return fetch(url);
}

const getUVIndex = (coords) => {
  const url = `${API_ENDPOINT}${API_UVI}?appid=${API_KEY}&lat=${coords.lat}&lon=${coords.lon}`;
  return fetch(url);
}

const getUVForecast = (coords) => {
  const url = `${API_ENDPOINT}${API_UVF}?appid=${API_KEY}&lat=${coords.lat}&lon=${coords.lon}&cnt=4`;
  return fetch(url);
}

// const getUVHistory = (coords) => {
//   // TODO: Need to find a way to work with UNIX time
//   const url = `${API_ENDPOINT}${API_UVH}?appid=${API_KEY_1}&lat=${coords.lat}&lon=${coords.lon}`;
//   return fetch(url);
// }

export const fetch_data = (city) => {

  return Promise.all([
    getCurrentWeather(city.city_id),
    getForecastWeather(city.city_id),
    getUVIndex(city.coords),
    getUVForecast(city.coords),
    // getUVHistory(city.coords),
  ]).then(responses => {
    return Promise.all(responses.map(result => result.json()))
  }).then(results => {

    if(results.cod === 401) { // Invalid API Key
      return 1
    } else if (results.cod === 404) { // Wrong Search
      return 2
    } else if (results.cod === 429) { // API Key Blocked
      return 3
    } else if (results.cod === 501) { // Server Error
      return 4
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
          'list': results[1]['list'],
        },
        // UVI
        {
          'uvi_index': results[2]['value'],
          'uvi_forecast': results[3].map((_) => _['value'])
        }
      ]
    };
    return data;
  })
}

export const fetch_cities = (city) => {
  return getCityList(city).then(response => {
    return response.json()
  }).then(data => {
    if(results.cod === 401) { // Invalid API Key
      return 1
    } else if (results.cod === 404) { // Wrong Search
      return 2
    } else if (results.cod === 429) { // API Key Blocked
      return 3
    } else if (results.cod === 501) { // Server Error
      return 4
    }
    return data['list']
  })
}