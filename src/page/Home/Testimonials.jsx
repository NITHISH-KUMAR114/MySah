import React from 'react';

const testimonials = [
    {
        quote:
            'Mysah changed my skin and my confidence. The staff is super friendly and professional.',
        name: 'Priya R.',
        city: 'Chennai',
    },
    {
        quote:
            'I tried their Glutathione IV and I’m glowing! Love the service and vibe.',
        name: 'Ayesha M.',
        city: 'Bengaluru',
    },
];

export default function Testimonials() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-gray-800 drop-shadow">
                        Client Testimonials
                    </h2>

                    <p className="text-gray-600 ">
                        Real stories from our happy clients
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
                    {testimonials.map(({ quote, name, city }) => (
                        <div
                            key={name}
                            className="relative p-8 rounded-md
                                bg-white/85
                                backdrop-blur-lg shadow-md border border-gray-300
                                flex flex-col hover:shadow-xl hover:scale-102 transition-all duration-500"
                        >
                            {/* Decorative Quote Icon */}
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="absolute -top-5 left-6 w-10 h-10 text-rose-300 "
                            >
                                <path d="M7.17 8.23a7 7 0 0 1 3.83-1.1v3.02a3.27 3.27 0 0 0-1.57.39c-.6.35-1 .98-1 1.83 0 .78.27 1.39.82 1.83.55.44 1.25.66 2.1.66v3.04c-1.55 0-2.84-.38-3.88-1.14-1.04-.76-1.56-1.97-1.56-3.63 0-1.52.52-2.73 1.56-3.55Zm9.5 0A7 7 0 0 1 20.5 7.13v3.02a3.27 3.27 0 0 0-1.57.39c-.6.35-1 .98-1 1.83 0 .78.27 1.39.82 1.83.55.44 1.25.66 2.1.66v3.04c-1.55 0-2.84-.38-3.88-1.14-1.04-.76-1.56-1.97-1.56-3.63 0-1.52.52-2.73 1.56-3.55Z" />
                            </svg>

                            {/* Quote */}
                            <p className="text-lg text-gray-800  leading-relaxed mt-6">
                                “{quote}”
                            </p>

                            {/* Client Name */}
                            <div className="mt-6">
                                <p className="font-semibold text-rose-700 ">
                                    {name}
                                </p>
                                <span className="text-sm text-gray-500">
                                    {city}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
