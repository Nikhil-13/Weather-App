import { createContext, useState, useEffect } from 'react'
import { cityList } from '../data/sample-data.js'
import axios from 'axios'

const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
	const [city, setCity] = useState('')
	const [selected, setSelectedCity] = useState()

	useEffect(() => {
		const timer = setTimeout(() => {
			const matchedCity = cityList.cities.find((siti) => siti.name === city)
			setSelectedCity(matchedCity ? matchedCity : '')
		}, 500)

		return () => {
			clearTimeout(timer)
		}
	}, [city])

	// async function fetchData(url) {
	// 	const response = await axios.get(url)
	// 	console.log(response)
	// }

	return (
		<WeatherContext.Provider
			value={{
				city,
				setCity,
				cityList,
				selected,
				// fetchData
			}}>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherContext
