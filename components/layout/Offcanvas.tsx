'use client';
import Link from "next/link";
import { CURRENCIES, CurrencyCode, useCurrency } from "@/util/currency";
import Logo from "@/components/elements/Logo"

export default function Offcanvas({ isOffcanvas, handleOffcanvas }: any) {
    const { currency, setCurrency } = useCurrency();
    return (
        <>
            <div className={`sidebar-canvas-wrapper perfect-scrollbar button-bg-2 ${isOffcanvas ? "sidebar-canvas-visible" : ""}`}>
                <div className="sidebar-canvas-container">
                    <div className="sidebar-canvas-head">
                        <div className="sidebar-canvas-logo">
                            <Link className="d-flex align-items-center" href="/" aria-label="Car King Auto by Gastonsin — home">
                            	<span className="light-mode"><Logo size="sm" tone="dark" /></span>
                            	<span className="dark-mode"><Logo size="sm" tone="light" /></span>
                            </Link>
                        </div>
                        <div className="sidebar-canvas-lang">
                            <div className="d-inline-block box-dropdown-cart align-middle mr-15">
                                <span className="text-14-medium icon-list icon-cart">
                                    <span className="text-14-medium arrow-down text-dark invert">{currency}</span>
                                </span>
                                <div className="dropdown-cart">
                                    <ul>
                                        {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
                                            <li key={code}>
                                                <a
                                                    className="text-sm-medium"
                                                    href="#"
                                                    onClick={(e) => { e.preventDefault(); setCurrency(code); }}
                                                >
                                                    {CURRENCIES[code].label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <a className="close-canvas" onClick={handleOffcanvas}>
                                {" "}
                                <img alt="Gastonsin" src="/assets/imgs/template/icons/close.png" />
                            </a>
                        </div>
                    </div>
                    <div className="sidebar-canvas-content">
                        <div className="box-contactus">
                            <h6 className="title-contactus neutral-1000">Contact Us</h6>
                            <div className="contact-info">
                                <p className="address-2 text-md-medium neutral-1000">
                                    Esiama off Nkroful Road, Western Region
                                    Ghana
                                </p>
                                <p className="hour-work-2 text-md-medium neutral-1000">Hours: 8:00 - 18:00, Mon - Sat</p>
                                <p className="email-2 text-md-medium neutral-1000">info@gastonsincardealership.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOffcanvas && <div className="body-overlay-1" onClick={handleOffcanvas} />}
        </>
    );
}
