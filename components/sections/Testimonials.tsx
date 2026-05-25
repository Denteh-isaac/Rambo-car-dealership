"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from "@/util/swiperOptions";

const testimonials = [
    {
        title: "Best Car Import Service in Ghana!",
        text: "Rambo made importing my Toyota Land Cruiser from Dubai so easy. They handled all the paperwork, clearing, and delivery to Nzema. I couldn't be happier!",
        name: "Kofi Mensah",
        location: "Nzema, W/R",
        photo: "https://randomuser.me/api/portraits/men/1.jpg?seed=kofi",
    },
    {
        title: "Reliable and Transparent",
        text: "I pre-ordered a Jetour X70 from China through Rambo and it arrived exactly as described. No hidden charges, no surprises. Very professional team.",
        name: "Ama Asante",
        location: "Takoradi",
        photo: "https://randomuser.me/api/portraits/women/1.jpg?seed=ama",
    },
    {
        title: "Great Fleet for Rentals",
        text: "Rented a car for my business trip to Accra. Rambo's rental fleet is clean, well-maintained, and the booking process is straightforward. Highly recommend!",
        name: "Kwame Boateng",
        location: "Esiama",
        photo: "https://randomuser.me/api/portraits/men/2.jpg?seed=kwame",
    },
    {
        title: "Port Clearing Done Right",
        text: "Rambo cleared my Changan from the port in record time. The logistics team kept me updated at every step. Excellent service all the way.",
        name: "Abena Owusu",
        location: "Kikam",
        photo: "https://randomuser.me/api/portraits/women/2.jpg?seed=abena",
    },
    {
        title: "Imported From USA, No Stress",
        text: "I was nervous about ordering a car from the US but Rambo walked me through everything. My Ford arrived in perfect condition. 5 stars without hesitation!",
        name: "Yaw Darko",
        location: "Kumasi",
        photo: "https://randomuser.me/api/portraits/men/3.jpg?seed=yaw",
    },
    {
        title: "Family Trusted Dealership",
        text: "My whole family has bought cars through Rambo. My father, my uncle, and now me. They treat every customer like family. The prices are fair and quality is top.",
        name: "Akosua Frimpong",
        location: "Cape Coast",
        photo: "https://randomuser.me/api/portraits/women/3.jpg?seed=akosua",
    },
    {
        title: "Smooth Experience End to End",
        text: "From browsing the inventory online to picking up the car at the Nzema warehouse — the whole journey with Rambo was smooth and professional.",
        name: "Nana Barimah",
        location: "Accra",
        photo: "https://randomuser.me/api/portraits/men/4.jpg?seed=nana",
    },
    {
        title: "Modern Cars, Genuine Quality",
        text: "Finally got my Changan CS55 Plus! Rambo sourced it directly from China. The car is immaculate and exactly what I ordered. Will definitely come back.",
        name: "Esi Tetteh",
        location: "Tema",
        photo: "https://randomuser.me/api/portraits/women/4.jpg?seed=esi",
    },
];

function Stars() {
    return (
        <div className="card-rate">
            {[1, 2, 3, 4, 5].map((i) => (
                <img key={i} className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-black.svg" alt="star" />
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <>
            <section className="section-box py-96 background-body">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-9 col-sm-9 wow fadeInUp">
                            <div className="box-author-testimonials">
                                {testimonials.slice(0, 3).map((t) => (
                                    <img
                                        key={t.name}
                                        src={t.photo}
                                        alt={t.name}
                                        style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid #70f46d' }}
                                    />
                                ))}
                                Testimonials
                            </div>
                            <h3 className="mt-8 mb-15 neutral-1000">What our customers say about Rambo</h3>
                        </div>
                    </div>
                </div>
                <div className="block-testimonials wow fadeIn">
                    <div className="container-testimonials">
                        <div className="container-slider ps-0">
                            <div className="box-swiper mt-30">
                                <Swiper {...swiperGroupAnimate} className="swiper-container swiper-group-animate swiper-group-journey">
                                    <div className="swiper-wrapper">
                                        {testimonials.map((t) => (
                                            <SwiperSlide key={t.name}>
                                                <div className="card-testimonial background-card">
                                                    <div className="card-info">
                                                        <p className="text-xl-bold card-title neutral-1000">{t.title}</p>
                                                        <p className="text-md-regular neutral-500">{t.text}</p>
                                                    </div>
                                                    <div className="card-top pt-40 border-0 mb-0">
                                                        <div className="card-author">
                                                            <div className="card-image">
                                                                <img
                                                                    src={t.photo}
                                                                    alt={t.name}
                                                                    style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                            <div className="card-info">
                                                                <p className="text-lg-bold neutral-1000">{t.name}</p>
                                                                <p className="text-md-regular neutral-1000">{t.location}</p>
                                                            </div>
                                                        </div>
                                                        <Stars />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
