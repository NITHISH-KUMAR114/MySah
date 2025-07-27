import React from 'react';

import aboutImg from '@/assets/images/service.jpg';

/**
 * AboutHome – Experience section followed by Mission & Vision (no tabs)
 * Left: hero image • Right: stacked content blocks
 * Pure Tailwind for styling
 */
export default function AboutHome() {
    return (
        <section className="about-section my-5 lg:my-10" id="about">
            <div className="container mx-auto px-4">
                <div className="lg:flex lg:items-center lg:gap-10">
                    {/* Image */}
                    <div className="lg:w-7/12 mb-8 lg:mb-0">
                        <img
                            src={aboutImg}
                            alt="About Mysah"
                            className="rounded-xl w-full object-cover h-96 lg:h-[500px] shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="lg:w-5/12">
                        {/* Experience */}
                        <h2 className="text-3xl font-bold mb-4">Trusted for our proven expertise.</h2>
                        <h6 className="text-lg font-medium text-gray-600 mb-4">
                            Saunas are used all over the world to improve health, enjoy &amp; relax.
                        </h6>
                        <p className="text-gray-700 mb-6">
                            It has different attractions – tropical rain, fog, dew, wall jets and it is combined with sound, caribbean
                            storm, aroma and various lighting effects, what makes you have an unforgettable feeling.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
