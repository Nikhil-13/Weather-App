import React from 'react'
import { Cloud, Droplets, Wind } from 'lucide-react'

function Report() {
	return (
		<div className='card'>
			<div className='detailed-info'>
				<div className='detailed-info-item' id='humidity'>
					<Droplets />
					<span>56%</span>
					<span>Humidity</span>
				</div>
				<div className='detailed-info-item' id='wind'>
					<Wind />
					<span>56kmph</span>
					<span>Wind</span>
				</div>
				<div className='detailed-info-item' id='aqi'>
					<Wind />
					<span>112</span>
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
						23<sup>2</sup>
					</span>
					<span className='city-name'>Chandigarh</span>
				</div>
			</div>
		</div>
	)
}

export default Report
