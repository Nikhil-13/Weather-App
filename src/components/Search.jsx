import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'

function Search() {
	const { city, setCity, fetchData } = useContext(WeatherContext)
	fetchData('https://api.github.com/users/nikhil-13')

	return (
		<div className='form__group field'>
			<input
				type='input'
				className='form__field'
				placeholder='City'
				id='city'
				required={true}
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<label htmlFor='city' className='form__label'>
				Select Your City
			</label>
		</div>
	)
}

export default Search
