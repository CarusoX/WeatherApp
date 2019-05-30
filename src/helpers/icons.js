const iconmap = {
  '01d': '036-sun',
  '01n': '024-moon',
  '02d': '007-cloudy day',
  '02n': '025-night',
  '03d': '003-cloud',
  '03n': '003-cloud',
  '04d': '004-clouds',
  '04n': '004-clouds',
  '09d': '027-rain',
  '09n': '027-rain',
  '10d': '046-weather',
  '10n': '046-weather',
  '11d': '041-thunderstorm',
  '11n': '041-thunderstorm',
  '13d': '032-snowy',
  '13n': '033-snowy',
  '50d': '016-haze',
  '50n': '016-haze',
}

export const getIconName = (code) => {
  return iconmap[code];
}