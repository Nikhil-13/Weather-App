import { useContext } from 'react'
import { Cloud, Droplets, Wind } from 'lucide-react'
import WeatherContext from '../context/WeatherContext'

function Report() {
	const { selected } = useContext(WeatherContext)
	return (
		<div className='card'>
			<div className='detailed-info'>
				<div className='detailed-info-item' id='humidity'>
					<Droplets />
					<span>{selected.humidity}%</span>
					<span>Humidity</span>
				</div>
				<div className='detailed-info-item' id='wind'>
					<Wind />
					<span>{selected.wind_speed}kmph</span>
					<span>Wind</span>
				</div>
				<div className='detailed-info-item' id='aqi'>
					<Wind />
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
