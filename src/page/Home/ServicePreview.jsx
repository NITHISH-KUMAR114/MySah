import React from 'react';
import { Link } from 'react-router-dom';

const allServices = [
    { title: 'Hydrafacial',          desc: '10-in-1 deep cleanse & hydration facial.' },
    { title: 'Botox',                desc: 'Smooth fine lines & youthful charm.' },
    { title: 'Dermal Fillers',       desc: 'Contour and enhance natural features.' },
    { title: 'Glutathione IV Therapy', desc: 'Glow & detox with anti-age infusion.' },
    { title: 'Chemical Peels',       desc: 'Fade pigmentation, scars & dullness.' },
    { title: 'Microneedling & PRP',  desc: 'Boost collagen and renew skin.' },
    { title: 'Omega Light Therapy',  desc: 'LED-based painless rejuvenation.' },
    { title: 'Permanent Makeup (PMU)', desc: 'Brows, lip tint & eyeliner tattoo.' },
];

const topServices = allServices.slice(0, 4);

export default function ServicesPreview() {
    return (
        <section className="services-section pt-10 pb-10" id="services">
            <div className="m-10">

                {/* ───────── Heading ───────── */}
                <div className="text-center mb-10">
                    <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-3">
                        Most-Requested Services
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        The treatments our clients love the most.
                    </p>
                </div>

                {/* ───────── Top-4 Grid ───────── */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {topServices.map(({ title, desc }) => (
                        <Link
                            key={title}
                            to={`/services#${title.replace(/\s+/g, '-').toLowerCase()}`}
                            className="group bg-white rounded-xl border border-gray-200 px-2 py-5
                         shadow-sm hover:shadow-lg hover:scale-101 transition"
                        >
                            <h4 className="text-lg font-semibold mb-2 group-hover:text-primary">
                                {title}
                            </h4>
                            <p className="text-sm text-gray-600">{desc}</p>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/services"
                        className="
              inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold
              btn text-white shadow-md  transition
            "
                    >
                        See all services
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
