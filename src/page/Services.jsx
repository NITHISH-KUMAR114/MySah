import React, {useEffect} from 'react';
import ServiceBanner from '/service/main.jpg';
import spLeft from '@/assets/images/service/2.jpg';
import spRight from '@/assets/images/service/1.jpg';
import ChooseUs from "./chooseUs.jsx";
import ContactBlock from "@/page/Home/ContactBlock.jsx";
import Section from "@/components/Section.jsx";
import {Link, useLocation} from 'react-router-dom';

// --- service data (replace img URLs when you have final photos) -------------
const services = [
    {
        title: 'Botox',
        text: 'Smooth out fine lines and wrinkles with safe, non-surgical treatments for instant youthfulness.',
        img: 'botox.webp',
    },
    {
        title: 'Dermal Fillers',
        text: 'Add volume, contour your face, and enhance features with premium-grade fillers for natural results.',
        img: 'Fillers.webp',
    },
    {
        title: 'Glutathione IV Therapy',
        text: 'Full-body glow and detox with our popular Gluta IV brightening & anti-aging infusion.',
        img: 'IV theraphy.jpg',
    },
    {
        title: 'Hydrafacial',
        text: 'Revolutionary 10-in-1 facial treatment to cleanse, exfoliate and deeply hydrate for an instant glow.',
        img: 'Hydra facial.jpg',
    },
    {
        title: 'Chemical Peels',
        text: 'Combat pigmentation, acne scars, and dullness with medically approved peels tailored to your skin.',
        img: 'chemical-peel.webp',
    },
    {
        title: 'Microneedling & PRP',
        text: 'Boost collagen and regenerate skin cells with advanced microneedling plus platelet-rich plasma.',
        img: 'Microneedling.png',
    },
    {
        title: 'Omega Light Therapy',
        text: 'Painless LED-based rejuvenation to treat acne, dullness, and visible signs of aging.',
        img: 'Omega-Light.webp',
    },
    {
        title: 'Permanent Makeup (PMU)',
        text: 'Wake up flawless with expertly crafted brows, lip tinting, and eyeliner tattoos.',
        img: 'PMU.avif',
    },
];
// ---------------------------------------------------------------------------

export default function Services() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({behavior: 'smooth', block: 'start'});
                }, 100); // wait a bit to ensure content is rendered
            }
        }
    }, [location]);

    return (
        <main className="overflow-hidden sm:top-10 md:top-10 lg:top-5">

            {/* ===== Banner ===== */}
            <section
                className="relative flex min-h-screen lg:min-h-[85vh] bg-center bg-cover top-3 items-center justify-center text-center"
                style={{backgroundImage: `url(${ServiceBanner})`}}>
                <div className="absolute inset-0 bg-black/10 "></div>

                <div className="relative z-10 px-4 max-w-2xl text-white">
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
                        Signature Skin &amp; Aesthetic Treatments
                    </h1>
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
                        Cutting-edge technology • Medical expertise • Visible results
                    </p>
                    <p className="text-lg mb-6">
                        From precision injectables to advanced light therapies, every service at Mysah is
                        curated to reveal your natural glow.
                    </p>

                    <a
                        href="#services-list"
                        className="inline-block px-8 py-3 bg-primary hover:bg-orange-400 rounded-full font-semibold transition"
                    >
                        Explore Services
                    </a>
                </div>
            </section>

            <ChooseUs/>


            {/* ===== Intro Section (optional hero blurb) ===== */}
            <section className="py-20">
                <div className="mx-2 sm:mx-10  px-4 grid lg:grid-cols-2 gap-10 items-center">
                    <img src={spLeft} alt="Facial Surgery" className="rounded-xl shadow-lg"/>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Advanced Facial & Skin Care</h2>
                        <p className="text-gray-600 mb-4">
                            Years of expertise blended with the latest technologies — from minimally invasive
                            injectables
                            to state-of-the-art light therapies.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                            <img src={spRight} alt="Extra"
                                 className="w-full h-90 md:w-[50%] md:h-120 lg:w-70 lg:h-55 rounded-lg shadow"/>
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Protect & Perfect</h4>
                                <p className="text-gray-600">
                                    Our mission is simple: healthy skin that looks as good as it feels.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services-list" className="py-20 bg-gray-50">
                <div className="mx-2 sm:mx-10 px-4 space-y-20">

                    {services.map((s, i) => (
                        <div
                            id={s.title.replace(/\s+/g, '-').toLowerCase()}
                            key={s.title}
                            className={`
                                relative isolate grid lg:grid-cols-2 gap-10 items-center cursor-pointer
                                rounded-3xl p-6 lg:p-10 hover:shadow-md hover:scale-[1.01] transition duration-500
                                ${i % 2 ? 'bg-white' : 'bg-primary-background lg:[&>*]:order-last'}
                                shadow-sm group scroll-mt-25
                              `}
                        >
                            {/* decorative vertical line on desktop */}
                            <span className="hidden lg:block absolute top-6 bottom-6 left-1/2 w-px decorative-line"/>

                            {/* image */}
                            <img
                                src={'service/' + s.img}
                                alt={s.title}
                                className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                            />

                            {/* content + CTA */}
                            <div
                                className="flex flex-col justify-between h-full text-center lg:text-left space-y-4 relative">
                                <div className="h-[90%] content-center">
                                    <h3 className="text-2xl font-bold text-primary">{s.title}</h3>
                                    <p className="text-gray-700 leading-relaxed">{s.text}</p>
                                </div>

                                {/* Hidden CTA, shown only on hover */}
                                <div
                                    className="flex justify-center sm:justify-end mt-6 lg:mt-4 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-800">
                                    <Link to={'/contact'}
                                          className="px-6 py-2 btn rounded-full text-sm font-medium shadow-md  hover:scale-101 cursor-pointer"
                                    >
                                        Explore Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
            <Section id="contact" bg="bg-primary-background">
                <ContactBlock/>
            </Section>
        </main>
    );
}
