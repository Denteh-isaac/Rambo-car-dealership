import Layout from "@/components/layout/Layout"
import Link from "next/link"
import type { ReactNode } from "react"

const UPDATED = "11 September 2026"

const P = ({ children }: { children: ReactNode }) => <p className="text-md-medium neutral-500">{children}</p>

/** A list of "Label: explanation" clauses, matching the page's original styling. */
function Clauses({ items }: { items: [string, ReactNode][] }) {
	return (
		<ul>
			{items.map(([label, text]) => (
				<li className="mb-2" key={label}>
					<p className="text-md-medium neutral-1000">
						{label}: <span className="neutral-500">{text}</span>
					</p>
				</li>
			))}
		</ul>
	)
}

type Section = { id: string; title: string; body: ReactNode }

/*
 * The table of contents and the page body are both rendered from this list,
 * so a section can never exist without its link or a link without its section.
 * The footer links to #privacy, #cancellation and #rentals — keep those ids stable.
 */
const SECTIONS: Section[] = [
	{
		id: "acceptance",
		title: "Acceptance of Terms",
		body: <P>{"These Terms of Service govern your use of the Gastonsin Car Dealership & Rentals website and every service we provide: vehicle sales, import orders, car rentals and port clearing. By using this website, sending us an inquiry, placing an order or renting a vehicle, you agree to these terms. If you do not agree, please do not use our services."}</P>,
	},
	{
		id: "about",
		title: "Who We Are",
		body: <P>{"Gastonsin Car Dealership & Rentals is a Ghanaian business based at Esiama, off Nkroful Road, in the Western Region of Ghana. In these terms, “Gastonsin”, “we” and “us” mean the company, and “you” means the person or organisation using our website or services."}</P>,
	},
	{
		id: "services",
		title: "Services We Provide",
		body: (
			<>
				<Clauses
					items={[
						["Vehicle sales", "Vehicles from our warehouse stock at Esiama, already cleared and registered."],
						["Import orders", "Sourcing and shipping vehicles to your specification from China, the United States and Dubai."],
						["Car rentals", "Daily, weekly and long-term rentals from our rental fleet."],
						["Clearing and logistics", "Customs clearing at Tema and Takoradi, registration with the Driver and Vehicle Licensing Authority (DVLA), and delivery within Ghana."],
					]}
				/>
				<P>{"We may change, pause or stop a service at any time. Any sale, order or rental already confirmed to you in writing will be honoured on the terms agreed at that time."}</P>
			</>
		),
	},
	{
		id: "purchases",
		title: "Buying a Vehicle From Stock",
		body: (
			<Clauses
				items={[
					["Inspection", "You are welcome to inspect and test drive any vehicle at our warehouse before you buy. Vehicles are sold in the condition described to you in writing at the time of sale."],
					["Price", "The price of a stock vehicle is confirmed in writing before you pay. Once confirmed and paid, it does not change."],
					["Ownership", "Ownership passes to you once full payment is received. We prepare the change-of-ownership documents and DVLA paperwork at handover."],
					["Documents", "You must provide a valid Ghana Card or passport. Companies must also provide their certificate of incorporation and Taxpayer Identification Number (TIN)."],
				]}
			/>
		),
	},
	{
		id: "imports",
		title: "Import Orders and Pre-Orders",
		body: (
			<Clauses
				items={[
					["Deposit", "An import order begins once we receive your deposit. The deposit amount is agreed in writing when you place the order."],
					["Landed price", "Our quotes cover the vehicle, freight, insurance, import duty, clearing and delivery within Ghana. Because duty depends on Ghana Revenue Authority (GRA) valuation and on exchange rates, the final amount is confirmed to you in writing before the balance is due."],
					["Balance", "The balance is due once the vehicle has arrived in Ghana and you have had the opportunity to inspect it."],
					["Delivery times", "Typical lead times — around 5–8 weeks from Dubai, 6–10 weeks from China and 8–12 weeks from the United States — are estimates, not guarantees. Shipping schedules and port clearance can cause delays outside our control, and we will keep you informed throughout."],
					["Not as described", "If a vehicle does not match the specification agreed in writing, we will repair it, replace it or refund you."],
				]}
			/>
		),
	},
	{
		id: "rentals",
		title: "Car Rentals",
		body: (
			<Clauses
				items={[
					["Eligibility", "Renters must hold a valid driving licence and provide a Ghana Card or passport. The minimum age and any other requirements are confirmed when you book."],
					["Security deposit", "A refundable security deposit may be required. It is returned once the vehicle has been checked on its return."],
					["Use of the vehicle", "Rental vehicles must be driven lawfully, only by the drivers named in the rental agreement, and within Ghana unless we agree otherwise in writing."],
					["Fuel, fines and damage", "Please return the vehicle with the same fuel level it was collected with. You are responsible for traffic fines incurred and for damage caused during the rental beyond normal wear, subject to any cover included in your agreement. Late returns may be charged at the daily rate."],
				]}
			/>
		),
	},
	{
		id: "payment",
		title: "Payment and Fees",
		body: (
			<Clauses
				items={[
					["Payment methods", "We accept bank transfer, mobile money and cash at our warehouse."],
					["Protect yourself", "Before sending money, always confirm our payment details by calling us directly on +233 241 145 6455. We will never ask you to pay into a new or different account by message alone."],
					["Currency", "Website prices are shown in US dollars. Ghana cedi and other currency conversions are shown for guidance only; the amount payable is the figure confirmed to you in writing."],
					["Price changes", "Prices shown on the website may change with exchange rates, duty and supplier costs until a price has been confirmed to you in writing."],
				]}
			/>
		),
	},
	{
		id: "cancellation",
		title: "Cancellations and Refunds",
		body: (
			<Clauses
				items={[
					["Stock vehicles", "You may cancel a stock purchase at no cost at any time before payment is made."],
					["Import orders", "You may cancel while we are still sourcing your vehicle, and your deposit will be refunded less any costs already committed. Once the vehicle has been purchased or shipped, the deposit covers costs already incurred — we will show you exactly where things stand before you decide."],
					["Rentals", "Cancellation notice periods and any charges are set out in your rental agreement."],
					["How refunds are paid", "Approved refunds are paid back using your original payment method wherever possible, and we will tell you the expected timing when the refund is agreed."],
				]}
			/>
		),
	},
	{
		id: "condition",
		title: "Vehicle Condition and Warranty",
		body: (
			<Clauses
				items={[
					["Inspection", "Every imported vehicle is inspected before it leaves the source market and again when it arrives in Ghana."],
					["Warranty", "Any manufacturer or supplier warranty that applies to a vehicle is passed on to you and explained at the time of sale. We do not provide a separate warranty unless one is agreed in writing."],
					["Normal wear", "Tyres, brake pads, batteries and similar parts wear with use and are not treated as defects."],
				]}
			/>
		),
	},
	{
		id: "liability",
		title: "Limitation of Liability",
		body: (
			<Clauses
				items={[
					["Our responsibility", "We provide our services with reasonable care and skill, and as described to you in writing."],
					["Events outside our control", "We are not responsible for losses that were not reasonably foreseeable, or for delays caused by events outside our control, such as shipping disruption, port congestion or changes in government regulation."],
					["Your legal rights", "Nothing in these terms limits any rights you have under the laws of Ghana that cannot lawfully be excluded."],
				]}
			/>
		),
	},
	{
		id: "privacy",
		title: "Privacy Policy",
		body: (
			<Clauses
				items={[
					["What we collect", "When you contact us, send an inquiry, or buy or rent a vehicle, we collect details such as your name, phone number, email address and, where required, identification documents."],
					["How we use it", "We use your information only to respond to your inquiries, process your orders and rentals, clear and register vehicles, and keep you updated about your order."],
					["Who we share it with", "We share information only where needed to deliver our services — for example with the Ghana Revenue Authority, the DVLA, customs agents and shipping partners. We never sell your personal information."],
					["Your rights", "You may ask to see, correct or delete the personal information we hold about you by contacting us. We handle personal data in line with Ghana’s Data Protection Act, 2012 (Act 843)."],
				]}
			/>
		),
	},
	{
		id: "intellectual-property",
		title: "Intellectual Property",
		body: <P>{"The Gastonsin name, logo and the content of this website belong to Gastonsin Car Dealership & Rentals and may not be copied or used without our permission. Some photographs on this website are used under licence from their owners."}</P>,
	},
	{
		id: "governing-law",
		title: "Governing Law",
		body: (
			<P>
				{"These terms are governed by the laws of the Republic of Ghana, and any dispute will be dealt with by the courts of Ghana. We always prefer to resolve concerns directly, so please "}
				<Link href="/contact">contact us</Link>
				{" first."}
			</P>
		),
	},
	{
		id: "changes",
		title: "Changes to These Terms",
		body: <P>{"We may update these terms from time to time. The latest version is always published on this page together with the date it was last updated. Changes do not affect any sale, order or rental already confirmed to you in writing."}</P>,
	},
	{
		id: "contact",
		title: "Contact Us",
		body: (
			<Clauses
				items={[
					["Address", "Esiama, off Nkroful Road, Western Region, Ghana"],
					["Phone", <a href="tel:+2332411456455">+233 241 145 6455</a>],
					["WhatsApp", <a href="https://wa.me/233595987271" target="_blank" rel="noopener noreferrer">+233 595 987 271</a>],
					["Email", <a href="mailto:info@gastonsincardealership.com">info@gastonsincardealership.com</a>],
				]}
			/>
		),
	},
]

export default function Term() {
	return (
		<>
			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 rounded-12 img-banner" src="/assets/imgs/page-header/banner5.png" alt="Gastonsin" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="text-white">Terms Of Service</h2>
								<span className="text-white text-xl-medium">Last updated: {UPDATED}</span>
							</div>
						</div>
					</div>
					<section className="box-section-term background-body pt-85 pb-85">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
									<div className="sidebar rounded-3 border py-5 px-4">
										<div className="sidebar-menu">
											<h6 className="neutral-1000 mb-3">Table of content</h6>
											<ul>
												{SECTIONS.map((s, i) => (
													<li className="mb-2" key={s.id}>
														<Link href={`#${s.id}`} className={`text-md-medium neutral-500${i === 0 ? " active" : ""}`}>
															{s.title}
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-9 px-lg-5">
									<div className="d-flex flex-column gap-4">
										{SECTIONS.map((s) => (
											<div className="content" key={s.id}>
												<h3 className="text-xl-bold mb-2 neutral-1000" id={s.id}>{s.title}</h3>
												{s.body}
											</div>
										))}
										<span className="text-xl-medium border-top pt-4 neutral-1000">Last updated: {UPDATED}</span>
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
