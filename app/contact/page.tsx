
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import MailtoForm from "@/components/elements/MailtoForm"
export default function Contact() {

	return (
		<>

			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 rounded-12 img-banner" src="/assets/imgs/page-header/banner4.png" alt="Gastonsin Car Dealership & Rentals" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="text-white">Get in touch</h2>
								<p className="text-white opacity-75 mt-2">Ghana-based. Globally connected. We ship from China, USA &amp; Dubai.</p>
							</div>
						</div>
					</div>
					<section className="box-section background-body pt-110">
						<div className="container">
							<div className="text-start">
								<h4 className="neutral-1000">Our Global Presence</h4>
								<p className="neutral-500 mt-2">Our main office is in Ghana. We source and ship cars from China, the United States, and Dubai directly to you.</p>
							</div>
							<div className="row mt-30">
								{/* Ghana — Main Office */}
								<div className="col-lg-3 col-sm-6">
									<div className="card-contact">
										<div className="card-image">
											<div className="card-icon">
												<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
													<g clipPath="url(#clip0_389_17454)">
														<path d="M35.8681 19.8053C35.3789 17.6848 33.487 16.0223 31.4116 15.5264L27.3126 14.5435L23.6493 10.8098C22.1193 9.25148 19.9894 8.35767 17.8059 8.35767H4.1168C3.84616 8.35767 3.59951 8.51299 3.48258 8.75718C3.36572 9.00131 3.39926 9.29078 3.56899 9.50165L4.40557 10.5412C4.46407 10.6138 4.45472 10.7185 4.38427 10.7797L0.772875 13.9159C0.619102 14.0495 0.530789 14.2432 0.530789 14.4469V18.293L0.0819844 19.139C0.028125 19.2404 0 19.3536 0 19.4684V22.2613C0 22.4002 0.0411328 22.5359 0.118195 22.6515L1.18062 24.2441C1.31105 24.4395 1.53056 24.557 1.76555 24.557H2.98962C3.32023 26.311 4.86281 27.6423 6.71147 27.6423C8.56013 27.6423 10.1026 26.311 10.4333 24.557H14.0502C14.4385 24.557 14.7533 24.2421 14.7533 23.8538C14.7533 23.4656 14.4385 23.1507 14.0502 23.1507H10.4343C10.1012 21.3839 8.50444 20.0658 6.7114 20.0658C4.91646 20.0658 3.32114 21.3859 2.98828 23.1507H2.14172L1.40625 22.0482V19.6434L1.85513 18.7974C1.90898 18.6959 1.93711 18.5827 1.93711 18.4678V14.7674L5.30641 11.8414C5.91729 11.3109 6.02564 10.4211 5.57852 9.76385H17.8059C19.6145 9.76385 21.3786 10.5041 22.6457 11.7948L26.4503 15.6725C26.5427 15.7667 26.6598 15.8329 26.7882 15.8638L31.0842 16.894C31.3504 16.9576 31.6076 17.0444 31.8557 17.151L31.3502 17.4759C30.8563 17.7928 30.5613 18.3331 30.5613 18.9213C30.5613 19.8569 31.3433 20.6392 32.2791 20.6392H34.58C34.5882 20.7355 34.5938 20.8322 34.5938 20.9288V22.0744L33.9784 23.1507H31.062C30.7296 21.3853 29.134 20.0658 27.3393 20.0658C25.5445 20.0658 23.9504 21.3862 23.6167 23.1507H20.2371C19.8489 23.1507 19.534 23.4656 19.534 23.8538C19.534 24.2421 19.8489 24.557 20.2371 24.557H23.6176C23.9482 26.311 25.4908 27.6423 27.3394 27.6423C29.188 27.6423 30.7306 26.311 31.0613 24.557H34.3865C34.6388 24.557 34.8716 24.4218 34.9969 24.2029L35.9075 22.6103C35.9682 22.504 36.0001 22.3837 36.0001 22.2613V20.9288C36 20.5496 35.9552 20.1698 35.8681 19.8053Z" fill="black" />
													</g>
												</svg>
											</div>
										</div>
										<div className="card-info">
											<div className="card-title mb-">
												<Link className="title heading-6" href="mailto:info@gastonsincardealership.com">Ghana (Main Office)</Link>
											</div>
											<div className="card-method-contact">
												<div className="d-flex align-items-start mb-2">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
															<path d="M9 1.0625C7.35897 1.0625 5.78516 1.7144 4.62478 2.87478C3.4644 4.03516 2.8125 5.60897 2.8125 7.25C2.8125 10.5181 8.325 17.4312 8.56125 17.7294C8.61396 17.7951 8.68074 17.8481 8.75668 17.8845C8.83262 17.921 8.91577 17.9399 9 17.9399C9.08423 17.9399 9.16738 17.921 9.24332 17.8845C9.31925 17.8481 9.38604 17.7951 9.43875 17.7294C9.675 17.4312 15.1875 10.5181 15.1875 7.25C15.1875 5.60897 14.5356 4.03516 13.3752 2.87478C12.2148 1.7144 10.641 1.0625 9 1.0625Z" fill="#101010" />
														</svg>
													</div>
													<span className="location text-md-medium ms-2">Esiama off Nkroful Road, Western Region, Ghana</span>
												</div>
												<div className="d-flex align-items-start mb-2">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
															<path d="M3.92512 7.77453C5.22103 11.9687 8.53091 15.2786 12.7251 16.5745C14.8357 17.2266 16.6663 15.3757 16.6663 13.1666C16.6663 12.6143 16.2171 12.1729 15.6687 12.1075C14.9545 12.0223 14.268 11.8467 13.621 11.5926L12.355 12.8587C10.2958 11.8732 8.62635 10.2038 7.64091 8.14464L8.90698 6.87857C8.65286 6.23159 8.47732 5.54513 8.39211 4.83093C8.32669 4.28253 7.88529 3.83325 7.33301 3.83325C5.12387 3.83325 3.27296 5.66384 3.92512 7.77453Z" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
													<Link className="phone text-md-medium ms-2" href="tel:+2332411456455">+233 241 145 6455 (Call)</Link>
												</div>
												<div className="d-flex align-items-start mb-2">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
															<path d="M3.92512 7.77453C5.22103 11.9687 8.53091 15.2786 12.7251 16.5745C14.8357 17.2266 16.6663 15.3757 16.6663 13.1666C16.6663 12.6143 16.2171 12.1729 15.6687 12.1075C14.9545 12.0223 14.268 11.8467 13.621 11.5926L12.355 12.8587C10.2958 11.8732 8.62635 10.2038 7.64091 8.14464L8.90698 6.87857C8.65286 6.23159 8.47732 5.54513 8.39211 4.83093C8.32669 4.28253 7.88529 3.83325 7.33301 3.83325C5.12387 3.83325 3.27296 5.66384 3.92512 7.77453Z" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" />
														</svg>
													</div>
													<Link className="phone text-md-medium ms-2" href="https://wa.me/233595987271" target="_blank" rel="noopener noreferrer">+233 595 987 271 (WhatsApp)</Link>
												</div>
												<div className="d-flex align-items-center">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={16} height={13} viewBox="0 0 16 13" fill="none">
															<path d="M14.5938 0.875H1.40625C0.629281 0.875 0 1.50819 0 2.28125V10.7188C0 11.4964 0.633906 12.125 1.40625 12.125H14.5938C15.3642 12.125 16 11.4991 16 10.7188V2.28125C16 1.50956 15.3732 0.875 14.5938 0.875Z" fill="#101010" />
														</svg>
													</div>
													<Link className="email text-md-medium ms-2" href="mailto:info@gastonsincardealership.com">info@gastonsincardealership.com</Link>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* China — Sourcing Hub */}
								<div className="col-lg-3 col-sm-6">
									<div className="card-contact">
										<div className="card-image">
											<div className="card-icon">
												<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
													<g clipPath="url(#clip0_389_17585)">
														<path d="M35.9459 20.8441L35.3636 19.4651L35.7476 18.6345C35.9981 18.0905 35.7985 17.4156 35.2935 17.0945C34.0939 16.3343 32.8757 15.6313 31.5238 15.1755C29.6603 14.5472 27.6716 14.3426 25.7133 14.3426C24.7999 14.3426 24.0737 13.8273 23.1543 13.1751C21.8711 12.2646 20.2742 11.1316 17.5767 11.1316H13.2229C11.8167 11.1316 10.3154 11.325 8.76061 11.7065C5.3741 12.5371 2.51053 14.0573 1.10451 14.8899C0.423226 15.2939 0 16.037 0 16.8291V19.949C0 20.7406 0.590364 21.4253 1.37332 21.5417L2.63639 21.724C2.75459 22.5079 3.11987 23.2301 3.69365 23.7976C4.39222 24.4887 5.31651 24.8685 6.29825 24.8685H6.31892C8.13045 24.8587 9.63435 23.543 9.94401 21.8207H13.2551C13.6434 21.8207 13.9582 21.5059 13.9582 21.1176C13.9582 20.7292 13.6434 20.4144 13.2551 20.4144H9.92791C9.58048 18.7146 8.03081 17.4584 6.29881 17.4584C4.60226 17.4584 3.07797 18.659 2.69102 20.314L1.58005 20.1507C1.48097 20.136 1.4063 20.0492 1.4063 19.9489V16.8291C1.4063 16.531 1.56556 16.2514 1.82151 16.0996C3.10757 15.338 5.67294 13.9725 8.71835 13.1681L10.4629 14.8711C11.0368 15.4314 11.8182 15.7497 12.6201 15.7497H25.8265C29.7553 15.7745 31.8093 16.6434 33.4967 17.6369H32.5358C32.1475 17.6369 31.8326 17.9517 31.8326 18.34C31.8326 18.7284 32.1475 19.0432 32.5358 19.0432H34.015L34.238 20.4144H29.6707C29.3208 18.7167 27.7717 17.4584 26.0426 17.4584C24.3115 17.4584 22.7617 18.7122 22.414 20.4144H19.4393C19.0511 20.4144 18.7362 20.7292 18.7362 21.1176C18.7362 21.5059 19.0511 21.8207 19.4393 21.8207H22.3976C22.7091 23.5523 24.226 24.8677 26.0422 24.8677C27.8101 24.8677 29.3776 23.5648 29.6883 21.8207H35.2981C35.7927 21.8207 36.1383 21.2998 35.9459 20.8441Z" fill="black" />
													</g>
												</svg>
											</div>
										</div>
										<div className="card-info">
											<div className="card-title mb-">
												<Link className="title heading-6" href="mailto:china@gastonsincardealership.com">China (Sourcing Hub)</Link>
											</div>
											<div className="card-method-contact">
												<div className="d-flex align-items-start mb-2">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
															<path d="M9 1.0625C7.35897 1.0625 5.78516 1.7144 4.62478 2.87478C3.4644 4.03516 2.8125 5.60897 2.8125 7.25C2.8125 10.5181 8.325 17.4312 8.56125 17.7294C9.675 17.4312 15.1875 10.5181 15.1875 7.25C15.1875 5.60897 14.5356 4.03516 13.3752 2.87478C12.2148 1.7144 10.641 1.0625 9 1.0625Z" fill="#101010" />
														</svg>
													</div>
													<span className="location text-md-medium ms-2">Guangzhou Auto Export Zone, Guangdong, China</span>
												</div>
												<div className="d-flex align-items-start mb-2">
													<div className="icon" style={{minWidth: 20}} />
													<p className="text-md-medium neutral-500 ms-2 mb-0">We source Jetour, Haval, BYD, GAC, Chery &amp; more direct from manufacturers.</p>
												</div>
												<div className="d-flex align-items-center">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={16} height={13} viewBox="0 0 16 13" fill="none">
															<path d="M14.5938 0.875H1.40625C0.629281 0.875 0 1.50819 0 2.28125V10.7188C0 11.4964 0.633906 12.125 1.40625 12.125H14.5938C15.3642 12.125 16 11.4991 16 10.7188V2.28125C16 1.50956 15.3732 0.875 14.5938 0.875Z" fill="#101010" />
														</svg>
													</div>
													<Link className="email text-md-medium ms-2" href="mailto:china@gastonsincardealership.com">china@gastonsincardealership.com</Link>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* USA — Sourcing Hub */}
								<div className="col-lg-3 col-sm-6">
									<div className="card-contact">
										<div className="card-image">
											<div className="card-icon">
												<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
													<g clipPath="url(#clip0_389_17597)">
														<path d="M25.0002 16.5981C25.9032 16.5981 26.4805 15.5707 26.007 14.7993L24.166 11.3281C23.8681 10.8731 23.4278 10.637 22.9529 10.637H15.9707C15.5824 10.637 15.2676 10.9518 15.2676 11.3401V15.895C15.2676 16.2833 15.5824 16.5981 15.9707 16.5981H25.0002ZM22.9552 12.0465L24.6234 15.1919H20.1097V12.0452L22.9552 12.0465ZM16.6738 12.0436L18.7035 12.0445V15.1919H16.6738V12.0436Z" fill="black" />
														<path d="M36 18.639C35.9999 17.0716 35.0928 15.4347 33.4487 15.1053L30.1845 14.4511C29.5072 14.2417 28.9065 13.8131 28.4872 13.2402L26.1315 9.25633C25.5026 8.37447 24.5377 7.87891 23.5167 7.87891H15.3C13.6743 7.87891 12.3518 9.20148 12.3518 10.8271V12.952H2.02148C0.90682 12.952 0 13.8588 0 14.9734V23.2176C0 24.2512 0.840937 25.0921 1.87453 25.0921H4.74412C5.07403 26.8148 6.59137 28.121 8.40888 28.121C10.2264 28.121 11.7437 26.8148 12.0736 25.0921H15.3743C15.7626 25.0921 16.0774 24.7773 16.0774 24.389C16.0774 24.0006 15.7626 23.6859 15.3743 23.6859H12.0743C11.7435 21.9566 10.1816 20.6633 8.42217 20.6571C6.65332 20.6504 5.07586 21.9467 4.74279 23.6859H1.87453C1.61634 23.6859 1.40625 23.4758 1.40625 23.2176V14.9734C1.40625 14.6341 1.68223 14.3581 2.02148 14.3581H12.3518V15.5436C12.3518 16.5086 13.1374 17.2904 14.1 17.3008H24.0277L31.2429 16.8029V18.1372C31.2429 19.0928 32.0204 19.8703 32.976 19.8703H34.5938V23.2175C34.5938 23.4757 34.3837 23.6858 34.1255 23.6858H31.4497C31.1182 21.9574 29.5584 20.6639 27.7985 20.6571C26.0284 20.6507 24.4522 21.946 24.1189 23.6858H21.561C21.1727 23.6858 20.8579 24.0006 20.8579 24.3889C20.8579 24.7772 21.1727 25.092 21.561 25.092H24.1196C24.4495 26.8148 25.9668 28.121 27.7843 28.121C29.6018 28.121 31.1192 26.8148 31.4491 25.092H34.1255C35.1591 25.092 36 24.2512 36 23.2175V18.6395Z" fill="black" />
													</g>
												</svg>
											</div>
										</div>
										<div className="card-info">
											<div className="card-title mb-">
												<Link className="title heading-6" href="mailto:usa@gastonsincardealership.com">USA (Sourcing Hub)</Link>
											</div>
											<div className="card-method-contact">
												<div className="d-flex align-items-start mb-2">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
															<path d="M9 1.0625C7.35897 1.0625 5.78516 1.7144 4.62478 2.87478C3.4644 4.03516 2.8125 5.60897 2.8125 7.25C2.8125 10.5181 8.325 17.4312 8.56125 17.7294C9.675 17.4312 15.1875 10.5181 15.1875 7.25C15.1875 5.60897 14.5356 4.03516 13.3752 2.87478C12.2148 1.7144 10.641 1.0625 9 1.0625Z" fill="#101010" />
														</svg>
													</div>
													<span className="location text-md-medium ms-2">Auto Auction &amp; Export Hub, New Jersey, USA</span>
												</div>
												<div className="d-flex align-items-start mb-2">
													<div className="icon" style={{minWidth: 20}} />
													<p className="text-md-medium neutral-500 ms-2 mb-0">We source clean-title US vehicles — Toyota, Ford, Chevrolet, Lexus, BMW &amp; more.</p>
												</div>
												<div className="d-flex align-items-center">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={16} height={13} viewBox="0 0 16 13" fill="none">
															<path d="M14.5938 0.875H1.40625C0.629281 0.875 0 1.50819 0 2.28125V10.7188C0 11.4964 0.633906 12.125 1.40625 12.125H14.5938C15.3642 12.125 16 11.4991 16 10.7188V2.28125C16 1.50956 15.3732 0.875 14.5938 0.875Z" fill="#101010" />
														</svg>
													</div>
													<Link className="email text-md-medium ms-2" href="mailto:usa@gastonsincardealership.com">usa@gastonsincardealership.com</Link>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Dubai — Sourcing Hub */}
								<div className="col-lg-3 col-sm-6">
									<div className="card-contact">
										<div className="card-image">
											<div className="card-icon">
												<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 36 36" fill="none">
													<g clipPath="url(#clip0_389_17592)">
														<path d="M35.5612 17.3162C34.558 16.3755 33.4257 15.5691 32.005 15.4558L24.3618 14.8135L21.3166 11.8806C20.7966 11.3808 20.1138 11.1055 19.3937 11.1055H9.37028C8.67669 11.1055 7.99689 11.3724 7.48774 11.843L4.30149 14.79H2.70682C1.69182 14.79 0.827022 15.5155 0.650461 16.5149L0.0311986 20.0125C-0.191629 21.2714 0.80874 22.465 2.08756 22.465H4.57164C4.89171 23.8549 6.13825 24.8947 7.6238 24.8947C9.10948 24.8947 10.3559 23.8549 10.676 22.465H14.1587C14.547 22.465 14.8619 22.1502 14.8619 21.7619C14.8619 21.3736 14.547 21.0587 14.1587 21.0587H10.6767C10.3544 19.6585 9.05991 18.629 7.62351 18.629C6.18874 18.629 4.89192 19.6604 4.57023 21.0587H2.08742C1.67045 21.0587 1.34278 20.67 1.41577 20.2576L2.0351 16.7598C2.09276 16.4332 2.37521 16.1963 2.70668 16.1963L8.11776 16.1965C9.00464 16.1965 9.80102 15.6688 10.1466 14.852L11.1368 12.5117H12.5316L11.822 14.5617C11.6919 14.9376 11.752 15.3553 11.9827 15.6793C12.2134 16.0032 12.5884 16.1965 12.9861 16.1965H24.0277L31.2429 16.8029V18.1372C31.2429 19.0928 32.0204 19.8703 32.976 19.8703H34.5936V20.8328C34.5936 20.9574 34.4921 21.0586 34.3671 21.0586H29.7869C29.4642 19.6554 28.1722 18.6289 26.7336 18.6289C25.2995 18.6289 24.0017 19.6605 23.6803 21.0586H20.3929C20.0046 21.0586 19.6898 21.3735 19.6898 21.7618C19.6898 22.15 20.0046 22.4649 20.3929 22.4649H23.6812C24.0013 23.8547 25.2479 24.8946 26.7334 24.8946C28.2191 24.8946 29.4656 23.8547 29.7856 22.4649H34.3671C35.2674 22.4649 35.9998 21.7328 35.9998 20.8328V18.3224C36.0001 17.9405 35.8398 17.5759 35.5612 17.3162Z" fill="black" />
													</g>
												</svg>
											</div>
										</div>
										<div className="card-info">
											<div className="card-title mb-">
												<Link className="title heading-6" href="mailto:dubai@gastonsincardealership.com">Dubai, UAE (Sourcing Hub)</Link>
											</div>
											<div className="card-method-contact">
												<div className="d-flex align-items-start mb-2">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
															<path d="M9 1.0625C7.35897 1.0625 5.78516 1.7144 4.62478 2.87478C3.4644 4.03516 2.8125 5.60897 2.8125 7.25C2.8125 10.5181 8.325 17.4312 8.56125 17.7294C9.675 17.4312 15.1875 10.5181 15.1875 7.25C15.1875 5.60897 14.5356 4.03516 13.3752 2.87478C12.2148 1.7144 10.641 1.0625 9 1.0625Z" fill="#101010" />
														</svg>
													</div>
													<span className="location text-md-medium ms-2">Al Aweer Auto Market, Dubai, UAE</span>
												</div>
												<div className="d-flex align-items-start mb-2">
													<div className="icon" style={{minWidth: 20}} />
													<p className="text-md-medium neutral-500 ms-2 mb-0">We source luxury &amp; SUV vehicles — Mercedes, Toyota Land Cruiser, Nissan Patrol &amp; more.</p>
												</div>
												<div className="d-flex align-items-center">
													<div className="icon">
														<svg className="invert" xmlns="http://www.w3.org/2000/svg" width={16} height={13} viewBox="0 0 16 13" fill="none">
															<path d="M14.5938 0.875H1.40625C0.629281 0.875 0 1.50819 0 2.28125V10.7188C0 11.4964 0.633906 12.125 1.40625 12.125H14.5938C15.3642 12.125 16 11.4991 16 10.7188V2.28125C16 1.50956 15.3732 0.875 14.5938 0.875Z" fill="#101010" />
														</svg>
													</div>
													<Link className="email text-md-medium ms-2" href="mailto:dubai@gastonsincardealership.com">dubai@gastonsincardealership.com</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="box-section box-contact-form background-body">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 mb-30">
									<h2 className="neutral-1000 mb-25">Get in Touch</h2>
									<p className="neutral-500 mb-25">Whether you want to pre-order a car from China, USA, or Dubai — or pick one from our Ghana warehouse — we are here to help. Reach out and let us find your perfect ride.</p>
									<MailtoForm className="form-contact" subject="Website enquiry" intro="New message from the website contact form.">
										<div className="row">
											<div className="col-lg-6">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">First Name</label>
													<input className="form-control username" type="text" name="firstName" aria-label="First name" placeholder="First Name" required />
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Last Name</label>
													<input className="form-control username" type="text" name="lastName" aria-label="Last name" placeholder="Last Name" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Email Address</label>
													<input className="form-control email" type="email" name="email" aria-label="Email" placeholder="email@domain.com" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Phone Number (WhatsApp preferred)</label>
													<input className="form-control phone" type="tel" name="phone" aria-label="Phone / WhatsApp" placeholder="Phone number" />
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<label className="text-sm-medium neutral-1000">Your Message</label>
													<textarea className="form-control" rows={6} name="message" aria-label="Message" placeholder="Tell us the car you want, your budget, or any questions..." required />
												</div>
											</div>
											<div className="box-remember-forgot">
												<div className="form-group">
													<div className="remeber-me">
														<label className="text-sm-medium neutral-500"> <input className="cb-remember" type="checkbox" />Agree to our <Link className="text-sm-medium neutral-1000" href="/term">Terms of service </Link>and <Link className="text-sm-medium neutral-1000" href="/term">Privacy Policy</Link> </label>
													</div>
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
								</div>
								<div className="col-lg-6 mb-30">
									<div className="ps-lg-5">
										<h4 className="neutral-1000">Our Location</h4>
										<p className="neutral-500 mb-10">Esiama off Nkroful Road, Western Region, Ghana</p>
										<div className="d-flex gap-3 mb-30 flex-wrap">
											<Link href="tel:+2332411456455" className="btn btn-book btn-small">
												<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 20 20" fill="none" className="me-1">
													<path d="M3.925 7.775C5.221 11.969 8.531 15.279 12.725 16.575C14.836 17.227 16.666 15.376 16.666 13.167C16.666 12.614 16.217 12.173 15.669 12.108C14.955 12.022 14.268 11.847 13.621 11.593L12.355 12.859C10.296 11.873 8.626 10.204 7.641 8.145L8.907 6.879C8.653 6.232 8.477 5.545 8.392 4.831C8.327 4.283 7.885 3.833 7.333 3.833C5.124 3.833 3.273 5.664 3.925 7.775Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
												Call Us
											</Link>
											<Link href="https://wa.me/233595987271" target="_blank" rel="noopener noreferrer" className="btn btn-brand-2 btn-small text-dark">
												WhatsApp Us
											</Link>
										</div>
										<iframe
											className="h-520 rounded-3"
											src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sgh!4v1789115556010!5m2!1sen!2sgh!6m8!1m7!1sKhIXdbo6sugUbO6uBgGVWA!2m2!1d4.961097417344019!2d-2.327745335434869!3f297.2972908483529!4f-10.630530162432493!5f0.7820865974627469"
											width="100%"
											height={450}
											style={{ border: 0 }}
											allowFullScreen
											loading="lazy"
											referrerPolicy="strict-origin-when-cross-origin"
										/>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

			</Layout>
		</>
	)
}
