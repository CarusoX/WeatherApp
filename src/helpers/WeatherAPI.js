/* eslint-disable no-param-reassign */

import { getMonthPeriod } from "./index.ts";

const { API_KEY } = process.env;
const { API_ENDPOINT } = process.env;
const { API_FIND } = process.env;
const { API_WEATHER } = process.env;
const { API_FORECAST } = process.env;
const { API_UVI } = process.env;
const { API_UVF } = process.env;
const { API_UVH } = process.env;

const getCityList = city => {
  const url = `${API_ENDPOINT}${API_FIND}?q=${city}&appid=${API_KEY}`;
  return fetch(url);
};

const getCurrentWeather = id => {
  const url = `${API_ENDPOINT}${API_WEATHER}?id=${id}&units=metric&appid=${API_KEY}`;
  return fetch(url);
};

const getForecastWeather = id => {
  const url = `${API_ENDPOINT}${API_FORECAST}?id=${id}&units=metric&appid=${API_KEY}`;
  return fetch(url);
};

const getUVIndex = coords => {
  const url = `${API_ENDPOINT}${API_UVI}?appid=${API_KEY}&lat=${
    coords.lat
  }&lon=${coords.lon}`;
  return fetch(url);
};

const getUVForecast = coords => {
  const url = `${API_ENDPOINT}${API_UVF}?appid=${API_KEY}&lat=${
    coords.lat
  }&lon=${coords.lon}&cnt=4`;
  return fetch(url);
};

const getUVHistory = coords => {
  const period = getMonthPeriod();
  const url = `${API_ENDPOINT}${API_UVH}?appid=${API_KEY}&lat=${
    coords.lat
  }&lon=${coords.lon}&start=${period.start}&end=${period.end}`;
  return fetch(url);
};

const filterDay = result => {
  return {
    state: result.weather[0].main,
    icon: result.weather[0].icon,
    temp: result.main.temp,
    humidity: result.main.humidity,
    pressure: result.main.pressure,
    minTemp: result.main.temp_min,
    maxTemp: result.main.temp_max,
    windSpeed: result.wind.speed,
    windDir: result.wind.deg,
    clouds: result.clouds.all,
    sunrise: result.sys.sunrise,
    sunset: result.sys.sunset
  };
};

const compressDays = result => {
  return result.reduce((a, b, i) => {
    const len = a.length - 1;
    if (b.dt_txt.slice(11, 21) === "00:00:00") {
      if (a.length) {
        a[len].temp /= a[len].num;
        a[len].temp = a[len].temp.toFixed(2);
      }
      a.push(Object.assign({ num: 1 }, b));
    } else {
      a[len].min_temp = Math.min(a[len].min_temp, b.min_temp);
      a[len].max_temp = Math.max(a[len].max_temp, b.max_temp);
      a[len].temp += b.temp;
      a[len].num += 1;
    }

    if (b.dt_txt.slice(11, 21) === "12:00:00") {
      a[len].weather_icon = b.weather_icon;
    }

    if (i === result.length - 1) {
      a[len].temp /= a[len].num;
      a[len].temp = a[len].temp.toFixed(2);
    }
    return a;
  }, []);
};

export const fetchData = city => {
  return Promise.all([
    getCurrentWeather(city.city_id),
    getForecastWeather(city.city_id),
    getUVIndex(city.coords),
    getUVForecast(city.coords),
    getUVHistory(city.coords)
  ])
    .then(responses => {
      if (responses.filter(response => !response.ok).length)
        throw Error("Error on fetch");
      return Promise.all(responses.map(result => result.json()));
    })
    .then(results => {
      if (results.cod === "401")
        // Invalid API Key
        return 1;
      if (results.cod === "404")
        // Wrong Search
        return 2;
      if (results.cod === "429")
        // API Key Blocked
        return 3;
      if (results.cod === "501")
        // Server Error
        return 4;

      const DetailedDays = results[1].list.reduce((a, b) => {
        if (a.length) a.push(Object.assign(filterDay(b), { dt_txt: b.dt_txt }));
        else if (b.dt_txt.slice(11, 21) === "00:00:00")
          a.push(Object.assign(filterDay(b), { dt_txt: b.dt_txt }));
        return a;
      }, []);

      return {
        results: [
          // Current
          filterDay(results[0]),

          // Forecast
          {
            detailedDays: DetailedDays,
            days: compressDays(DetailedDays)
          },

          // UVI
          {
            index: results[2].value,
            forecast: results[3].map(day => {
              return {
                index: day.value,
                date: day.date_iso
                  .slice(0, 10)
                  .split("-")
                  .join("/")
              };
            }),
            history: results[4]
          }
        ]
      };
    })
    .catch(err => console.log(err));
  // TODO: do something with these errors
};

export const fetchCities = city => {
  return getCityList(city)
    .then(response => {
      if (!response.ok) throw Error("Error on fetch");
      return response.json();
    })
    .then(data => {
      if (data.cod === "401")
        // Invalid API Key
        return 1;
      if (data.cod === "404")
        // Wrong Search
        return 2;
      if (data.cod === "429")
        // API Key Blocked
        return 3;
      if (data.cod === "501")
        // Server Error
        return 4;

      return data.list;
    })
    .catch(err => console.log(err));
  // TODO: do something with these errors
};
