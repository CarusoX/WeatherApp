const iconmap = {
  "01d": "036-sun",
  "01n": "024-moon",
  "02d": "007-cloudy day",
  "02n": "025-night",
  "03d": "003-cloud",
  "03n": "003-cloud",
  "04d": "004-clouds",
  "04n": "004-clouds",
  "09d": "027-rain",
  "09n": "027-rain",
  "10d": "046-weather",
  "10n": "046-weather",
  "11d": "041-thunderstorm",
  "11n": "041-thunderstorm",
  "13d": "032-snowy",
  "13n": "033-snowy",
  "50d": "016-haze",
  "50n": "016-haze"
};

// const a = require("../icons/Theme2/036-sun.png");

// const theme2 = {
//   "01d": require("../icons/Theme2/036-sun.png"),
//   "01n": require("../icons/Theme2/024-moon"),
//   "02d": require("../icons/Theme2/007-cloudy day"),
//   "02n": require("../icons/Theme2/025-night"),
//   "03d": require("../icons/Theme2/003-cloud"),
//   "03n": require("../icons/Theme2/003-cloud"),
//   "04d": require("../icons/Theme2/004-clouds"),
//   "04n": require("../icons/Theme2/004-clouds"),
//   "09d": require("../icons/Theme2/027-rain"),
//   "09n": require("../icons/Theme2/027-rain"),
//   "10d": require("../icons/Theme2/046-weather"),
//   "10n": require("../icons/Theme2/046-weather"),
//   "11d": require("../icons/Theme2/041-thunderstorm"),
//   "11n": require("../icons/Theme2/041-thunderstorm"),
//   "13d": require("../icons/Theme2/032-snowy"),
//   "13n": require("../icons/Theme2/033-snowy"),
//   "50d": require("../icons/Theme2/016-haze"),
//   "50n": require("../icons/Theme2/016-haze")
// };

const getIconName = code => {
  return iconmap[code];
};

export default getIconName;
