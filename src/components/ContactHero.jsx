import React from 'react';

export default function ContactHero() {
    return (
        <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-rose-900/60 backdrop-blur-sm top-4" />
            <h1 className="relative z-10 text-4xl sm:text-5xl font-extrabold text-white">
                Book Your Appointment
            </h1>
        </section>
    );
}
