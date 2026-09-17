"use client";
import CarCard1 from "@/components/elements/carcard/CarCard1";
import HeroSearch from "@/components/elements/HeroSearch";
import SortCarsFilter from "@/components/elements/SortCarsFilter";
import ByAmenities from "@/components/Filter/ByAmenities";
import ByCarType from "@/components/Filter/ByCarType";
import ByFuel from "@/components/Filter/ByFuel";
import ByLocation from "@/components/Filter/ByLocation";
import ByPagination from "@/components/Filter/ByPagination";
import ByPrice from "@/components/Filter/ByPrice";
import ByRating from "@/components/Filter/ByRating";
import Layout from "@/components/layout/Layout";
import rawCarsData from "@/util/cars.json";
import useCarFilter, { LISTING_TABS, ListingType } from "@/util/useCarFilter";
import { useEffect } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const carsData = rawCarsData.map((car) => ({
    ...car,
    rating: parseFloat(car.rating as string),
    listingType: car.listingType as ListingType,
}));
export default function CarsList1() {
    const { filter, setFilter, sortCriteria, setSortCriteria, itemsPerPage, setItemsPerPage, currentPage, setCurrentPage, uniqueNames, uniqueFuelTypes, uniqueAmenities, uniqueLocations, uniqueRatings, uniqueCarTypes, filteredCars, sortedCars, totalPages, startIndex, endIndex, paginatedCars, handleCheckboxChange, handleSortChange, handlePriceRangeChange, handleItemsPerPageChange, handlePageChange, handlePreviousPage, handleNextPage, handleClearFilters, handleListingChange, listingCounts, startItemIndex, endItemIndex } = useCarFilter(carsData);
    // Arriving from the homepage search with ?listing=sale or ?listing=rental preselects that tab.
    useEffect(() => {
        const wanted = new URLSearchParams(window.location.search).get("listing")
        if (wanted === "sale" || wanted === "rental") handleListingChange(wanted)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // Keep the address bar in step with the selected tab, so a refresh or a shared link shows the same cars.
    const selectListing = (id: "all" | "sale" | "rental") => {
        handleListingChange(id)
        const url = new URL(window.location.href)
        if (id === "all") url.searchParams.delete("listing")
        else url.searchParams.set("listing", id)
        window.history.replaceState(null, "", url)
    }

    return (
        <>
            <Layout footerStyle={1}>
                <div>
                    <div className="page-header-2 pt-30 background-body">
                        <div className="custom-container position-relative mx-auto">
                            <div className="bg-overlay rounded-12 overflow-hidden">
                                <img className="w-100 h-100 img-fluid img-banner" src="/assets/imgs/page-header/banner6.png" alt="Gastonsin" />
                            </div>
                            <div className="container position-absolute z-1 top-50 start-50 pb-70 translate-middle text-center">
                                <span className="text-sm-bold bg-2 px-4 py-3 rounded-12">Find cars for sale and for rent near you</span>
                                <h2 className="text-white mt-4">Find Your Perfect Car</h2>
                                <span className="text-white text-lg-medium">Search and find your best car rental with easy way</span>
                            </div>
                        </div>
                    </div>
                    {/* search 1 */}
                    <section className="box-section box-search-advance-home10 background-body">
                        <div className="container">
                            <div className="box-search-advance background-card wow fadeIn">
                                <div className="box-top-search">
                                    <div className="left-top-search">
                                        {LISTING_TABS.map((tab) => (
                                            <a
                                                key={tab.id}
                                                href="#"
                                                role="button"
                                                aria-pressed={filter.listing === tab.id}
                                                className={`category-link text-sm-bold btn-click${filter.listing === tab.id ? " active" : ""}`}
                                                onClick={(e) => { e.preventDefault(); selectListing(tab.id) }}
                                            >
                                                {tab.id === "all" ? "All cars" : tab.label}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="right-top-search d-none d-md-flex">
                                        <Link className="text-sm-medium need-some-help" href="/contact">
                                            Need help?
                                        </Link>
                                    </div>
                                </div>
                                <HeroSearch />
                            </div>
                        </div>
                    </section>
                    {/* cars-listing-1 */}
                    <section className="section-box pt-50 background-body">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-md-9 mb-30 wow fadeInUp">
                                    <h4 className="title-svg neutral-1000 mb-15">Our Vehicle Fleet</h4>
                                    <p className="text-lg-medium text-bold neutral-500">Turning dreams into reality with versatile vehicles.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="box-section block-content-tourlist background-body">
                        <div className="container">
                            <div className="box-content-main pt-20">
                                <div className="content-right">
                                    <div className="listing-tabs mb-20" role="tablist" aria-label="Sale or rental">
                                        {LISTING_TABS.map((tab) => (
                                            <button
                                                key={tab.id}
                                                type="button"
                                                role="tab"
                                                aria-selected={filter.listing === tab.id}
                                                className={`listing-tab ${filter.listing === tab.id ? "active" : ""}`}
                                                onClick={() => selectListing(tab.id)}
                                            >
                                                {tab.label}
                                                <span className="listing-tab-count">{listingCounts[tab.id]}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="box-filters mb-25 pb-5 border-bottom border-1">
                                        <SortCarsFilter sortCriteria={sortCriteria} handleSortChange={handleSortChange} itemsPerPage={itemsPerPage} handleItemsPerPageChange={handleItemsPerPageChange} handleClearFilters={handleClearFilters} startItemIndex={startItemIndex} endItemIndex={endItemIndex} sortedCars={sortedCars} />
                                    </div>
                                    <div className="box-grid-tours wow fadeIn">
                                        <div className="row">
                                            {paginatedCars.map((car) => (
                                                <div className="col-lg-4 col-md-6 wow fadeInUp" key={car.id}>
                                                    <CarCard1 car={car} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <ByPagination handlePreviousPage={handlePreviousPage} totalPages={totalPages} currentPage={currentPage} handleNextPage={handleNextPage} handlePageChange={handlePageChange} />
                                </div>
                                <div className="content-left order-lg-first">
                                    <div className="sidebar-left border-1 background-body">
                                        <div className="box-filters-sidebar">
                                            <div className="block-filter border-1">
                                                <h6 className="text-lg-bold item-collapse neutral-1000">Show on map</h6>
                                                <div className="box-collapse scrollFilter mb-15">
                                                    <div className="pt-0">
                                                        <div className="box-map-small">
                                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1500!2d-2.327745335434869!3d4.961097417344019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTcnNDAuMCJOIDLCsDE5JzM5LjkiVw!5e0!3m2!1sen!2sgh!4v1789115556010" width="100%" height={160} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-left border-1 background-body">
                                        <div className="box-filters-sidebar">
                                            <div className="block-filter border-1">
                                                <h6 className="text-lg-bold item-collapse neutral-1000">Filter Price </h6>
                                                <ByPrice filter={filter} handlePriceRangeChange={handlePriceRangeChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-left border-1 background-body">
                                        <div className="box-filters-sidebar">
                                            <div className="block-filter border-1">
                                                <h6 className="text-lg-bold item-collapse neutral-1000">Car type</h6>
                                                <ByCarType uniqueCarTypes={uniqueCarTypes} filter={filter} handleCheckboxChange={handleCheckboxChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-left border-1 background-body">
                                        <div className="box-filters-sidebar">
                                            <div className="block-filter border-1">
                                                <h6 className="text-lg-bold item-collapse neutral-1000">Amenities</h6>
                                                <ByAmenities uniqueAmenities={uniqueAmenities} filter={filter} handleCheckboxChange={handleCheckboxChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-left border-1 background-body">
                                        <div className="box-filters-sidebar">
                                            <div className="block-filter border-1">
                                                <h6 className="text-lg-bold item-collapse neutral-1000">Fuel Type</h6>
                                                <ByFuel uniqueFuelTypes={uniqueFuelTypes} filter={filter} handleCheckboxChange={handleCheckboxChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-left border-1 background-body">
                                        <div className="box-filters-sidebar">
                                            <div className="block-filter border-1">
                                                <h6 className="text-lg-bold item-collapse neutral-1000">Review Score </h6>
                                                <ByRating uniqueRatings={uniqueRatings} filter={filter} handleCheckboxChange={handleCheckboxChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-left border-1 background-body">
                                        <div className="box-filters-sidebar">
                                            <div className="block-filter border-1">
                                                <h6 className="text-lg-bold item-collapse neutral-1000">Booking Location</h6>
                                                <ByLocation uniqueLocations={uniqueLocations} filter={filter} handleCheckboxChange={handleCheckboxChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="background-100 pt-55 pb-55">
                            <div className="container">
                                <Marquee direction="left" pauseOnHover={true} className="carouselTicker carouselTicker-left box-list-brand-car justify-content-center  wow fadeIn">
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
                </div>
            </Layout>
        </>
    );
}
