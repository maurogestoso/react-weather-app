import React from "react";

import weatherData from "./weather-data.json";

const WeekForecastPage = () => (
  <div>
    <h1>Weather Forecast for {weatherData.city.name}</h1>
  </div>
);

export default WeekForecastPage;
