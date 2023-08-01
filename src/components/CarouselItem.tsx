import { Cities } from '@/types'
import Image from 'next/image'
import React from 'react'

interface City {
	cityData: Cities
}

const CarouselItem: React.FC<City> = ({ cityData }) => {
	return (
		<div className='item'>
			<Image src={cityData.imgSrc} alt={cityData.city} width={10} height={10} />
			<div className='overlay'>
				<span>{cityData.country}</span>
				<div>
					<h2>{cityData.city}</h2>
					<p>{cityData.popularPlaces} Popular places</p>
				</div>
			</div>
		</div>
	)
}

export default CarouselItem
