const iconDict = {
    // Thunderstorms
    200: 'thunderstorm with light rain',
    201: 'thunderstorm with rain',
    202: 'thunderstorm with heavy rain',
    210: 'light thunderstorm',
    211: 'wi-thunderstorm',
    212: 'heavy thunderstorm',
    221: 'ragged thunderstorm',
    220: 'thunderstorm with light drizzle',
    230: 'thunderstorm with drizzle',
    231: 'thunderstorm with drizzle',
    232: 'thunderstorm with heavy drizzle',

    // Clear
    800: 'wi-day-sunny'
}

export const getIconName = (code) => {
    console.log(iconDict[code]);
    return iconDict[code];
}