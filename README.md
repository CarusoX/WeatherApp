## To run the application:

- Add a .env file on the root directory with the following content:

> API_KEY={ your API key for openweathermap.org }
> API_ENDPOINT=http://api.openweathermap.org API_FIND=/data/2.5/find    
> API_WEATHER=/data/2.5/weather
> API_FORECAST=/data/2.5/forecast    
> API_UVI=/data/2.5/uvi API_UVF=/data/2.5/uvi/forecast    
> API_UVH=/data/2.5/uvi/history

- rm -rf node_modules yarn.lock (Assuming you do not have package-lock.json)

- yarn install

- yarn start