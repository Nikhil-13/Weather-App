import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import { CloudFog } from 'lucide-react'

function Search() {
	const { city, setCity } = useContext(WeatherContext)

	return (
		<div className='form__group field'>
			<input
				type='input'
				className='form__field'
				placeholder='City'
				id='city'
				required={true}
				value={city || ''}
				onChange={(e) => setCity(e.target.value)}
			/>
			<label htmlFor='city' className='form__label'>
				Select Your City
			</label>
		</div>
	)
}

export default Search
