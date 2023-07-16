import { createContext } from 'react'

const WeatherContext = createContext()

export const WeatherContextProvider = ({ children }) => {
	return <WeatherContext.Provider value={{}}>{children}</WeatherContext.Provider>
}

export default WeatherContext
