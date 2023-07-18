import { createContext, useState, useEffect } from 'react'
import { cityList } from '../data/sample.js'

const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
	const [city, setCity] = useState('')

	const currentCity = cityList.cities.filter((siti) => siti === city)

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log(city)
		}, 1500)

		return () => {
			clearTimeout(timer)
		}
	}, [city])

	const fetchdata = async () => {
		const response = await axios.get(url)
		console.log(response)
	}

	return (
		<WeatherContext.Provider value={{ city, setCity, cityList, currentCity }}>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherContext
