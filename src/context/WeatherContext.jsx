import { createContext, useState, useEffect } from 'react';
// import { cityList } from '../data/sample-data.js'
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [weatherDetails, setWeatherDetails] = useState({});

  useEffect(() => {
    getUserCurrentLocation();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      fetchWeatherDetails(city);
    }, 500);
    clearTimeout(timer);
  }, [city]);

  // get current coordiantes

  const getUserCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getCity(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setMessage('Please turn on Location and try refreshing the page.');
        }
      );
    }
  };

  // get current city

  async function getCity(latitude, longitude) {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      const extractedCity = response.data.address.city.trim().split(/\s+/);
      // console.log(response)
      setCity(extractedCity[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchWeatherDetails(cityName) {
    if (city !== '') {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=fa847ac3d2ce4ddc89a144017231507&q=${cityName}&aqi=yes`
      );
      // console.log(response.data)
      setWeatherDetails(response.data);
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        city,
        weatherDetails,
        message,
        setWeatherDetails,
        setCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
