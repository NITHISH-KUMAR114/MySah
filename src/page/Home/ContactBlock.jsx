import React from 'react';
import {Link} from 'react-router-dom';
import {Services} from '@/constant/constant.js';

const perks = [
    'Easy Booking',
    'Expert Care',
    'Customized Plans',
];

export default function ContactBlock() {
    return (
        <section id="contact" className="py-2 px-1 sm:px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16 text-gray-800 drop-shadow">
                Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center">

                {/* Contact Info and Map */}
                <div
                    className="flex-1 min-w-[280px] space-y-2 text-gray-700  p-6 bg-white/85  rounded-3xl backdrop-blur shadow-lg border border-white/60 ">
                    <div className="flex gap-3 items-center">
                        <span className="text-primary text-lg w-8">📍</span>
                        <address className="not-italic text-left">
                            No 13, Aranganathan subway Road, North Saidapet, Chennai – 600015
                        </address>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="text-primary text-lg">📞</span>
                        <a href="tel:+919500311077" className="hover:text-primary transition">
                            +91-9500311077
                        </a>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="text-primary text-lg">📧</span>
                        <a href="mailto:contact@mysahaesthetics.com" className="hover:text-primary transition">
                            contact@mysahaesthetics.com
                        </a>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span className="text-primary text-lg">📸</span>
                        <a
                            href="https://instagram.com/mysahaesthetics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                        >
                            @mysahaesthetics
                        </a>
                    </div>
                    {/* Google Maps Embed */}
                    <div className="rounded-2xl overflow-hidden mt-4 border border-rose-200 shadow">
                        <iframe
                            src="https://www.google.com/maps?q=Mysah+Aesthetic+Clinic,+Chennai&output=embed"
                            width="100%"
                            height="160"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            aria-label="Clinic Location"
                            title="Clinic Location"
                        ></iframe>
                    </div>
                </div>

                {/* Book Appointment – Improved Spacing & Content */}
                <div
                    className="flex-1 min-w-[280px]  bg-white/90  backdrop-blur rounded-3xl shadow-lg border border-white/60  flex flex-col justify-start transition-all duration-300 py-4 p-2 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold border-b border-rose-100  text-gray-800 pb-3  mb-6 text-center">
                        Book Appointment
                    </h3>
                    <p className="text-gray-700  text-sm sm:text-[15px] mb-4 text-center">
                        Your journey to radiant confidence starts here. Book your appointment easily with expert care
                        and personalized plans.
                    </p>

                    {/*<ul className="mb-4 text-center items-center flex flex-col ">*/}
                    {/*    {perks.map((perk) => (*/}
                    {/*        <li key={perk} className="flex items-center ">*/}
                    {/*            <svg*/}
                    {/*                xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                className="w-5 h-5 text-primary flex-shrink-0"*/}
                    {/*                viewBox="0 0 20 20"*/}
                    {/*                fill="currentColor"*/}
                    {/*            >*/}
                    {/*                <path*/}
                    {/*                    fillRule="evenodd"*/}
                    {/*                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2.087 2.086a1 1 0 001.414 0l4.913-4.914z"*/}
                    {/*                    clipRule="evenodd"*/}
                    {/*                />*/}
                    {/*            </svg>*/}
                    {/*            <span*/}
                    {/*                className="text-[12px] sm:text-[13px] text-gray-800  whitespace-nowrap">{perk}</span>*/}
                    {/*        </li>*/}
                    {/*    ))}*/}
                    {/*</ul>*/}

                    <div className=" p-4 rounded-xl shadow-sm mb-3 text-center">
                        <span className="font-semibold text-rose-700  text-xl">Trusted by hundreds of clients</span>
                        <div className="text-[15px] mt-5 text-gray-500 ">
                            Our expert team ensures a seamless booking experience and truly individualized care.
                        </div>
                    </div>


                    <Link
                        to="/contact"
                        className="inline-flex mt-5 items-center justify-center px-3 py-2 rounded-xl font-semibold btn shadow-md transition text-lg"
                    >
                        Schedule Your Appointment
                    </Link>
                </div>

                {/* Services Block */}
                {/*<div*/}
                {/*    className="flex-1 min-w-[280px] max-w-lg p-3 sm:p-6 bg-white/90  */}
                {/*    backdrop-blur rounded-3xl shadow-lg border border-white/60 ">*/}
                {/*    <h3 className="text-2xl font-bold text-gray-800  mb-6 text-center border-b border-rose-100 ">*/}
                {/*        Our Services*/}
                {/*    </h3>*/}
                {/*    <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">*/}
                {/*        {Services.map((service) => {*/}
                {/*            const slug = service.replace(/\s+/g, '-').toLowerCase();*/}
                {/*            return (*/}
                {/*                <li key={service}>*/}
                {/*                    <Link*/}
                {/*                        to={`/services#${slug}`}*/}
                {/*                        className="block text-[10px] sm:text-[12px] md:text-[14px] text-gray-800 px-2 py-2 bg-rose-100/70*/}
                {/*                        rounded-lg text-center shadow-sm sm:whitespace-nowrap*/}
                {/*                        hover:shadow-md transition hover:bg-rose-200 hover:font-semibold "*/}
                {/*                    >*/}
                {/*                        {service}*/}
                {/*                    </Link>*/}
                {/*                </li>*/}
                {/*            );*/}
                {/*        })}*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}
