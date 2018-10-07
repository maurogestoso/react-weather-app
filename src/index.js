import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import WeekForecastPage from "./WeekForecastPage";

function App() {
  return (
    <div>
      <WeekForecastPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
