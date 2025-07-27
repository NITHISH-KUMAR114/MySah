import React from 'react';

export default function Mission() {
    return (
        <section
            className="relative isolate overflow-hidden
                       bg-white/90
                       backdrop-blur-md shadow-lg ring-1 ring-rose-200/20
                       hover:shadow-rose-300
                       transition-all duration-300">
            {/* Subtle gradient wash */}
            <div className="absolute inset-0 -z-10
                            bg-gradient-to-br from-rose-100/60 via-white/20 to-transparent
                            " />

            <div className="p-5 sm:p-10">
                {/* Heading row */}
                <div className="flex justify-center gap-3">
                    <h4
                        className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight
                                   bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent
                                   ">
                        Our Mission&nbsp;&amp;&nbsp;Vision
                    </h4>
                </div>

                {/* Body copy */}
                <p className="mt-4 text-gray-800  text-sm sm:text-base leading-relaxed">
                    We combine medical precision with artistic finesse, crafting personalized aesthetic
                    plans that melt away daily stress and let every client’s natural confidence bloom.
                </p>
            </div>
        </section>
    );
}
