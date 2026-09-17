'use client'
import Link from 'next/link'
import { Price } from '@/util/currency'

const BADGE = {
	sale:   { label: 'For sale',     cls: 'listing-badge-sale' },
	rental: { label: 'For rent',     cls: '' },
	both:   { label: 'Sale or rent', cls: 'listing-badge-both' },
} as const

export default function CarCard1({ car }: any) {
	const listing: 'sale' | 'rental' | 'both' = car?.listingType ?? 'sale'
	const badge = BADGE[listing]

	// A rental-only car is priced per day; anything sellable leads with its sale price.
	const rentalOnly = listing === 'rental'
	const showsDailyRate = rentalOnly && car?.dailyRate
	const cta = rentalOnly ? 'Book Now' : 'View Details'

	return (
		<div className="card-journey-small background-card hover-up">
			<div className="card-image">
				<span className={`listing-badge ${badge.cls}`}>{badge.label}</span>
				<Link href="/cars-details-1">
					<img src={`/assets/imgs/cars-listing/cars-listing-6/${car.image}`} alt={car.name} />
				</Link>
			</div>
			<div className="card-info p-4 pt-30">
				<div className="card-rating">
					<div className="card-left" />
					<div className="card-right">
						<span className="rating text-xs-medium rounded-pill">{car.rating}</span>
					</div>
				</div>
				<div className="card-title">
					<Link className="text-lg-bold neutral-1000" href="/cars-details-1">{car.name}</Link>
				</div>
				<div className="card-program">
					<div className="card-location">
						<p className="text-location text-sm-medium neutral-500">{car.location}</p>
					</div>
					<div className="card-facitlities">
						<p className="card-gear text-md-medium">{car.carType}</p>
						<p className="card-fuel text-md-medium">{car.fuelType}</p>
						<p className="card-seat text-md-medium">{car.amenities}</p>
					</div>
					<div className="endtime">
						<div className="card-price">
							{showsDailyRate ? (
								<>
									<h6 className="text-lg-bold neutral-1000"><Price amount={car.dailyRate} /></h6>
									<p className="text-md-medium neutral-500">/ day</p>
								</>
							) : (
								<>
									<h6 className="text-lg-bold neutral-1000"><Price amount={car.price} /></h6>
									{listing === 'both' && car?.dailyRate ? (
										<p className="text-md-medium neutral-500">
											or <Price amount={car.dailyRate} /> / day
										</p>
									) : (
										<p className="text-md-medium neutral-500">landed price</p>
									)}
								</>
							)}
						</div>
						<div className="card-button"><Link className="btn btn-gray" href="/cars-details-1">{cta}</Link></div>
					</div>
				</div>
			</div>
		</div>
	)
}
