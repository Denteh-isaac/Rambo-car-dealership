'use client'
import Link from "next/link"
import CarCard1 from '@/components/elements/carcard/CarCard1'
import rawCarsData from '@/util/cars.json'
import { ListingType } from '@/util/useCarFilter'

/** The rental fleet — anything a customer can hire by the day. */
const rentalFleet = rawCarsData
	.filter((c) => c.listingType === 'rental' || c.listingType === 'both')
	.sort((a, b) => (a.dailyRate ?? 0) - (b.dailyRate ?? 0))
	.slice(0, 4)
	.map((c) => ({ ...c, listingType: c.listingType as ListingType, rating: parseFloat(c.rating as string) }))

export default function CarsListing2() {
	return (
		<section className="section-box box-flights background-body">
			<div className="container">
				<div className="row align-items-end mb-10">
					<div className="col-md-8">
						<h3 className="neutral-1000 wow fadeInUp">Our Rental Fleet</h3>
						<p className="text-lg-medium neutral-500 wow fadeInUp">Hire by the day, the week or the month — self-drive or with a driver</p>
					</div>
					<div className="col-md-4 mt-md-0 mt-4">
						<div className="d-flex justify-content-end">
							<Link className="btn btn-primary wow fadeInUp" href="/cars-list-1">
								View More
								<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
				<div className="row pt-30">
					{rentalFleet.map((car, i) => (
						<div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay={`0.${i + 1}s`} key={car.id}>
							<CarCard1 car={car} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
