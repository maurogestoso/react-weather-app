import { formatWeatherObject } from "./weather-data";

describe("formatWeatherObject", () => {
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
  test("formats the date property as a Date object", () => {
    const expectedDate = new Date();
    const input = {
      ...weatherObject,
      dt: expectedDate
    };
    const result = formatWeatherObject(input);
    expect(result.date.toString()).toBe(expectedDate.toString());
  });
});
