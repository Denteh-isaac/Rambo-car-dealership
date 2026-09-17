import Link from 'next/link'
import { LogoLink } from "@/components/elements/Logo"
import FooterNewsletter from "@/components/layout/footer/FooterNewsletter"

export default function Footer1() {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer-top">
						<div className="row align-items-center">
							<div className="col-lg-5 col-md-6 text-center text-md-start">
								<h5 className="color-white wow fadeInDown">Be the first to hear about new arrivals and price drops.</h5>
							</div>
							<div className="col-lg-7 col-md-6 text-center text-md-end mt-md-0 mt-4">
								<div className="d-flex align-items-center justify-content-center justify-content-md-end">
									<FooterNewsletter />
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-sm-12 footer-1">
							<div className="mt-20 mb-20">
								<LogoLink size="lg" tone="light" />
								<div className="box-info-contact mt-0">
									<p className="text-md neutral-400 icon-address">Esiama off Nkroful Road, Western Region, Ghana</p>
									<p className="text-md neutral-400 icon-worktime">Hours: 8:00 - 18:00, Mon - Sat</p>
									<p className="text-md neutral-400 icon-email">info@gastonsincardealership.com</p>
								</div>
								<div className="box-need-help">
									<p className="need-help text-md-medium mb-5">Need help? Call us</p>
									<br /><Link className="heading-6 phone-support" href="tel:+2332411456455">+233 241 145 6455</Link>
									<br /><Link className="heading-6 phone-support mt-2" href="https://wa.me/233595987271" target="_blank" rel="noopener noreferrer">WhatsApp: +233 595 987 271</Link>
								</div>
							</div>
						</div>
						<div className="col-md-2 col-xs-6 footer-3">
							<h6 className="text-linear-3">Company</h6>
							<ul className="menu-footer">
								<li><Link href="/about-us">About Us</Link></li>
								<li><Link href="/services">Our Services</Link></li>
								<li><Link href="/contact">Contact Us</Link></li>
								<li><Link href="/term">Terms of Service</Link></li>
								<li><Link href="/term#privacy">Privacy Policy</Link></li>
							</ul>
						</div>
						<div className="col-md-2 col-xs-6 footer-2">
							<h6 className="text-linear-3">Our Services</h6>
							<ul className="menu-footer">
								<li><Link href="/services">Car Importation &amp; Shipping</Link></li>
								<li><Link href="/cars-list-1">Vehicle Sales (Ghana Stock)</Link></li>
								<li><Link href="/cars-list-1">Car Rentals</Link></li>
								<li><Link href="/inquiry">Pre-Order from China / USA / Dubai</Link></li>
								<li><Link href="/contact">Warehouse Pickup in Ghana</Link></li>
								<li><Link href="/inquiry">Fleet &amp; Corporate Solutions</Link></li>
								<li><Link href="/services">Port Clearing &amp; Logistics</Link></li>
							</ul>
						</div>
						<div className="col-md-2 col-xs-6 footer-4">
							<h6 className="text-linear-3">Explore</h6>
							<ul className="menu-footer">
								<li><Link href="/cars-list-1">Browse Vehicles</Link></li>
								<li><Link href="/shop-list">Parts &amp; Accessories</Link></li>
								<li><Link href="/dealer-listing">Find a Dealer</Link></li>
								<li><Link href="/inquiry">Request a Car</Link></li>
								<li><Link href="/contact">Visit Our Warehouse</Link></li>
							</ul>
						</div>
						<div className="col-md-3 col-xs-6 footer-5">
							<h6 className="text-linear-3">Support</h6>
							<ul className="menu-footer">
								<li><Link href="/contact">Help Center</Link></li>
								<li><Link href="/about-us">FAQs</Link></li>
								<li><a href="https://wa.me/233595987271" target="_blank" rel="noopener noreferrer">Live Chat on WhatsApp</a></li>
								<li><Link href="/term#rentals">Rental Terms</Link></li>
								<li><Link href="/term#cancellation">Refund Policy</Link></li>
							</ul>
						</div>
					</div>
					<div className="footer-bottom mt-50">
						<div className="row align-items-center justify-content-center">
							<div className="col-md-6 text-md-start text-center mb-20">
								<p className="text-sm color-white">© {new Date().getFullYear()} Gastonsin Car Dealership &amp; Rentals. All rights reserved.</p>
							</div>
							<div className="col-md-6 text-md-end text-center mb-20">
								<div className="d-flex align-items-center justify-content-center justify-content-md-end">
									<p className="text-lg-bold neutral-0 d-inline-block mr-10">Reach us</p>
									<div className="box-socials-footer d-inline-block">
										<a className="icon-socials" href="https://wa.me/233595987271" target="_blank" rel="noopener noreferrer" aria-label="Chat with Gastonsin on WhatsApp">
											<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="white" aria-hidden="true">
												<path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.14 1.6 5.94L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.16-3.41-8.43zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.85 9.85 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.88 9.9zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
											</svg>
										</a>
										<a className="icon-socials" href="tel:+2332411456455" aria-label="Call Gastonsin">
											<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="white" aria-hidden="true">
												<path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
											</svg>
										</a>
										<a className="icon-socials" href="mailto:info@gastonsincardealership.com" aria-label="Email Gastonsin">
											<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="white" aria-hidden="true">
												<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
