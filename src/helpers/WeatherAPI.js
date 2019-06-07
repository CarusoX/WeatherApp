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

const getCurrentWeather = coords => {
  const url = `${API_ENDPOINT}${API_WEATHER}?lat=${coords.lat}&lon=${
    coords.lon
  }&units=metric&appid=${API_KEY}`;
  return fetch(url);
};

const getForecastWeather = coords => {
  const url = `${API_ENDPOINT}${API_FORECAST}?lat=${coords.lat}&lon=${
    coords.lon
  }&units=metric&appid=${API_KEY}`;
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
    city: { name: result.name, id: result.id },
    state: result.weather[0].main,
    iconName: result.weather[0].icon,
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
        a[len].bestIcon = Object.keys(a[len].bestIcon)
          .sort((u, v) => {
            if (u.includes("n")) return 1;
            if (v.includes("n")) return -1;
            return a[len].bestIcon[u] - a[len].bestIcon[v];
          })
          .shift();
      }
      b.bestIcon = {};
      b.bestIcon[b.iconName] = 1;
      a.push(Object.assign({ num: 1 }, b));
    } else {
      a[len].minTemp = Math.min(a[len].minTemp, b.minTemp);
      a[len].maxTemp = Math.max(a[len].maxTemp, b.maxTemp);
      a[len].temp += b.temp;
      a[len].num += 1;
      if (a[len].bestIcon[b.iconName] === undefined)
        a[len].bestIcon[b.iconName] = 1;
      else a[len].bestIcon[b.iconName] += 1;
    }

    if (i === result.length - 1) {
      const last = a.length - 1;
      a[last].bestIcon = Object.keys(a[last].bestIcon)
        .sort((u, v) => {
          if (u.includes("n")) return 1;
          if (v.includes("n")) return -1;
          return a[last].bestIcon[u] - a[last].bestIcon[v];
        })
        .shift();
      a[last].temp /= a[last].num;
      a[last].temp = a[last].temp.toFixed(2);
    }
    return a;
  }, []);
};

export const fetchData = coords => {
  return Promise.all([
    getCurrentWeather(coords),
    getForecastWeather(coords),
    getUVIndex(coords),
    getUVForecast(coords),
    getUVHistory(coords)
  ])
    .then(responses => {
      if (responses.filter(response => !response.ok).length) throw Error();
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
    .catch(() => null);
};

export const fetchCities = city => {
  return getCityList(city)
    .then(response => {
      if (!response.ok) throw Error();
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
    .catch(() => null);
};
