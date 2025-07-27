import Section from '@/components/Section';
import HeroSection from '@/components/HeroSection';
import AboutHome from '@/page/AboutHome';
import Mission from '@/page/Mission';
import ServicesPreview from '@/page/Home/ServicePreview';
import Testimonials from '@/page/Home/Testimonials';
import ContactBlock from '@/page/Home/ContactBlock';

export default function Home() {
    return (
        <div className="bg-white text-gray-900 snap-y snap-mandatory overflow-x-hidden">
            {/* Hero stays full‑bleed */}
            <HeroSection />

            <Section id="about" bg="bg-primary-background">
                <AboutHome />
            </Section>

            <Section id="mission" bg="">
                <Mission />
            </Section>

            <Section id="services" bg="bg-primary-background">
                <ServicesPreview />
            </Section>

            <Section id="testimonials" bg="">
                <Testimonials />
            </Section>

            <Section id="contact" bg="bg-primary-background">
                <ContactBlock />
            </Section>
        </div>
    );
}
