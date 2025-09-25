import React, { useState } from 'react';

const WeatherFetcher = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Example: Using Open-Meteo's free weather API for demonstration (no API key needed)
  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      // Sample coordinates (New York City)
      const lat = 40.7128;
      const lon = -74.0060;

      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&timezone=auto`
      );
      if (!response.ok) throw new Error('Failed to fetch weather data');
      const data = await response.json();

      setWeather(data.daily.temperature_2m_max);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '300px', margin: '20px auto' }}>
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? 'Loading...' : 'Get Weather Forecast'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h3>Max Temperature Forecast (°C)</h3>
          <ul>
            {weather.map((temp, idx) => (
              <li key={idx}>Day {idx + 1}: {temp}°C</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherFetcher;
