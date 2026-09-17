'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroup3 } from '@/util/swiperOptions'
import CarCard1 from '@/components/elements/carcard/CarCard1'
import rawCarsData from '@/util/cars.json'
import { ListingType } from '@/util/useCarFilter'

/** Cars we sell outright — the main business. */
const forSale = rawCarsData
	.filter((c) => c.listingType === 'sale' || c.listingType === 'both')
	.slice(0, 8)
	.map((c) => ({ ...c, listingType: c.listingType as ListingType }))

export default function CarsListing1() {
	return (
		<section className="section-box box-flights background-body">
			<div className="container">
				<div className="row align-items-end">
					<div className="col-md-9 wow fadeInUp">
						<h3 className="title-svg neutral-1000 mb-5">Vehicles For Sale</h3>
						<p className="text-lg-medium text-bold neutral-500">Cleared, registered and ready at our Esiama warehouse</p>
					</div>
					<div className="col-md-3 position-relative mb-30 wow fadeInUp">
						<div className="box-button-slider box-button-slider-team justify-content-end">
							<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2">
								<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
									<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2">
								<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
									<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="block-flights wow fadeInUp">
					<div className="box-swiper mt-30">
						<Swiper {...swiperGroup3} className="swiper-container swiper-group-3 swiper-group-journey">
							{forSale.map((car) => (
								<SwiperSlide key={car.id}>
									<CarCard1 car={{ ...car, rating: parseFloat(car.rating as string) }} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}
