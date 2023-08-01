/* eslint-disable */
declare global {
	type $ = any
	interface Window {
		$?: any
	}
}
/* eslint-enable */

export interface Cities {
	imgSrc: string
	country: string
	city: string
	popularPlaces: number
}
