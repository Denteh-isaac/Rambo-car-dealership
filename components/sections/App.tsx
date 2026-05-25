"use client"
import React from "react"

function handleComingSoon(e: React.MouseEvent) {
    e.preventDefault()
    alert('The Rambo app is coming soon! Stay tuned.')
}

export default function App() {
    return (
        <>
            <section className="box-app position-relative">
                <div className="container position-relative z-1">
                    <div className="row align-items-center py-5">
                        <div className="col-lg-5">
                            <h4 className="wow fadeInDown">Rambo App — Coming Soon</h4>
                            <p className="text-md-medium pb-3 wow fadeInUp">Manage your car orders, track imports, and book rentals on the go with the Rambo app.</p>
                            <div className="download-apps mt-0">
                                <a className="wow fadeInUp" href="#" onClick={handleComingSoon}>
                                    <img src="/assets/imgs/template/googleplay.png" alt="Rambo on Google Play" />
                                </a>
                                <a className="wow fadeInUp" data-wow-delay="0.2s" href="#" onClick={handleComingSoon}>
                                    <img src="/assets/imgs/template/appstore.png" alt="Rambo on App Store" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="box-app-img wow fadeIn">
                                <img src="/assets/imgs/app/app-1/truck.png" alt="Rambo Car Dealership" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
