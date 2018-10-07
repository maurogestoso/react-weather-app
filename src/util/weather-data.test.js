import { groupWeatherDataByDay } from "./weather-data";
import * as dateFns from "date-fns";

const weatherObject = {
  dt: 1538870400,
  main: {
    temp: 276.74,
    temp_min: 274.9,
    temp_max: 276.74,
    pressure: 1020.74,
    sea_level: 1035.42,
    grnd_level: 1020.74,
    humidity: 82,
    temp_kf: 1.84
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01n"
    }
  ],
  clouds: {
    all: 0
  },
  wind: {
    speed: 1.86,
    deg: 315.003
  },
  rain: {},
  sys: {
    pod: "n"
  },
  dt_txt: "2018-10-07 00:00:00"
};

describe("groupWeatherDataByDay", () => {
  test("groups weather data points by day", () => {
    const dates = [
      Date.now(),
      dateFns.addDays(Date.now(), 1),
      dateFns.addDays(Date.now(), 2)
    ];

    const weatherData = [
      { dt: dates[0].getTime() },
      { dt: dates[0].getTime() },
      { dt: dates[0].getTime() },
      { dt: dates[1].getTime() },
      { dt: dates[1].getTime() },
      { dt: dates[2].getTime() }
    ];

    const result = groupWeatherDataByDay(weatherData);

    expect(result[0][0].dt).toBe(dates[0].getTime());
    expect(result[0][1].dt).toBe(dates[0].getTime());
    expect(result[0][2].dt).toBe(dates[0].getTime());
    expect(result[1][0].dt).toBe(dates[0].getTime());
    expect(result[1][1].dt).toBe(dates[0].getTime());
    expect(result[2][0].dt).toBe(dates[0].getTime());
  });
});
