const API_KEY = process.env.API_KEY;
const API_ENDPOINT = process.env.API_ENDPOINT;
const API_FIND = process.env.API_FIND;
const API_WEATHER = process.env.API_WEATHER;
const API_FORECAST = process.env.API_FORECAST;
const API_UVI = process.env.API_UVI;
const API_UVF = process.env.API_UVF;
const API_UVH = process.env.API_UVH;

import { getMonthPeriod } from '../helpers/index.ts'

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

const getUVHistory = (coords) => {
  const period = getMonthPeriod();
  const url = `${API_ENDPOINT}${API_UVH}?appid=${API_KEY}&lat=${coords.lat}&lon=${coords.lon}&start=${period.start}&end=${period.end}`;
  return fetch(url);
}

const filterDay = (result) => {
  return ({
    'weather_state': result['weather'][0]['main'],
    'weather_icon': result['weather'][0]['icon'],
    'temp': Number(result['main']['temp']),
    'humidity': result['main']['humidity'],
    'pressure': result['main']['pressure'],
    'min_temp': Number(result['main']['temp_min']),
    'max_temp': Number(result['main']['temp_max']),
    'wind_speed': result['wind']['speed'],
    'wind_dir': result['wind']['deg'],
    'clouds': result['clouds']['all'],
    'sunrise': result['sys']['sunrise'],
    'sunset': result['sys']['sunset']
  })
}

const compressDays = (result) => {
  return result.reduce((a, b, i) => {
    if (b.dt_txt.slice(11, 21) === '00:00:00') {
      if (a.length) {
        a[a.length - 1]['temp'] /= a[a.length - 1]['num'];
        a[a.length - 1]['temp'] = a[a.length - 1]['temp'].toFixed(2);
      }
      a.push(Object.assign(b, { 'num': 0 }));
    }
    else {
      a[a.length - 1]['min_temp'] = Math.min(a[a.length - 1]['min_temp'], b['min_temp']);
      a[a.length - 1]['max_temp'] = Math.max(a[a.length - 1]['max_temp'], b['max_temp']);
      a[a.length - 1]['temp'] += b.temp;
      a[a.length - 1]['num']++;
    }
    if (i == result.length - 1) {
      a[a.length - 1]['temp'] /= a[a.length - 1]['num'];
      a[a.length - 1]['temp'] = a[a.length - 1]['temp'].toFixed(2);
    }
    return a;
  }, [])
}

export const fetch_data = (city) => {
  return Promise.all([
    getCurrentWeather(city.city_id),
    getForecastWeather(city.city_id),
    getUVIndex(city.coords),
    getUVForecast(city.coords),
    getUVHistory(city.coords),
  ]).then(responses => {
    if (responses.filter(response => !response.ok).length)
      throw Error('Error on fetch')
    return Promise.all(responses.map(result => result.json()))
  }).then(results => {

    if (results.cod === "401") { // Invalid API Key
      return 1
    } else if (results.cod === "404") { // Wrong Search
      return 2
    } else if (results.cod === "429") { // API Key Blocked
      return 3
    } else if (results.cod === "501") { // Server Error
      return 4
    }


    const detailed_days = results[1]['list'].reduce((a, b) => {
      if (a.length)
        a.push(Object.assign(filterDay(b), { 'dt_txt': b.dt_txt }))
      else if (b.dt_txt.slice(11, 21) === '00:00:00')
        a.push(Object.assign(filterDay(b), { 'dt_txt': b.dt_txt }))
      return a
    }, [])

    return ({
      "results": [
        // Current
        filterDay(results[0]),

        // Forecast
        {
          'detailed_days': detailed_days,
          'days': compressDays(detailed_days)
        },

        // UVI
        {
          'uv_index': results[2]['value'],
          'uv_forecast': results[3].map(day => {
            return {
              'index': day['value'],
              'date': day['date_iso'].slice(0, 10).split('-').join('/')
            }
          }),
          'uv_history': results[4]
        }
      ]
    });
  })
  .catch(err => console.log(err));
  // TODO: do something with these errors
}

export const fetch_cities = (city) => {
  return getCityList(city)
    .then(response => {
      if (!response.ok)
        throw Error('Error on fetch');
      return response.json()
    })
    .then(data => {
      if (data.cod === "401") { // Invalid API Key
        return 1
      } else if (data.cod === "404") { // Wrong Search
        return 2
      } else if (data.cod === "429") { // API Key Blocked
        return 3
      } else if (data.cod === "501") { // Server Error
        return 4
      }
      return data['list']
    })
    .catch(err => console.log(err));
  // TODO: do something with these errors
}