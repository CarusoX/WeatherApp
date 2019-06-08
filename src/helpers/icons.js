// Icon map of theme 1
const a01d = require("../icons/Theme1/036-sun.png");
const a01n = require("../icons/Theme1/024-moon.png");
const a02d = require("../icons/Theme1/007-cloudy day.png");
const a02n = require("../icons/Theme1/025-night.png");
const a03d = require("../icons/Theme1/003-cloud.png");
const a03n = require("../icons/Theme1/003-cloud.png");
const a04d = require("../icons/Theme1/004-clouds.png");
const a04n = require("../icons/Theme1/004-clouds.png");
const a09d = require("../icons/Theme1/027-rain.png");
const a09n = require("../icons/Theme1/027-rain.png");
const a10d = require("../icons/Theme1/046-weather.png");
const a10n = require("../icons/Theme1/046-weather.png");
const a11d = require("../icons/Theme1/041-thunderstorm.png");
const a11n = require("../icons/Theme1/041-thunderstorm.png");
const a13d = require("../icons/Theme1/032-snowy.png");
const a13n = require("../icons/Theme1/033-snowy.png");
const a50d = require("../icons/Theme1/016-haze.png");
const a50n = require("../icons/Theme1/016-haze.png");

// Icon map of theme 2
const b01d = require("../icons/Theme2/036-sun.png");
const b01n = require("../icons/Theme2/024-moon.png");
const b02d = require("../icons/Theme2/007-cloudy day.png");
const b02n = require("../icons/Theme2/025-night.png");
const b03d = require("../icons/Theme2/003-cloud.png");
const b03n = require("../icons/Theme2/003-cloud.png");
const b04d = require("../icons/Theme2/004-clouds.png");
const b04n = require("../icons/Theme2/004-clouds.png");
const b09d = require("../icons/Theme2/027-rain.png");
const b09n = require("../icons/Theme2/027-rain.png");
const b10d = require("../icons/Theme2/046-weather.png");
const b10n = require("../icons/Theme2/046-weather.png");
const b11d = require("../icons/Theme2/041-thunderstorm.png");
const b11n = require("../icons/Theme2/041-thunderstorm.png");
const b13d = require("../icons/Theme2/032-snowy.png");
const b13n = require("../icons/Theme2/033-snowy.png");
const b50d = require("../icons/Theme2/016-haze.png");
const b50n = require("../icons/Theme2/016-haze.png");

// Icon for errors
const code1 = require("../images/invalid_key.png");
const code2 = require("../images/wrong_search.png");
const code3 = require("../images/blocked_key.png");
const code4 = require("../images/server_error.png");

const iconmap1 = {
  "01d": a01d,
  "01n": a01n,
  "02d": a02d,
  "02n": a02n,
  "03d": a03d,
  "03n": a03n,
  "04d": a04d,
  "04n": a04n,
  "09d": a09d,
  "09n": a09n,
  "10d": a10d,
  "10n": a10n,
  "11d": a11d,
  "11n": a11n,
  "13d": a13d,
  "13n": a13n,
  "50d": a50d,
  "50n": a50n
};

const iconmap2 = {
  "01d": b01d,
  "01n": b01n,
  "02d": b02d,
  "02n": b02n,
  "03d": b03d,
  "03n": b03n,
  "04d": b04d,
  "04n": b04n,
  "09d": b09d,
  "09n": b09n,
  "10d": b10d,
  "10n": b10n,
  "11d": b11d,
  "11n": b11n,
  "13d": b13d,
  "13n": b13n,
  "50d": b50d,
  "50n": b50n
};

const ErrorImages = {
  1: code1,
  2: code2,
  3: code3,
  4: code4
};

export const getIconName = (code, theme) => {
  if (theme === 1) return iconmap1[code];
  return iconmap2[code];
};

export const getErrorImage = error => {
  return ErrorImages[error];
};
