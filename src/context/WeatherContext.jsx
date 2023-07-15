import { createContext } from 'react'

const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
	const API_KEY = '8e1ebff4a94688200942df99a6e70fce'

	return <WeatherContext.Provider value={{ API_KEY }}>{children}</WeatherContext.Provider>
}

export default WeatherContext
