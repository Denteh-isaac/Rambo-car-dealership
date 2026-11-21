import Layout from "@/components/layout/Layout"
import CarGallery from "@/components/elements/CarGallery"
import { carImage } from "@/util/carImage"
import carsData from "@/util/cars.json"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Car = Omit<(typeof carsData)[number], "price" | "dailyRate"> & {
	/** Everything is quoted on request today, but keep the priced path compiling. */
	price?: number | null
	dailyRate?: number | null
	gallery?: string[]
	spin?: string[]
	specs?: Record<string, string>
	tagline?: string
	source?: string
	featured?: boolean
	brand?: string
	slug?: string
}

const CARS = carsData as Car[]
const WHATSAPP = "233547245658"

const find = (slug: string) => CARS.find((c) => c.slug === slug)

export function generateStaticParams() {
	return CARS.filter((c) => c.slug).map((c) => ({ slug: c.slug as string }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	const car = find((await params).slug)
	if (!car) return { title: "Vehicle not found — GY Car King Autoworld" }
	return {
		title: `${car.name} — GY Car King Autoworld, Esiama`,
		description: car.tagline ?? `${car.name} available through GY Car King Autoworld in Esiama, Western Region.`,
	}
}

const LISTING_LABEL: Record<string, string> = {
	sale: "For sale",
	rental: "For rent",
	both: "Sale or rent",
}

export default async function CarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
	const car = find((await params).slug)
	if (!car) notFound()

	const specs: Record<string, string> = (car.specs ?? {}) as Record<string, string>
	const gallery = car.gallery?.length ? car.gallery : [carImage(car.image)]
	const related = CARS.filter((c) => c.brand === car.brand && c.slug !== car.slug).slice(0, 3)
	const enquiry = `Hello GY Car King Autoworld, I'd like to ask about the ${car.name}.`

	return (
		<Layout footerStyle={1}>
			<section className="box-section background-body pt-70 pb-70">
				<div className="container">

					<nav className="mb-20" aria-label="Breadcrumb">
						<Link className="neutral-700 text-md-medium" href="/">Home</Link>
						<span className="neutral-500 px-2">/</span>
						<Link className="neutral-700 text-md-medium" href="/cars-list-1">Vehicles</Link>
						{car.brand && (
							<>
								<span className="neutral-500 px-2">/</span>
								<Link className="neutral-700 text-md-medium" href={`/cars-list-1?brand=${encodeURIComponent(car.brand)}`}>{car.brand}</Link>
							</>
						)}
						<span className="neutral-500 px-2">/</span>
						<span className="neutral-1000 text-md-bold">{car.name}</span>
					</nav>

					<div className="row g-4">
						<div className="col-lg-7">
							<CarGallery name={car.name} gallery={gallery} spin={car.spin} />
						</div>

						<div className="col-lg-5">
							<div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
								<span className={`listing-badge ${car.listingType === "sale" ? "listing-badge-sale" : car.listingType === "both" ? "listing-badge-both" : ""}`}>
									{LISTING_LABEL[car.listingType] ?? "For sale"}
								</span>
								{car.featured && <span className="stock-badge stock-badge-static">At the showroom</span>}
							</div>

							<h3 className="neutral-1000 mb-2">{car.name}</h3>
							{car.tagline && <p className="text-md-medium neutral-500 mb-20">{car.tagline}</p>}

							<div className="car-price-block mb-20">
								{car.price == null ? (
									<>
										<h4 className="neutral-1000 mb-1">Price on request</h4>
										<p className="text-sm-medium neutral-500">
											Import duty and clearing vary by spec — message us and we&apos;ll quote you the landed price.
										</p>
									</>
								) : (
									<h4 className="neutral-1000 mb-1">${car.price.toLocaleString()}</h4>
								)}
							</div>

							<div className="d-flex gap-2 flex-wrap mb-25">
								<a className="btn btn-brand-2" target="_blank" rel="noopener noreferrer"
									href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(enquiry)}`}>
									Ask about this car
								</a>
								<a className="btn btn-gray" href={`tel:+${WHATSAPP}`}>Call us</a>
								<Link className="btn btn-gray" href="/contact">Book a viewing</Link>
							</div>

							<ul className="car-quickfacts">
								<li><span>Body</span><strong>{car.carType}</strong></li>
								<li><span>Fuel</span><strong>{car.fuelType}</strong></li>
								<li><span>Location</span><strong>{car.location}</strong></li>
								{car.brand && <li><span>Make</span><strong>{car.brand}</strong></li>}
							</ul>
						</div>
					</div>

					{Object.keys(specs).length > 0 && (
						<div className="row mt-50">
							<div className="col-lg-8">
								<h5 className="neutral-1000 mb-20">Specification</h5>
								<table className="car-spec-table">
									<tbody>
										{Object.entries(specs).map(([k, v]) => (
											<tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
										))}
									</tbody>
								</table>
								{car.source && (
									<p className="text-sm-medium neutral-500 mt-3">Figures from the {car.source}.</p>
								)}
							</div>
						</div>
					)}

					{related.length > 0 && (
						<div className="mt-50">
							<h5 className="neutral-1000 mb-20">More from {car.brand}</h5>
							<div className="row g-3">
								{related.map((r) => (
									<div className="col-md-4" key={r.slug}>
										<Link className="related-car" href={`/cars/${r.slug}`}>
											<img src={carImage(r.image)} alt={r.name} />
											<span className="text-md-bold neutral-1000">{r.name}</span>
										</Link>
									</div>
								))}
							</div>
						</div>
					)}

				</div>
			</section>
		</Layout>
	)
}
