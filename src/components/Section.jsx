// src/components/Section.jsx
export default function Section({ id, children, bg = '' }) {
    return (
        <section id={id} className={`py-5 sm:py-15 lg:py-10 relative ${bg}`}>
            <div className=" mx-auto px-4">{children}</div>
        </section>
    );
}
