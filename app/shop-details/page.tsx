"use client";
import QuantityControl from "@/components/elements/QuantityControl";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
import { Price } from "@/util/currency";
import MailtoForm from "@/components/elements/MailtoForm"
import ShareButton from "@/components/elements/ShareButton"

/** react-slick passes currentSlide/slideCount to custom arrows; keep them off the DOM button. */
const SlickButton = ({ currentSlide, slideCount, children, ...props }: any) => (
	<button type="button" {...props}>{children}</button>
)
export default function ShopDetails() {
    const [isOpen, setOpen] = useState(false);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [slider2, slider1]);

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        prevArrow: (
            <SlickButton className="slick-prev">
                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" width={16} height={16}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </SlickButton>
        ),
        nextArrow: (
            <SlickButton className="slick-next">
                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" width={16} height={16}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </SlickButton>
        ),
    };

    const settingsThumbs = {
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: nav1,
        dots: false,
        focusOnSelect: true,
        vertical: false,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 700, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
        prevArrow: (
            <SlickButton className="slick-prev">
                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </SlickButton>
        ),
        nextArrow: (
            <SlickButton className="slick-next">
                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </SlickButton>
        ),
    };
    return (
        <>
            <Layout footerStyle={1}>
                <div>
                    <section className="box-section box-breadcrumb background-body">
                        <div className="container">
                            <ul className="breadcrumbs">
                                <li>
                                    <Link href="/">Home</Link>
                                    <span className="arrow-right">
                                        <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </li>
                                <li>
                                    <Link href="/shop-list">Cars Parts</Link>
                                    <span className="arrow-right">
                                        <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </li>
                                <li>
                                    <span className="text-breadcrumb">Dorman Steel Wheel Compatible with Select Honda Models </span>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="section-box box-banner-home2 background-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="container-banner-activities">
                                        <div className="box-banner-activities border rounded-3 overflow-hidden">
                                            <Slider {...settingsMain} asNavFor={nav2 as any} ref={(slider) => setSlider1(slider as any)} className="banner-activities-detail">
                                                <div className="banner-slide-activity">
                                                    <img src="/assets/imgs/shop/shop-details/img-1.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide-activity">
                                                    <img src="/assets/imgs/shop/shop-details/img-1.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide-activity">
                                                    <img src="/assets/imgs/shop/shop-details/img-1.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide-activity">
                                                    <img src="/assets/imgs/shop/shop-details/img-1.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide-activity">
                                                    <img src="/assets/imgs/shop/shop-details/img-1.png" alt="Gastonsin" />
                                                </div>
                                            </Slider>
                                            <div className="box-button-abs">
                                                <a className="btn btn-white-md popup-youtube" onClick={() => setOpen(true)}>
                                                    {" "}
                                                    <img src="/assets/imgs/page/activities/video.svg" alt="Gastonsin" />
                                                    Video Clips
                                                </a>
                                            </div>
                                        </div>
                                        <div className="slider-thumnail-activities">
                                            <Slider {...settingsThumbs} asNavFor={nav1 as any} ref={(slider) => setSlider2(slider as any)} className="slider-nav-thumbnails-activities-detail shop-thumb-nav">
                                                <div className="banner-slide border p-0 mx-2 rounded-3">
                                                    <img src="/assets/imgs/shop/shop-details/thumb-1.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide border p-0 mx-2 rounded-3">
                                                    <img src="/assets/imgs/shop/shop-details/thumb-2.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide border p-0 mx-2 rounded-3">
                                                    <img src="/assets/imgs/shop/shop-details/thumb-3.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide border p-0 mx-2 rounded-3">
                                                    <img src="/assets/imgs/shop/shop-details/thumb-4.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide border p-0 mx-2 rounded-3">
                                                    <img src="/assets/imgs/shop/shop-details/thumb-1.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide border p-0 mx-2 rounded-3">
                                                    <img src="/assets/imgs/shop/shop-details/thumb-2.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide border p-0 mx-2 rounded-3">
                                                    <img src="/assets/imgs/shop/shop-details/thumb-3.png" alt="Gastonsin" />
                                                </div>
                                                <div className="banner-slide border p-0 mx-2 rounded-3">
                                                    <img src="/assets/imgs/shop/shop-details/thumb-4.png" alt="Gastonsin" />
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 ps-lg-4">
                                    <div className="tour-header">
                                        <div className="d-flex flex-wrap align-items-center gap-4 mb-3">
                                            <div className="tour-rate mb-0">
                                                <div className="rate-element">
                                                    <span className="rating">
                                                        4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="text-md-medium neutral-500">
                                                SKU <span className="text-md-bold neutral-1000 ms-1 text-decoration-underline">LVA-4125</span>{" "}
                                            </span>
                                            <img src="/assets/imgs/shop/shop-list/stock.png" alt="Gastonsin" />
                                        </div>
                                        <div className="tour-title-main">
                                            <h5 className="neutral-1000">
                                                Mobil Delvac 1300 Super Heavy Duty <br />
                                                Synthetic Blend
                                            </h5>
                                        </div>
                                        <div className="d-flex align-items-center gap-3 border-bottom pb-4 mb-4">
                                            <span className="text-24-medium neutral-500 text-decoration-line-through"> <Price amount={68.53} /> </span>
                                            <h4 className="neutral-1000"><Price amount={48.25} /></h4>
                                        </div>
                                        <ul className="list-style-disc ps-3 pe-4">
                                            <li className="text-md-medium neutral-1000">Mobil Delvac 1300 Super Heavy Duty Synthetic Blend</li>
                                            <li className="text-md-medium neutral-1000">Confident driving in all weather conditions</li>
                                            <li className="text-md-medium neutral-1000">Visual Alignment Indicators</li>
                                        </ul>
                                        <div className="tour-metas mt-4 border-top pt-4">
                                            <div className="tour-meta-left mb-0">
                                                <div className="add-to-cart me-3">
                                                    <QuantityControl />
                                                </div>
                                                <a className="btn btn-primary rounded-3 gap-2 button-add-to-cart" href="https://wa.me/233595987271?text=Hello%2C%20I%20would%20like%20to%20order%20Mobil%20Delvac%201300%20Super%20Heavy%20Duty%20Synthetic%20Blend%20from%20your%20online%20shop.%20Is%20it%20available%3F" target="_blank" rel="noopener noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                                        <g clipPath="url(#clip0_20_23536)">
                                                            <path d="M16 2H2.828L2.8 1.766C2.7427 1.27961 2.50892 0.831155 2.14299 0.505652C1.77706 0.180149 1.30442 0.000227862 0.814667 0L0 0V1.33333H0.814667C0.977956 1.33335 1.13556 1.3933 1.25758 1.50181C1.3796 1.61032 1.45756 1.75983 1.47667 1.922L2.53333 10.9007C2.59063 11.3871 2.82441 11.8355 3.19034 12.161C3.55627 12.4865 4.02891 12.6664 4.51867 12.6667H13.3333V11.3333H4.51867C4.35528 11.3333 4.19759 11.2733 4.07555 11.1646C3.95351 11.056 3.87562 10.9063 3.85667 10.744L3.76933 10H14.5573L16 2ZM13.4427 8.66667H3.61267L2.98533 3.33333H14.4047L13.4427 8.66667Z" fill="#101010" />
                                                            <path d="M4.66732 15.9997C5.4037 15.9997 6.00065 15.4027 6.00065 14.6663C6.00065 13.93 5.4037 13.333 4.66732 13.333C3.93094 13.333 3.33398 13.93 3.33398 14.6663C3.33398 15.4027 3.93094 15.9997 4.66732 15.9997Z" fill="#101010" />
                                                            <path d="M11.3333 15.9997C12.0697 15.9997 12.6667 15.4027 12.6667 14.6663C12.6667 13.93 12.0697 13.333 11.3333 13.333C10.597 13.333 10 13.93 10 14.6663C10 15.4027 10.597 15.9997 11.3333 15.9997Z" fill="#101010" />
                                                        </g>
                                                    </svg>
                                                    Order on WhatsApp
</a>
                                            </div>
                                            <div className="tour-meta-right mb-0 mt-3 mt-md-0">
                                                <ShareButton className="btn btn-share">
                                                    <svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13 11.5332C12.012 11.5332 11.1413 12.0193 10.5944 12.7584L5.86633 10.3374C5.94483 10.0698 6 9.79249 6 9.49989C6 9.10302 5.91863 8.72572 5.77807 8.37869L10.7262 5.40109C11.2769 6.04735 12.0863 6.46655 13 6.46655C14.6543 6.46655 16 5.12085 16 3.46655C16 1.81225 14.6543 0.466553 13 0.466553C11.3457 0.466553 10 1.81225 10 3.46655C10 3.84779 10.0785 4.20942 10.2087 4.54515L5.24583 7.53149C4.69563 6.90442 3.8979 6.49989 3 6.49989C1.3457 6.49989 0 7.84559 0 9.49989C0 11.1542 1.3457 12.4999 3 12.4999C4.00433 12.4999 4.8897 11.9996 5.4345 11.2397L10.147 13.6529C10.0602 13.9331 10 14.2249 10 14.5332C10 16.1875 11.3457 17.5332 13 17.5332C14.6543 17.5332 16 16.1875 16 14.5332C16 12.8789 14.6543 11.5332 13 11.5332Z" fill="#101010" />
                                                    </svg>
                                                    Share
                                                </ShareButton>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 mt-4">
                                            <span className="text-md-medium neutral-500">Categories:</span>
                                            <span className="text-md-medium neutral-1000">Cleaning Oils, Motor Oils, Oils &amp; Fluids</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="box-section box-content-tour-detail background-body pt-0">
                        <div className="container">
                            <div className="row mt-30">
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
                                                <div className="card card-body">
                                                    <p>Introducing the epitome of modern sophistication in the realm of compact SUVs – the Seltos K3. Dressed in a captivating blue hue that exudes elegance and flair, this dynamic vehicle stands as a testament to innovation and style. With its sleek design accentuated by striking dark wheels, the Seltos K3 is not merely a mode of transportation but a statement of refined taste and contemporary living.</p>
                                                    <p>Prepare to embark on a journey where cutting-edge technology meets unparalleled comfort, all wrapped in a package of unparalleled aesthetics. Join us as we delve into the world of the Seltos K3, where every detail is crafted to elevate your driving experience to new heights.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-collapse-expand">
                                            <button className="btn btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseItinerary" aria-expanded="false" aria-controls="collapseItinerary">
                                                <h6>About this item</h6>
                                                <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <div className="collapse show" id="collapseItinerary">
                                                <div className="card card-body">
                                                    <ul className="list-checked-green">
                                                        <li>8 Spoke Design w/ Milled Aluminum Accents.</li>
                                                        <li>RC Carbon Fiber Center Cap.</li>
                                                        <li>Single Piece Aluminum Construction.</li>
                                                        <li>Matte Black Coat w/ Machined Accents.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-collapse-expand">
                                            <button className="btn btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseQuestion" aria-expanded="false" aria-controls="collapseQuestion">
                                                <h6>Question &amp; Answers</h6>
                                                <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <div className="collapse show" id="collapseQuestion">
                                                <div className="card card-body">
                                                    <div className="list-questions">
                                                        <div className="item-question">
                                                            <div className="head-question">
                                                                <p className="text-md-bold neutral-1000">Fitted these on my Hilux before a run up north. Quality is genuine and they have held up on rough roads without any complaints.</p>
                                                            </div>
                                                            <div className="content-question">
                                                                <p className="text-sm-medium neutral-800">Fitted these on my Hilux before a run up north. Quality is genuine and they have held up on rough roads without any complaints.</p>
                                                            </div>
                                                        </div>
                                                        <div className="item-question active">
                                                            <div className="head-question">
                                                                <p className="text-md-bold neutral-1000">Fitted these on my Hilux before a run up north. Quality is genuine and they have held up on rough roads without any complaints.</p>
                                                            </div>
                                                            <div className="content-question">
                                                                <p className="text-sm-medium neutral-800">Fitted these on my Hilux before a run up north. Quality is genuine and they have held up on rough roads without any complaints.</p>
                                                            </div>
                                                        </div>
                                                        <div className="item-question">
                                                            <div className="head-question">
                                                                <p className="text-md-bold neutral-1000">Fitted these on my Hilux before a run up north. Quality is genuine and they have held up on rough roads without any complaints.</p>
                                                            </div>
                                                            <div className="content-question">
                                                                <p className="text-sm-medium neutral-800">Fitted these on my Hilux before a run up north. Quality is genuine and they have held up on rough roads without any complaints.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-collapse-expand">
                                            <button className="btn btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviews" aria-expanded="false" aria-controls="collapseReviews">
                                                <h6>Rate &amp; Reviews</h6>
                                                <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <div className="collapse show" id="collapseReviews">
                                                <div className="card card-body">
                                                    <div className="head-reviews">
                                                        <div className="review-left">
                                                            <div className="review-info-inner">
                                                                <h6 className="neutral-1000">4.95 / 5</h6>
                                                                <p className="text-sm-medium neutral-400">(672 reviews)</p>
                                                                <div className="review-rate">
                                                                    <img src="/assets/imgs/page/tour-detail/star.svg" alt="Gastonsin" />
                                                                    <img src="/assets/imgs/page/tour-detail/star.svg" alt="Gastonsin" />
                                                                    <img src="/assets/imgs/page/tour-detail/star.svg" alt="Gastonsin" />
                                                                    <img src="/assets/imgs/page/tour-detail/star.svg" alt="Gastonsin" />
                                                                    <img src="/assets/imgs/page/tour-detail/star.svg" alt="Gastonsin" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="review-right">
                                                            <div className="review-progress">
                                                                <div className="item-review-progress">
                                                                    <div className="text-rv-progress">
                                                                        <p className="text-sm-bold">Price</p>
                                                                    </div>
                                                                    <div className="bar-rv-progress">
                                                                        <div className="progress">
                                                                            <div className="progress-bar w-90" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-avarage">
                                                                        <p>4.8/5</p>
                                                                    </div>
                                                                </div>
                                                                <div className="item-review-progress">
                                                                    <div className="text-rv-progress">
                                                                        <p className="text-sm-bold">Service</p>
                                                                    </div>
                                                                    <div className="bar-rv-progress">
                                                                        <div className="progress">
                                                                            <div className="progress-bar w-90" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-avarage">
                                                                        <p>4.2/5</p>
                                                                    </div>
                                                                </div>
                                                                <div className="item-review-progress">
                                                                    <div className="text-rv-progress">
                                                                        <p className="text-sm-bold">Safety</p>
                                                                    </div>
                                                                    <div className="bar-rv-progress">
                                                                        <div className="progress">
                                                                            <div className="progress-bar w-95" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-avarage">
                                                                        <p>4.9/5</p>
                                                                    </div>
                                                                </div>
                                                                <div className="item-review-progress">
                                                                    <div className="text-rv-progress">
                                                                        <p className="text-sm-bold">Entertainment</p>
                                                                    </div>
                                                                    <div className="bar-rv-progress">
                                                                        <div className="progress">
                                                                            <div className="progress-bar w-85" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-avarage">
                                                                        <p>4.7/5</p>
                                                                    </div>
                                                                </div>
                                                                <div className="item-review-progress">
                                                                    <div className="text-rv-progress">
                                                                        <p className="text-sm-bold">Accessibility</p>
                                                                    </div>
                                                                    <div className="bar-rv-progress">
                                                                        <div className="progress">
                                                                            <div className="progress-bar w-100" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-avarage">
                                                                        <p>5/5</p>
                                                                    </div>
                                                                </div>
                                                                <div className="item-review-progress">
                                                                    <div className="text-rv-progress">
                                                                        <p className="text-sm-bold">Support</p>
                                                                    </div>
                                                                    <div className="bar-rv-progress">
                                                                        <div className="progress">
                                                                            <div className="progress-bar w-100" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-avarage">
                                                                        <p>5/5</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="list-reviews">
                                                        <div className="item-review">
                                                            <div className="head-review">
                                                                <div className="author-review">
                                                                    <img src="/assets/imgs/blog/blog-details/avatar-1.png" alt="Gastonsin" />
                                                                    <div className="author-info">
                                                                        <p className="text-lg-bold">Sarah Johnson</p>
                                                                        <p className="text-sm-medium neutral-500">December 4, 2024 at 3:12 pm</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rate-review">
                                                                    <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" />
                                                                </div>
                                                            </div>
                                                            <div className="content-review">
                                                                <p className="text-sm-medium neutral-800">Fitted these on my Hilux before a run up north. Quality is genuine and they have held up on rough roads without any complaints.</p>
                                                            </div>
                                                        </div>
                                                        <div className="item-review">
                                                            <div className="head-review">
                                                                <div className="author-review">
                                                                    <img src="/assets/imgs/blog/blog-details/avatar-2.png" alt="Gastonsin" />
                                                                    <div className="author-info">
                                                                        <p className="text-lg-bold">Michael Smith</p>
                                                                        <p className="text-sm-medium neutral-500">December 4, 2024 at 3:12 pm</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rate-review">
                                                                    <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" />
                                                                </div>
                                                            </div>
                                                            <div className="content-review">
                                                                <p className="text-sm-medium neutral-800">Fitted these on my Hilux before a run up north. Quality is genuine and they have held up on rough roads without any complaints.</p>
                                                            </div>
                                                        </div>
                                                        <div className="item-review">
                                                            <div className="head-review">
                                                                <div className="author-review">
                                                                    <img src="/assets/imgs/blog/blog-details/avatar-3.png" alt="Gastonsin" />
                                                                    <div className="author-info">
                                                                        <p className="text-lg-bold">Emily Williams</p>
                                                                        <p className="text-sm-medium neutral-500">December 4, 2024 at 3:12 pm</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rate-review">
                                                                    <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" /> <img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Gastonsin" />
                                                                </div>
                                                            </div>
                                                            <div className="content-review">
                                                                <p className="text-sm-medium neutral-800">Fitted these on my Hilux before a run up north. Quality is genuine and they have held up on rough roads without any complaints.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-collapse-expand">
                                            <button className="btn btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddReview" aria-expanded="false" aria-controls="collapseAddReview">
                                                <h6>Add a review</h6>
                                                <svg width={12} height={7} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <div className="collapse show" id="collapseAddReview">
                                                <div className="card card-body">
                                                    <div className="box-type-reviews">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="box-type-review">
                                                                    <p className="text-sm-bold text-type-rv">Price</p>
                                                                    <p className="rate-type-review">
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                    </p>
                                                                </div>
                                                                <div className="box-type-review">
                                                                    <p className="text-sm-bold text-type-rv">Service</p>
                                                                    <p className="rate-type-review">
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="box-type-review">
                                                                    <p className="text-sm-bold text-type-rv">Safety</p>
                                                                    <p className="rate-type-review">
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                    </p>
                                                                </div>
                                                                <div className="box-type-review">
                                                                    <p className="text-sm-bold text-type-rv">Entertainment</p>
                                                                    <p className="rate-type-review">
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="box-type-review">
                                                                    <p className="text-sm-bold text-type-rv">Accessibility</p>
                                                                    <p className="rate-type-review">
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                    </p>
                                                                </div>
                                                                <div className="box-type-review">
                                                                    <p className="text-sm-bold text-type-rv">Support</p>
                                                                    <p className="rate-type-review">
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                        <img src="/assets/imgs/page/tour-detail/star-big.svg" alt="Gastonsin" />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <MailtoForm className="box-form-reviews" subject="Product review from the website" intro="A customer left a review on a shop product page.">
                                                        <h6 className="text-md-bold neutral-1000 mb-15">Leave feedback</h6>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input className="form-control" type="text" name="name" aria-label="Name" placeholder="Your name" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <input className="form-control" type="email" name="email" aria-label="Email" placeholder="Email address" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <textarea className="form-control" name="review" aria-label="Review" placeholder="Your comment" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <button type="submit" className="btn btn-primary">
                                                                    Submit review
                                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </MailtoForm>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sidebar-left border-1 background-card">
                                        <h6 className="text-xl-bold neutral-1000">Listed by</h6>
                                        <div className="box-sidebar-content">
                                            <div className="box-agent-support border-bottom pb-3 mb-3">
                                                <div className="card-author">
                                                    <div className="me-2">
                                                        <img src="/assets/imgs/template/icons/car-1.png" alt="Gastonsin" />
                                                    </div>
                                                    <div className="card-author-info">
                                                        <p className="text-lg-bold neutral-1000">Emily Rose</p>
                                                        <p className="text-sm-medium neutral-500">Accra, Ghana</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-info-contact">
                                                <p className="text-md-medium mobile-phone neutral-1000">
                                                    <span className="text-md-bold">Mobile:</span> 1-222-333-4444
                                                </p>
                                                <p className="text-md-medium email neutral-1000">
                                                    <span className="text-md-bold">Email:</span> emily-rose@gmail.com
                                                </p>
                                                <p className="text-md-medium whatsapp neutral-1000">
                                                    <span className="text-md-bold">WhatsApp:</span> 1-222-333-4444
                                                </p>
                                                <p className="text-md-medium fax neutral-1000">
                                                    <span className="text-md-bold">Fax:</span> 1-222-333-4444
                                                </p>
                                            </div>
                                            <div className="box-link-bottom">
                                                <Link className="btn btn-primary py-3 w-100 rounded-3" href="/shop-list">
                                                    All items by this dealer
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-banner">
                                        <div className="p-4 background-body border rounded-3">
                                            <p className="text-xl-bold neutral-1000 mb-4">Related Products</p>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 border rounded-3 overflow-hidden">
                                                    <Link href="/shop-details">
                                                        <img src="/assets/imgs/shop/shop-details/other-item1.png" alt="Gastonsin" />
                                                    </Link>
                                                </div>
                                                <div className="position-relative">
                                                    <Link href="/shop-details" className="text-md-bold neutral-1000">
                                                        R1 Concepts® – eLINE Series Plain Brake Rotors
                                                    </Link>
                                                    <p className="text-md-bold text-success"><Price amount={20} /></p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 border rounded-3 overflow-hidden">
                                                    <Link href="/shop-details">
                                                        <img src="/assets/imgs/shop/shop-details/other-item2.png" alt="Gastonsin" />
                                                    </Link>
                                                </div>
                                                <div className="position-relative">
                                                    <Link href="/shop-details" className="text-md-bold neutral-1000">
                                                        PIRELLI TIRES® – P4 FOUR SEASONS PLUS
                                                    </Link>
                                                    <p className="text-md-bold text-success"><Price amount={160} /></p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 border rounded-3 overflow-hidden">
                                                    <Link href="/shop-details">
                                                        <img src="/assets/imgs/shop/shop-details/other-item3.png" alt="Gastonsin" />
                                                    </Link>
                                                </div>
                                                <div className="position-relative">
                                                    <Link href="/shop-details" className="text-md-bold neutral-1000">
                                                        Mobil 1 Extended Performance Full Synthetic Motor Oil
                                                    </Link>
                                                    <p className="text-md-bold text-success"><Price amount={33} /></p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 border rounded-3 overflow-hidden">
                                                    <Link href="/shop-details">
                                                        <img src="/assets/imgs/shop/shop-details/other-item4.png" alt="Gastonsin" />
                                                    </Link>
                                                </div>
                                                <div className="position-relative">
                                                    <Link href="/shop-details" className="text-md-bold neutral-1000">
                                                        HRE FlowForm® – FT01 Tarma Honda 2024
                                                    </Link>
                                                    <p className="text-md-bold text-success"><Price amount={250} /></p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 border rounded-3 overflow-hidden">
                                                    <Link href="/shop-details">
                                                        <img src="/assets/imgs/shop/shop-details/other-item5.png" alt="Gastonsin" />
                                                    </Link>
                                                </div>
                                                <div className="position-relative">
                                                    <Link href="/shop-details" className="text-md-bold neutral-1000">
                                                        Mobil Delvac 1300 Super Heavy Duty Synthetic
                                                    </Link>
                                                    <p className="text-md-bold text-success"><Price amount={44} /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="background-100 pt-55 pb-55 mt-100">
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
                    <ModalVideo channel="youtube" isOpen={isOpen} videoId="AOg61RB75Ho" onClose={() => setOpen(false)} />
                </div>
            </Layout>
        </>
    );
}
