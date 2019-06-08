# ReactJS
***
## MyWeather App

In this project, we built a weather app that tells us the current weather in a given location (by a search, or by browser geolocation). It also tells you the week forecast, and the current UV Rays data, with their respective graphics.

***

### Files and Directories

Our file structure is as follows:

```
.
├─ public
├─ src
│   ├─ components   // Most important directory
│   │  ├─ Menu
│   │  ├─ Modular
│   │  ├─ Search
│   │  ├─ Tabs
│   │  ├─ Title
│   │  └─ App.js
│   ├─ css
│   ├─ helpers
│   ├─ icons
│   ├─ images
│   └─ index.js
└─ ...
```

The main component is `App.js`, it calls and renders all the needed components by the entire application. It renders what should be rendered at any particular moment.
The other files are modular components that manages only their own tasks.
`Menu` renders the body of the application, calling the `SearchBar` and the selected Tabs by the user.
When a `Tab` is selected, then `WeatherCard`/`ForecastCard`/`UVTab` will be rendered.
This files, will call functions inside `helpers`, to work with images or the API itself.

***

### Libraries and Resources

We used [Semantic UI](https://react.semantic-ui.com/) for the most part of the styling, [Recharts](http://recharts.org/) for the graphics, and finally, [React-World-Flags](https://www.npmjs.com/package/react-world-flags) for the country flags in the search bar.

For the icons, we used [this](https://www.flaticon.com/packs/weather-220), and [this](https://www.flaticon.com/packs/weather-218) packs from Flaticon.

The used font for the entire app is [Jost*](https://fontsarena.com/jost-by-owen-earl/).

***

### Running the app:

First, you need to add a new file called ".env" in the root directory with the following content (only changing the API_KEY with yours):

> API_KEY= **{ Your api key }**
> API_FIND=/data/2.5/find
> API_WEATHER=/data/2.5/weather
> API_FORECAST=/data/2.5/forecast
> API_UVI=/data/2.5/uvi
> API_UVF=/data/2.5/uvi/forecast
> API_UVH=/data/2.5/uvi/history
> API_ENDPOINT=http://api.openweathermap.org

Then remove this files (if you have them)

`sudo rm package-lock.json`
`sudo rm -rf node_modules`
`sudo rm yarn.lock`

After that, you'll be able to run `yarn install` to get all dependencies, and `yarn start` to actually run the application.

***
