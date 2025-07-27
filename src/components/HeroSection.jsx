import React from 'react';
import HomeBanner from '@/assets/images/main.jpg';

export default function HeroSection() {
    return (
        <section className="w-full overflow-hidden relative sm:top-10 md:top-10 lg:top-5">
            <div className="relative h-[25vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
                <img
                    src={HomeBanner}
                    alt="Clinic interior"
                    className="absolute inset-0 w-full h-full object-contain sm:object-cover"
                />
            </div>

            <div className="py-5 sm:py-14 px-6 sm:px-8 max-w-3xl mx-auto text-center">
                <h1 className="mb-3 sm:mb-6 font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl text-gray-900">
                    <span className="text-primary">Mysah Aesthetic Clinic</span>
                </h1>
                <p className="mb-3 text-xs sm:text-sm font-medium tracking-widest text-rose-600">
                    Where Beauty Meets Science
                </p>

                <p className="mb-5 sm:mb-10 text-sm sm:text-base lg:text-lg text-gray-700 text-center">
                    At Mysah we blend medical excellence with artistic finesse to reveal
                    your natural beauty. Enjoy advanced skincare&nbsp;&amp;&nbsp;aesthetic
                    treatments in a calm, luxurious setting — step into a space where your
                    confidence blooms.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">

                    <a
                        href="/contact"
                        className="
    inline-block rounded-full bg-gradient-to-r to-primary border border-red-300 hover:text-red-300
    px-8 py-3 font-semibold
    shadow-md transition duration-200 transform
    hover:-translate-y-[3px] hover:shadow-rose-400/50
    focus:outline-none focus:ring-4 focus:ring-primary/40">
                        Book Consultation
                    </a>

                    <a
                        href="#services"
                        className="
    inline-block rounded-full border border-primary text-primary font-medium
    px-8 py-3 transition duration-200
    hover:text-red-300 hover:bg-primary hover:shadow-md
    focus:outline-none focus:ring-4 focus:ring-primary/30
  "
                    >
                        Our Services
                    </a>

                </div>
            </div>
        </section>
    );
}
