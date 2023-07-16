import React, { useEffect, useState } from 'react'

function Search() {
	const [city, setCity] = useState()

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log('hitting api')
		}, 1500)

		return () => {
			clearTimeout(timer)
		}
	}, [city])

	return (
		<div className='form__group field'>
			<input
				type='input'
				className='form__field'
				placeholder='City'
				id='city'
				required={true}
				// value={city}
				// onChange={(e) => setCity(e.target.value)}
			/>
			<label htmlFor='city' className='form__label'>
				Select Your City
			</label>
		</div>
	)
}

export default Search
