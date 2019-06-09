const iconmap = {
  "01d": "036-sun.png",
  "01n": "024-moon.png",
  "02d": "007-cloudy day.png",
  "02n": "025-night.png",
  "03d": "003-cloud.png",
  "03n": "003-cloud.png",
  "04d": "004-clouds.png",
  "04n": "004-clouds.png",
  "09d": "027-rain.png",
  "09n": "027-rain.png",
  "10d": "046-weather.png",
  "10n": "046-weather.png",
  "11d": "041-thunderstorm.png",
  "11n": "041-thunderstorm.png",
  "13d": "032-snowy.png",
  "13n": "033-snowy.png",
  "50d": "016-haze.png",
  "50n": "016-haze.png"
};

const getIconName = code => {
  return iconmap[code];
};

export default getIconName;