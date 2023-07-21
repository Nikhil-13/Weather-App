import './App.css'
import './custom.css'
import Search from './components/Search'
import WeatherContext from './context/WeatherContext'
import Report from './components/Report'
import { useContext } from 'react'

function App() {
	const { selected } = useContext(WeatherContext)

	return (
		<div className='container'>
			<Search />
			{selected ? <Report /> : <div style={{ opacity: '0.7' }}>No Data Available</div>}
		</div>
	)
}

export default App

