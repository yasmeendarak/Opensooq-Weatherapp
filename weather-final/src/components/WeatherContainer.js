import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import WeatherSearch from './WeatherSearch';
import WeatherInfo from './WeatherInfo';
import { WeatherContext } from './WeatherContext';

function WeatherContainer() {
  const { data, location, setData, setLocation } = useContext(WeatherContext);
  const [backgroundClass, setBackgroundClass] = useState('');

  const url = `http://localhost:8080/api/weather?city=${location}`//using the php api on my local host

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetchWeatherData();
      setLocation('');
    }
  };

  const fetchWeatherData = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        const { main } = response.data;
        updateBackground(response.data.weather[0].main, main.temp);
      })
      .catch((error) => console.log(error));
  };

  const updateBackground = (weatherCondition, temperature) => {
    let backgroundClass = '';

    if (temperature >= 24) {
      backgroundClass = 'background-orange';
    } else {
      backgroundClass = 'background-blue';
    }

    setBackgroundClass(backgroundClass);
  };

  return (
    <div className={`app ${backgroundClass}`}>
      <div className={`container`}>
        <WeatherSearch onKeyPress={searchLocation} setLocation={setLocation} />
        {data && <WeatherInfo data={data} />}
      </div>
    </div>
  );
}

export default WeatherContainer;
