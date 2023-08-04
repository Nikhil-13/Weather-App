import './App.css'
import './custom.css'
import Search from './components/Search'
import WeatherContext from './context/WeatherContext'
import Report from './components/Report'
import { useContext } from 'react'

function App() {
	const { selected, city, message } = useContext(WeatherContext)

	return (
		<div className='container'>
			<Search />
			{selected ? (
				<Report />
			) : (
				<div style={{ opacity: '0.7', textAlign: 'center' }}>
					{city == '' && message == '' ? `Please select a city` : ''}
					{city != '' && message == '' ? `No data available for ${city}` : ''}
					<br />

					{message}
				</div>
			)}
		</div>
	)
}

export default App
