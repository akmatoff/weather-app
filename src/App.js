import './App.css';
import { getWeather } from './services/weatherService'
import { useState } from 'react'

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState({})

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await getWeather(city)
      setWeatherData(data)
    }
    
  }

  return (
    <div className="App">
      <div className="main-container flex-row center">

        <div className="main-container-inner flex-column">

          <input type="text" className="search-city" onChange={(e) => setCity(e.target.value)} onKeyPress={search} value={city} placeholder="City..."></input>

          <div className="weather-container flex-column">
            <div className="city-name">Tokmok</div>
            <div className="celcius-container flex-row">
              <div className="weather-icon">SUN ICON</div>
              <div className="celcius">20</div>
            </div>
            <div className="weather-description">Clear</div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
