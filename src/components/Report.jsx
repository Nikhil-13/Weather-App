import { useContext, useEffect } from 'react';
import {
  Cloud,
  CloudLightning,
  Droplets,
  Flower,
  SunIcon,
  Wind,
} from 'lucide-react';
import WeatherContext from '../context/WeatherContext';

function Report() {
  const { weatherDetails } = useContext(WeatherContext);
  //   useEffect(() => {
  //     console.log(Object.keys(weatherDetails).length === 0);
  //   }, [weatherDetails]);

  return (
    <div className='card'>
      <div className='detailed-info'>
        <div className='detailed-info-item' id='humidity'>
          <Droplets size={30} style={{ marginBottom: '5px' }} />
          <span>{weatherDetails.current.humidity}%</span>
          <span>Humidity</span>
        </div>
        <div className='detailed-info-item' id='wind'>
          <Wind size={30} style={{ marginBottom: '5px' }} />
          <span>{weatherDetails.current.wind_kph} km/h</span>
          <span>Wind</span>
        </div>
        <div className='detailed-info-item' id='aqi'>
          <Flower size={30} style={{ marginBottom: '5px' }} />
          <span>{weatherDetails.current.air_quality.o3}</span>
          <span>AQI</span>
        </div>
      </div>
      <hr />
      <div className='main-report'>
        <div className='weather-icon'>
          {weatherDetails.current.condition.text === 'Cloudy' ? (
            <Cloud size={70} />
          ) : (
            ''
          )}
          {weatherDetails.current.condition.text === 'Rainy' ? (
            <Droplets size={70} />
          ) : (
            ''
          )}
          {weatherDetails.current.condition.text === 'Sunny' ? (
            <SunIcon size={70} />
          ) : (
            ''
          )}
          {weatherDetails.current.condition.text === 'Thunderstorm' ? (
            <CloudLightning size={70} />
          ) : (
            ''
          )}
        </div>
        <div className='detail'>
          <span className='temp'>
            {weatherDetails.current.temp_c}
            &deg;C
          </span>
          <span className='city-name'>{weatherDetails.location.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Report;
