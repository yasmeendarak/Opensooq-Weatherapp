import React from 'react';

function WeatherSearch({ location, setLocation, onKeyPress }) {
  return (
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default WeatherSearch;
