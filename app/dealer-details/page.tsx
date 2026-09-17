'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Marquee from 'react-fast-marquee'
import { Price, useCurrency } from "@/util/currency"
import MailtoForm from "@/components/elements/MailtoForm"
export default function DealerDetails() {
	const { format } = useCurrency()

	return (
		<>

			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 img-banner" src="/assets/imgs/page-header/banner8.png" alt="Gastonsin" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="text-white">Gastonsin Esiama</h2>
								<span className="text-white text-xl-medium">Esiama, off Nkroful Road · Western Region</span>
							</div>
							<div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 d-none">
								<Link href="/" className="neutral-700 text-md-medium">Home</Link>
								<span>
									<img src="/assets/imgs/template/icons/arrow-right.svg" alt="Gastonsin" />
								</span>
								<Link href="/dealer-details" className="neutral-1000 text-md-bold">Dealer Details</Link>
							</div>
						</div>
					</div>
					{/* dealer details */}
					<section className="box-section box-content-tour-detail box-content-room-detail background-body border-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-8">
									<div className="box-collapse-expand">
										<div className="group-collapse-expand">
											<button className="btn btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOverview" aria-expanded="false" aria-controls="collapseOverview">
												<h6>Overview</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
											<div className="collapse show" id="collapseOverview">
												<div className="card-contact border-0 border-bottom rounded-0 d-flex">
													<div className="card-image me-3">
														<div className="position-relative">
															<img src="/assets/imgs/dealer/dealer-listing/icon-9.svg" alt="Gastonsin" />
														</div>
													</div>
													<div className="card-info">
														<div className="card-title">
															<Link className="title heading-6" href="/dealer-listing">Gastonsin Esiama</Link>
															<p className="text-md-medium neutral-500">25 Ring Road Central, Accra, GA-144</p>
														</div>
														<div className="card-method-contact2">
															<Link className="email text-xs-bold" href="/cars-list-1"> 180 Vehicles </Link>
														</div>
													</div>
												</div>
												<div className="card card-body">
													<p>Every vehicle listed here is inspected before it leaves the source market and again when it lands in Ghana. You are looking at the exact car we will hand over — not a stock photo of a similar model. If it is marked as available at our Esiama warehouse, it is already cleared, duty-paid and registered, and you can come and drive it before you commit to anything.</p>
													<p>We buy on three routes — China, the USA and Dubai — and we clear our own containers at Tema and Takoradi, so the price you see already includes freight, duty, clearing and delivery anywhere in Ghana. If this particular car is not in the yard, tell us the specification you want and we will source it and quote you landed, in writing, before you pay anything.</p>
													<div className="row g-3 mt-1">
														<div className="col-md-6">
															<img className="rounded-1" src="/assets/imgs/dealer/dealer-details/img-1.png" alt="Gastonsin" />
														</div>
														<div className="col-md-6 d-flex align-items-center justify-content-between flex-column gap-3">
															<img className="rounded-1" src="/assets/imgs/dealer/dealer-details/img-2.png" alt="Gastonsin" />
															<img className="rounded-1" src="/assets/imgs/dealer/dealer-details/img-3.png" alt="Gastonsin" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="group-collapse-expand mb-0">
											<button className="btn btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHighlight" aria-expanded="false" aria-controls="collapseHighlight">
												<h6>Services</h6>
												<svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</button>
											<div className="collapse show" id="collapseHighlight">
												<div className="card card-body">
													<div className="row flex-lg-nowrap">
														<div className="col-auto">
															<ul className="list-checked-green-2">
																<li>Exclusive new vehicle sales with customization options</li>
																<li>Certified pre-owned vehicles with comprehensive inspections</li>
																<li>Flexible financing and leasing solutions tailored to your needs</li>
																<li>Full-service vehicle maintenance and repair center</li>
																<li>Authentic parts and accessories for optimal vehicle performance</li>
															</ul>
														</div>
														<div className="col-auto ms-lg-auto">
															<ul className="list-checked-green-2">
																<li>Comprehensive Vehicle Maintenance</li>
																<li>Genuine Parts &amp; Accessories</li>
																<li>Trade-In Valuation</li>
																<li>Extended Warranty Plans</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="sidebar-left border-1 background-card">
										<h6 className="text-xl-bold neutral-1000">Get in touch</h6>
										<div className="box-sidebar-content">
											<MailtoForm className="form-contact" subject="Dealer page enquiry" intro="Message sent from the dealer page.">
												<div className="row">
													<div className="col-lg-12">
														<div className="form-group">
															<input className="form-control username" type="text" name="name" aria-label="Name" placeholder="Your name" required />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<input className="form-control email" type="email" name="email" aria-label="Email" placeholder="Your email" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<textarea className="form-control message" rows={6} name="message" aria-label="Message" placeholder="Message" required />
														</div>
													</div>
													<div className="col-lg-12">
														<button type="submit" className="btn btn-book">
															Send message
															<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														</button>
													</div>
												</div>
											</MailtoForm>
											<div className="box-info-contact pt-4">
												<p className="text-md-medium mobile-phone neutral-1000"><span className="text-md-bold">Mobile:</span> 1-222-333-4444</p>
												<p className="text-md-medium email neutral-1000"><span className="text-md-bold">Email:</span> emily-rose@gmail.com</p>
												<p className="text-md-medium whatsapp neutral-1000"><span className="text-md-bold">WhatsApp:</span> 1-222-333-4444</p>
												<p className="text-md-medium fax neutral-1000"><span className="text-md-bold">Fax:</span> 1-222-333-4444</p>
											</div>
										</div>
									</div>
									<div className="sidebar-banner">
										<div className="p-4 background-body border rounded-3">
											<p className="text-xl-bold neutral-1000 mb-4">Dealer Location</p>
											<div className="box-collapse scrollFilter mb-15">
												<div className="pt-0">
													<div className="box-map-small">
														<iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sgh!4v1789115556010!5m2!1sen!2sgh!6m8!1m7!1sKhIXdbo6sugUbO6uBgGVWA!2m2!1d4.961097417344019!2d-2.327745335434869!3f297.2972908483529!4f-10.630530162432493!5f0.7820865974627469" width="100%" height={160} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
													</div>
												</div>
											</div>
											<p className="text-sm-medium neutral-1000">25 Ring Road Central, Accra, GA-144</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* cars-listing-1 */}
					<section className="section-box pt-50 background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-9 mb-30 wow fadeInUp">
									<h4 className="title-svg neutral-1000 mb-15">Listed by this dealer</h4>
									<p className="text-lg-medium text-bold neutral-500">Top Car Rental Service</p>
								</div>
							</div>
						</div>
					</section>
					<section className="box-section block-content-tourlist background-body">
						<div className="container">
							<div className="box-content-main pt-20">
								<div className="content-right">
									<div className="box-grid-tours wow fadeIn">
										<div className="row">
											<div className="col-lg-3 col-md-6">
												<div className="card-journey-small background-card hover-up">
													<div className="card-image">
														<img src="/assets/imgs/cars-listing/cars-listing-6/car-6.png" alt="Gastonsin" />
													</div>
													<div className="card-info p-4 pt-30">
														<div className="card-rating">
															<div className="card-left" />
															<div className="card-right">
																<span className="rating text-xs-medium rounded-pill">4.96 <span className="text-xs-medium neutral-500">(672 reviews)</span></span>
															</div>
														</div>
														<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="/cars-details-1">Hyundai Sonata SEL Plus</Link></div>
														<div className="card-program">
															<div className="card-location">
																<p className="text-location text-sm-medium neutral-500">Kumasi, Ghana</p>
															</div>
															<div className="card-facitlities">
																<p className="card-miles text-md-medium">25,100 miles</p>
																<p className="card-gear text-md-medium">Automatic</p>
																<p className="card-fuel text-md-medium">Diesel</p>
																<p className="card-seat text-md-medium">7 seats</p>
															</div>
															<div className="endtime">
																<div className="card-price">
																	<h6 className="text-lg-bold neutral-1000"><Price amount={72.15} /></h6>
																	<p className="text-md-medium neutral-500">/ day</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/cars-details-1">Book Now</Link></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="card-journey-small background-card hover-up">
													<div className="card-image">
														<img src="/assets/imgs/cars-listing/cars-listing-6/car-5.png" alt="Gastonsin" />
													</div>
													<div className="card-info p-4 pt-30">
														<div className="card-rating">
															<div className="card-left" />
															<div className="card-right">
																<span className="rating text-xs-medium rounded-pill">4.96 <span className="text-xs-medium neutral-500">(672 reviews)</span></span>
															</div>
														</div>
														<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="/cars-details-1">Buick Enclave Avenir</Link></div>
														<div className="card-program">
															<div className="card-location">
																<p className="text-location text-sm-medium neutral-500">Kumasi, Ghana</p>
															</div>
															<div className="card-facitlities">
																<p className="card-miles text-md-medium">25,100 miles</p>
																<p className="card-gear text-md-medium">Automatic</p>
																<p className="card-fuel text-md-medium">Diesel</p>
																<p className="card-seat text-md-medium">7 seats</p>
															</div>
															<div className="endtime">
																<div className="card-price">
																	<h6 className="text-lg-bold neutral-1000"><Price amount={69.56} /></h6>
																	<p className="text-md-medium neutral-500">/ day</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/cars-details-1">Book Now</Link></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="card-journey-small background-card hover-up">
													<div className="card-image">
														<img src="/assets/imgs/cars-listing/cars-listing-6/car-4.png" alt="Gastonsin" />
													</div>
													<div className="card-info p-4 pt-30">
														<div className="card-rating">
															<div className="card-left" />
															<div className="card-right">
																<span className="rating text-xs-medium rounded-pill">4.96 <span className="text-xs-medium neutral-500">(672 reviews)</span></span>
															</div>
														</div>
														<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="/cars-details-1">Chevrolet Silverado</Link></div>
														<div className="card-program">
															<div className="card-location">
																<p className="text-location text-sm-medium neutral-500">Kumasi, Ghana</p>
															</div>
															<div className="card-facitlities">
																<p className="card-miles text-md-medium">25,100 miles</p>
																<p className="card-gear text-md-medium">Automatic</p>
																<p className="card-fuel text-md-medium">Diesel</p>
																<p className="card-seat text-md-medium">7 seats</p>
															</div>
															<div className="endtime">
																<div className="card-price">
																	<h6 className="text-lg-bold neutral-1000"><Price amount={253} /></h6>
																	<p className="text-md-medium neutral-500">/ day</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/cars-details-1">Book Now</Link></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-3 col-md-6">
												<div className="card-journey-small background-card hover-up">
													<div className="card-image">
														<img src="/assets/imgs/cars-listing/cars-listing-6/car-3.png" alt="Gastonsin" />
													</div>
													<div className="card-info p-4 pt-30">
														<div className="card-rating">
															<div className="card-left" />
															<div className="card-right">
																<span className="rating text-xs-medium rounded-pill">4.96 <span className="text-xs-medium neutral-500">(672 reviews)</span></span>
															</div>
														</div>
														<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="/cars-details-1">Subaru Outback Limited XT</Link></div>
														<div className="card-program">
															<div className="card-location">
																<p className="text-location text-sm-medium neutral-500">Kumasi, Ghana</p>
															</div>
															<div className="card-facitlities">
																<p className="card-miles text-md-medium">25,100 miles</p>
																<p className="card-gear text-md-medium">Automatic</p>
																<p className="card-fuel text-md-medium">Diesel</p>
																<p className="card-seat text-md-medium">7 seats</p>
															</div>
															<div className="endtime">
																<div className="card-price">
																	<h6 className="text-lg-bold neutral-1000"><Price amount={75.86} /></h6>
																	<p className="text-md-medium neutral-500">/ day</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/cars-details-1">Book Now</Link></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="content-left order-lg-first d-none">
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Show on map</h6>
												<div className="box-collapse scrollFilter mb-15">
													<div className="pt-0">
														<div className="box-map-small">
															<iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sgh!4v1789115556010!5m2!1sen!2sgh!6m8!1m7!1sKhIXdbo6sugUbO6uBgGVWA!2m2!1d4.961097417344019!2d-2.327745335434869!3f297.2972908483529!4f-10.630530162432493!5f0.7820865974627469" width="100%" height={160} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Filter Price</h6>
												<div className="box-collapse scrollFilter">
													<div className="pt-20">
														<div className="box-slider-range">
															<div id="slider-range" />
															<div className="box-value-price"><span className="text-md-medium neutral-1000">{format(0, { decimals: 0 })}</span><span className="text-md-medium neutral-1000">{format(500, { decimals: 0 })}</span></div>
															<input className="value-money" type="hidden" />
														</div>
													</div>
												</div>
												<div className="d-flex justify-content-between pt-20 border-top">
													<Link href="#" className="d-flex align-items-center">
														<div className="background-100 icon-shape p-1 rounded-1 me-2">
															<svg xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
																<line x1="1.20074" y1="1.5141" x2="7.59837" y2="7.91174" stroke="black" strokeWidth="0.904762" />
																<line x1="1.01337" y1="7.91156" x2="7.411" y2="1.51393" stroke="black" strokeWidth="0.904762" />
															</svg>
														</div>
														<span className="text-sm-medium neutral-1000">Clear</span>
													</Link>
													<Link href="#" className="btn btn-primary px-3 py-2">
														<img src="/assets/imgs/template/icons/user.svg" alt="Gastonsin" />
														Apply
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Car type</h6>
												<div className="box-collapse scrollFilter">
													<ul className="list-filter-checkbox">
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">All </span><span className="checkmark" /> </label><span className="number-item">198</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Sedans</span><span className="checkmark" /> </label><span className="number-item">32</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">SUVs </span><span className="checkmark" /> </label><span className="number-item">13</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Coupes</span><span className="checkmark" /> </label><span className="number-item">23</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Hatchbacks</span><span className="checkmark" /> </label><span className="number-item">35</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Convertibles</span><span className="checkmark" /> </label><span className="number-item">56</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Trucks</span><span className="checkmark" /> </label><span className="number-item">76</span>
														</li>
													</ul>
													<div className="box-see-more mt-20 mb-25">
														<Link className="link-see-more" href="#">
															See more
															<svg width={8} height={6} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.89553 1.02367C7.75114 0.870518 7.50961 0.864815 7.35723 1.00881L3.9998 4.18946L0.642774 1.00883C0.490387 0.86444 0.249236 0.870534 0.104474 1.02369C-0.0402885 1.17645 -0.0338199 1.4176 0.118958 1.56236L3.73809 4.99102C3.81123 5.06036 3.90571 5.0954 3.9998 5.0954C4.0939 5.0954 4.18875 5.06036 4.26191 4.99102L7.88104 1.56236C8.03382 1.41758 8.04029 1.17645 7.89553 1.02367Z" fill="#101010" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Car Amenities</h6>
												<div className="box-collapse scrollFilter">
													<ul className="list-filter-checkbox">
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">All</span><span className="checkmark" /> </label><span className="number-item">32</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Leather upholstery</span><span className="checkmark" /> </label><span className="number-item">13</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Heated seats</span><span className="checkmark" /> </label><span className="number-item">23</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Sunroof/Moonroof</span><span className="checkmark" /> </label><span className="number-item">23</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Keyless entry/start</span><span className="checkmark" /> </label><span className="number-item">35</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Heads-up display</span><span className="checkmark" /> </label><span className="number-item">56</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Adaptive cruise control</span><span className="checkmark" /> </label><span className="number-item">76</span>
														</li>
													</ul>
													<div className="box-see-more mt-20 mb-25">
														<Link className="link-see-more" href="#">
															See more
															<svg width={8} height={6} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.89553 1.02367C7.75114 0.870518 7.50961 0.864815 7.35723 1.00881L3.9998 4.18946L0.642774 1.00883C0.490387 0.86444 0.249236 0.870534 0.104474 1.02369C-0.0402885 1.17645 -0.0338199 1.4176 0.118958 1.56236L3.73809 4.99102C3.81123 5.06036 3.90571 5.0954 3.9998 5.0954C4.0939 5.0954 4.18875 5.06036 4.26191 4.99102L7.88104 1.56236C8.03382 1.41758 8.04029 1.17645 7.89553 1.02367Z" fill="#101010" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Fuel Type</h6>
												<div className="box-collapse scrollFilter">
													<ul className="list-filter-checkbox">
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">All</span><span className="checkmark" /> </label><span className="number-item">32</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Plug-in Hybrid (PHEV)</span><span className="checkmark" /> </label><span className="number-item">13</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Hybrid (HEV)</span><span className="checkmark" /> </label><span className="number-item">23</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Electric Vehicle (EV)</span><span className="checkmark" /> </label><span className="number-item">23</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Diesel</span><span className="checkmark" /> </label><span className="number-item">35</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Gasoline/Petrol</span><span className="checkmark" /> </label><span className="number-item">56</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Hydrogen</span><span className="checkmark" /> </label><span className="number-item">76</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Review Score</h6>
												<div className="box-collapse scrollFilter">
													<ul className="list-filter-checkbox">
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium"> <img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /></span><span className="checkmark" />
															</label>
														</li>
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium"> <img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /></span><span className="checkmark" />
															</label>
														</li>
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium"> <img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /></span><span className="checkmark" />
															</label>
														</li>
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium"> <img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /></span><span className="checkmark" />
															</label>
														</li>
														<li>
															<label className="cb-container">
																<input type="checkbox" /><span className="text-sm-medium"> <img src="/assets/imgs/template/icons/star-yellow.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /><img src="/assets/imgs/template/icons/star-grey.svg" alt="Gastonsin" /></span><span className="checkmark" />
															</label>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="sidebar-left border-1 background-body">
										<div className="box-filters-sidebar">
											<div className="block-filter border-1">
												<h6 className="text-lg-bold item-collapse neutral-1000">Booking Location</h6>
												<div className="box-collapse scrollFilter">
													<ul className="list-filter-checkbox">
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Maldives Haven</span><span className="checkmark" /> </label><span className="number-item">198</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Santorini Retreat</span><span className="checkmark" /> </label><span className="number-item">32</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Labadi Beach Hotel</span><span className="checkmark" /> </label><span className="number-item">13</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Kempinski Gold Coast</span><span className="checkmark" /> </label><span className="number-item">23</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Caribbean Cove</span><span className="checkmark" /> </label><span className="number-item">35</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Swiss Alps Lodge</span><span className="checkmark" /> </label><span className="number-item">56</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Accra City View</span><span className="checkmark" /> </label><span className="number-item">76</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Dubai Oasis</span><span className="checkmark" /> </label><span className="number-item">76</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Barcelona Beachfront</span><span className="checkmark" /> </label><span className="number-item">76</span>
														</li>
														<li>
															<label className="cb-container"> <input type="checkbox" /><span className="text-sm-medium">Accra Auto Hub</span><span className="checkmark" /> </label><span className="number-item">76</span>
														</li>
													</ul>
													<div className="box-see-more">
														<Link className="link-see-more" href="#">
															See more
															<svg width={8} height={6} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M7.89553 1.02367C7.75114 0.870518 7.50961 0.864815 7.35723 1.00881L3.9998 4.18946L0.642774 1.00883C0.490387 0.86444 0.249236 0.870534 0.104474 1.02369C-0.0402885 1.17645 -0.0338199 1.4176 0.118958 1.56236L3.73809 4.99102C3.81123 5.06036 3.90571 5.0954 3.9998 5.0954C4.0939 5.0954 4.18875 5.06036 4.26191 4.99102L7.88104 1.56236C8.03382 1.41758 8.04029 1.17645 7.89553 1.02367Z" fill="#101010" />
															</svg>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="background-100 pt-55 pb-55">
							<div className="container">
								<Marquee direction='left' pauseOnHover={true} className="carouselTicker carouselTicker-left box-list-brand-car justify-content-center  wow fadeIn">
									<ul className="carouselTicker__list">
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/lexus.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/lexus-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/mer.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/mer-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/bugatti.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/bugatti-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/jaguar.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/jaguar-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/honda.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/honda-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/chevrolet.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/chevrolet-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/acura.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/acura-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/bmw.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/bmw-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/toyota.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/toyota-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/lexus.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/lexus-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/mer.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/mer-w.png" alt="Gastonsin" />
											</div>
										</li>
										<li className="carouselTicker__item">
											<div className="item-brand">
												<img className="light-mode" src="/assets/imgs/page/homepage2/bugatti.png" alt="Gastonsin" />
												<img className="dark-mode" src="/assets/imgs/page/homepage2/bugatti-w.png" alt="Gastonsin" />
											</div>
										</li>
									</ul>
								</Marquee>
							</div>
						</div>
					</section>
				</div >

			</Layout >
		</>
	)
}