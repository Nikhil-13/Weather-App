import { createContext, useState, useEffect } from 'react'
// import { cityList } from '../data/sample.js'
import axios from 'axios'

const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
	const [city, setCity] = useState('')

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log(city)
		}, 1500)

		return () => {
			clearTimeout(timer)
		}
	}, [city])

	async function fetchData(url) {
		const response = await axios.get(url)
		console.log(response)
	}

	return (
		<WeatherContext.Provider value={{ city, setCity, fetchData }}>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherContext
