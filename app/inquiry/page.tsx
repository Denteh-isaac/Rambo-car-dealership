"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { useCurrency } from "@/util/currency"

export default function Inquiry() {
    const { currency, format } = useCurrency()
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        carModel: "",
        source: "Ghana Stock",
        budget: "",
        message: "",
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const subject = encodeURIComponent(`Car Inquiry: ${form.carModel || "General"} — ${form.name}`)
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nCar / Model of Interest: ${form.carModel}\nSource: ${form.source}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
        )
        window.location.href = `mailto:info@gastonsincardealership.com?subject=${subject}&body=${body}`
    }

    return (
        <Layout footerStyle={1}>
            <div>
                <div className="page-header pt-30 background-body">
                    <div className="custom-container position-relative mx-auto">
                        <div className="bg-overlay rounded-12 overflow-hidden">
                            <img className="w-100 h-100 rounded-12 img-banner" src="/assets/imgs/page-header/banner4.png" alt="Gastonsin Car Inquiry" />
                        </div>
                        <div className="container position-absolute z-1 top-50 start-50 translate-middle">
                            <h2 className="text-white">Submit a Car Inquiry</h2>
                            <p className="text-white opacity-75 mt-2">Tell us what you need and we'll get back to you within 24 hours.</p>
                        </div>
                    </div>
                </div>

                <section className="section-box py-96 background-body">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="background-card p-40 rounded-12">
                                    <h4 className="neutral-1000 mb-5">Car Inquiry Form</h4>
                                    <p className="text-md-medium neutral-500 mb-30">
                                        Fill in the form below and we will email you with pricing, availability, and import details.
                                        Alternatively, reach us directly at{" "}
                                        <Link href="mailto:info@gastonsincardealership.com" className="text-primary">
                                            info@gastonsincardealership.com
                                        </Link>{" "}
                                        or{" "}
                                        <Link href="https://wa.me/233595987271" target="_blank" rel="noopener noreferrer" className="text-primary">
                                            WhatsApp +233 595 987 271
                                        </Link>.
                                    </p>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <label className="text-sm-bold neutral-500 mb-2">Full Name *</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Kofi Mensah"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-sm-bold neutral-500 mb-2">Email Address *</label>
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-sm-bold neutral-500 mb-2">Phone / WhatsApp</label>
                                                <input
                                                    className="form-control"
                                                    type="tel"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    placeholder="+233 ..."
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-sm-bold neutral-500 mb-2">Car / Model of Interest</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="carModel"
                                                    value={form.carModel}
                                                    onChange={handleChange}
                                                    placeholder="e.g. Jetour X70, Toyota Land Cruiser..."
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-sm-bold neutral-500 mb-2">Source Preference</label>
                                                <select className="form-control" name="source" value={form.source} onChange={handleChange}>
                                                    <option>Ghana Stock</option>
                                                    <option>Import from China</option>
                                                    <option>Import from USA</option>
                                                    <option>Import from Dubai</option>
                                                    <option>Any / Open to suggestions</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="text-sm-bold neutral-500 mb-2">Budget ({currency})</label>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="budget"
                                                    value={form.budget}
                                                    onChange={handleChange}
                                                    placeholder={`e.g. ${format(12000, { decimals: 0 })}`}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label className="text-sm-bold neutral-500 mb-2">Additional Details</label>
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    value={form.message}
                                                    onChange={handleChange}
                                                    rows={5}
                                                    placeholder="Colour preference, year, mileage, accessories, delivery location..."
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-brand-2 w-100 py-3 text-dark text-md-bold">
                                                    Send Inquiry via Email
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-5 mt-lg-0">
                                <div className="background-card p-30 rounded-12 mb-20">
                                    <h6 className="neutral-1000 mb-15">Contact Us Directly</h6>
                                    <p className="text-md-medium neutral-500 mb-10">
                                        <strong>Call:</strong>{" "}
                                        <Link href="tel:+2332411456455" className="text-primary">+233 241 145 6455</Link>
                                    </p>
                                    <p className="text-md-medium neutral-500 mb-10">
                                        <strong>WhatsApp:</strong>{" "}
                                        <Link href="https://wa.me/233595987271" target="_blank" rel="noopener noreferrer" className="text-primary">
                                            +233 595 987 271
                                        </Link>
                                    </p>
                                    <p className="text-md-medium neutral-500 mb-10">
                                        <strong>Email:</strong>{" "}
                                        <Link href="mailto:info@gastonsincardealership.com" className="text-primary">
                                            info@gastonsincardealership.com
                                        </Link>
                                    </p>
                                    <p className="text-md-medium neutral-500">
                                        <strong>Location:</strong> Esiama off Nkroful Road, Western Region, Ghana
                                    </p>
                                </div>
                                <div className="background-card p-30 rounded-12">
                                    <h6 className="neutral-1000 mb-15">We Source From</h6>
                                    <ul className="list-unstyled">
                                        <li className="text-md-medium neutral-500 mb-8">🇨🇳 China — Jetour, Changan, BYD &amp; more</li>
                                        <li className="text-md-medium neutral-500 mb-8">🇺🇸 USA — Ford, GMC, Chevrolet, Toyota</li>
                                        <li className="text-md-medium neutral-500 mb-8">🇦🇪 Dubai — Luxury &amp; used imports</li>
                                        <li className="text-md-medium neutral-500">🇬🇭 Ghana Stock — Ready for immediate pickup</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
