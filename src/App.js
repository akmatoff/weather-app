import "./App.css";
import { getWeather } from "./services/weatherService";
import { useState, Fragment } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState();

  const search = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await getWeather(city);
        setWeatherData(data);
        console.log(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="App">
      <div className="main-container flex-row center">
        <div className="main-container-inner flex-column">
          <input
            type="text"
            className="search-city"
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={search}
            value={city}
            placeholder="Enter the city name..."
          ></input>

          {weatherData && (
            <div className="weather-container flex-column centered">
              {error ? (
                <div className="error">{error}</div>
              ) : (
                <Fragment>
                  <div className="city-name">
                    {weatherData && weatherData.name}
                  </div>
                  <div className="celcius-container flex-row">
                    <div className="weather-icon-container">
                      {weatherData.weather && (
                        <img
                          className="weather-icon"
                          src={
                            "https://openweathermap.org/img/wn/" +
                            weatherData.weather[0].icon +
                            ".png"
                          }
                          alt="Weather icon"
                        />
                      )}
                    </div>
                    <div className="celcius">
                      {weatherData.main && weatherData.main.temp + "℃"}
                    </div>
                  </div>
                  <div className="weather-description">
                    {weatherData.weather && weatherData.weather[0].description}
                  </div>
                </Fragment>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
