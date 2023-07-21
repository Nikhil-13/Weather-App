import { useContext } from 'react'
import { Cloud, Droplets, Flower, Wind } from 'lucide-react'
import WeatherContext from '../context/WeatherContext'

function Report() {
	const { selected } = useContext(WeatherContext)
	return (
		<div className='card'>
			<div className='detailed-info'>
				<div className='detailed-info-item' id='humidity'>
					<Droplets size={30} style={{ marginBottom: '5px' }} />
					<span>{selected.humidity}%</span>
					<span>Humidity</span>
				</div>
				<div className='detailed-info-item' id='wind'>
					<Wind size={30} style={{ marginBottom: '5px' }} />
					<span>{selected.wind_speed} km/h</span>
					<span>Wind</span>
				</div>
				<div className='detailed-info-item' id='aqi'>
					<Flower size={30} style={{ marginBottom: '5px' }} />
					<span>{selected.aqi}</span>
					<span>AQI</span>
				</div>
			</div>
			<hr />
			<div className='main-report'>
				<div className='weather-icon'>
					<Cloud size={70} />
				</div>
				<div className='detail'>
					<span className='temp'>
						{selected.temperature}
						&deg;
					</span>
					<span className='city-name'>{selected.name}</span>
				</div>
			</div>
		</div>
	)
}

export default Report
