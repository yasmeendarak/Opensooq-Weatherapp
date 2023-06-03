import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';
import '../index.css';

function WeatherInfo() {
  const { data, toggleUnit, unit } = useContext(WeatherContext);

  if (!data) {
    return null;
  }

  const { name, main, weather, wind } = data;

  const convertTemperature = temperature => {
    if (unit === 'metric') {
      return Math.round(temperature) + '°C';
    } else {
      const fahrenheit = (temperature * 9) / 5 + 32;
      return Math.round(fahrenheit) + '°F';
    }
  };

  const convertSpeed = speed => {
    if (unit === 'metric') {
      return Math.round(speed * 3.6) + ' km/h';
    } else {
      return Math.round(speed) + ' mph';
    }
  };

  return (
    <div>
    <div className="info">
      <h2>{name}</h2>
      <div className="temperature">
        <h3 onClick={toggleUnit}>{convertTemperature(main.temp)}</h3>
      </div>
      <div className="details">
        <p>
          <strong>Feels Like:</strong> {convertTemperature(main.feels_like)}
        </p>
        <p>
          <strong>Humidity:</strong> {main.humidity}%
        </p>
        <p>
          <strong>Wind:</strong> {convertSpeed(wind.speed)}
        </p>
      </div>
      <div className="description">
        <h4>{weather[0].description}</h4>
      </div>
     
    </div>

    <div className='button-90'>
      <button  onClick={toggleUnit}>Change Units</button>
      </div>
      
    </div>
  );
}

export default WeatherInfo;
