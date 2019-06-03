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
  const compress = [];
  result.forEach(day => {
    if (day.dt_txt.slice(11, 21) === "00:00:00") {
      const bestIcon = {};
      bestIcon[day.iconName] = 1;
      compress.push(Object.assign({ num: 1, bestIcon }, day));
    } else {
      const len = compress.length - 1;
      compress[len].temp += day.temp;
      compress[len].minTemp = Math.min(compress[len].minTemp, day.minTemp);
      compress[len].maxTemp = Math.max(compress[len].maxTemp, day.maxTemp);
      compress[len].num += 1;
      compress[len].bestIcon[day.iconName] += 1;
    }
  });
  return compress.map(day => {
    const newDay = day;
    newDay.temp /= newDay.num;
    newDay.temp = newDay.temp.toFixed(2);
    newDay.bestIcon = Object.keys(newDay.bestIcon)
      .sort((u, v) => {
        if (u.includes("n")) return 1;
        if (v.includes("n")) return -1;
        return newDay.bestIcon[u] - newDay.bestIcon[v];
      })
      .shift();
    return newDay;
  });
};

export const fetchData = city => {
  return Promise.all([
    getCurrentWeather(city.id),
    getForecastWeather(city.id),
    getUVIndex(city.coords),
    getUVForecast(city.coords),
    getUVHistory(city.coords)
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
