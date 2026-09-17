"use client";
import dynamic from "next/dynamic";
const ThemeSwitch = dynamic(() => import("@/components/elements/ThemeSwitch"), {
    ssr: false,
});
import Link from "next/link";
import Logo from "@/components/elements/Logo"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, handleOffcanvas, isOffcanvas }: any) {
    return (
        <>
            <header className={`header sticky-bar header-home-3 border-0 ${scroll ? "stick" : ""}`}>
                <div className="container-fluid background-body">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex align-items-center" href="/" aria-label="Car King Auto by Gastonsin — home">
                                	<span className="light-mode"><Logo size="md" tone="dark" /></span>
                                	<span className="dark-mode"><Logo size="md" tone="light" /></span>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu">
                                    <ul className="main-menu">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/cars-list-1">Vehicles</Link></li>
                                        <li className="has-children">
                                            <Link href="/dealer-listing">Dealers</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/dealer-listing">Dealers Listing</Link></li>
                                                <li><Link href="/dealer-details">Dealer Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="/shop-list">Shop</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/shop-list">Shop Grid</Link></li>
                                                <li><Link href="/shop-details">Product Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="/about-us">About Us</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/services">Our Services</Link></li>
                                                <li><Link href="/term">Terms</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right">
                                <div className="d-none d-xxl-inline-block align-middle mr-15">
                                    <ThemeSwitch />
                                </div>
                                <div className="burger-icon-2 burger-icon-white" onClick={handleOffcanvas}>
                                    <img src="/assets/imgs/template/icons/menu.svg" alt="Gastonsin" />
                                </div>
                                <div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid"> </span>
                                    <span className="burger-icon-bottom"> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
