'use client'

import { useEffect, useRef } from 'react'
import { citiesData } from '@/constants'

import CarouselItem from '@/components/CarouselItem'

export default function Home() {
	const carouselRef = useRef(null)

	useEffect(() => {
		if (carouselRef.current) {
			window.$(carouselRef.current).owlCarousel({
				items: 5,
				loop: true,
				margin: 10,
				nav: true,
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 5,
					},
				},
			})
		}
	}, [])

	return (
		<main>
			<div className='header'>
				<span>top cities</span>
				<h1>Our popular cities</h1>
				<p>
					We are a team of humans with the strategy, tools, and solutions and digital
					products.
				</p>
			</div>
			<div className='owl-carousel owl-theme' ref={carouselRef}>
				{citiesData.map((cityData, index) => (
					<CarouselItem key={index} cityData={cityData} />
				))}
			</div>
		</main>
	)
}
