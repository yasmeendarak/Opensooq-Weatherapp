import React from 'react';
import WeatherContainer from './components/WeatherContainer';
import { WeatherProvider } from './components/WeatherContext';
import './index.css'
function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <WeatherContainer />
      </WeatherProvider>
    </div>
  );
}

export default App;
