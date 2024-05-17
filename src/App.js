import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayCity(event) {
    setCity(event.target.value);
  }
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city.."
        onChange={displayCity}
      />
      <button type="Submit">Search</button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        <h1>Weather Search</h1>
        {form}
        <ul>
          <li> temperature:{Math.round(weather.temperature)}°C</li>
          <li>description:{weather.description}</li>
          <li>Wind:{Math.round(weather.Wind)}km/h </li>
          <li> Humidity:{Math.round(weather.Humidity)}%</li>
          <li> icon:{<img src={weather.icon} alt={weather.description} />}</li>
        </ul>
        <p>
          This file was coded by{" "}
          <a
            href="https://github.com/Alicianonkonyana"
            target="_blank"
            rel="noreferrer"
          >
            Alicia
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Alicianonkonyana/forecast.react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          and{" "}
          <a
            href="https://app.netlify.com/sites/bright-mousse-c21890/overview"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Neflify
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Weather Search</h1>
        {form}
        <p>
          This file was coded by{" "}
          <a
            href="https://github.com/Alicianonkonyana"
            target="_blank"
            rel="noreferrer"
          >
            Alicia
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Alicianonkonyana/forecast.react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          and{" "}
          <a
            href="https://app.netlify.com/sites/bright-mousse-c21890/overview"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Neflify
          </a>
        </p>
      </div>
    );
  }
}

export default App;
