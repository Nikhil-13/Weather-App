import { createContext, useState, useEffect } from 'react'
import { cityList } from '../data/sample-data.js'
import axios from 'axios'

const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
	const [city, setCity] = useState('')
	const [message, setMessage] = useState(null)
	const [selected, setSelectedCity] = useState(null)

	useEffect(() => {
		getUserCurrentLocation()
	}, [])

	useEffect(() => {
		const matchedCity = cityList.cities.find(
			(siti) => siti.name === city.charAt(0).toUpperCase() + city.slice(1)
		)
		setSelectedCity(matchedCity ? matchedCity : '')
	}, [city])

	// get current coordiantes

	const getUserCurrentLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords
					getCity(latitude, longitude)
				},
				(error) => {
					console.error('Error getting location:', error)
					setMessage('Please turn on Location')
				}
			)
		} else {
			alert('Geolocation is not supported by this browser.')
		}
	}

	// get current city

	async function getCity(latitude, longitude) {
		const response = await axios.get(
			`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
		)
		setCity(response.data.address.city)
	}

	// async function fetchData(url) {
	//   const response = await axios.get(url);
	//   console.log(response);
	// }

	return (
		<WeatherContext.Provider
			value={{
				city,
				cityList,
				selected,
				message,
				setCity,
			}}>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherContext
