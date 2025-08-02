import React, {useCallback, useRef, useState} from 'react';
import ContactHero from '@/components/ContactHero';
import {toast, ToastContainer} from 'react-toastify';
import emailjs from 'emailjs-com';

import emailIco from '@/assets/icons/email.svg';
import locIco from '@/assets/icons/location.svg';
import igIco from '@/assets/icons/instagram.svg';
import phoneIco from '@/assets/icons/phone.svg';
import {format} from 'date-fns';

const SERVICE_OPTS = [
    'Hydra‑Facial',
    'Botox',
    'Dermal Fillers',
    'Glutathione IV Therapy',
    'Chemical Peels',
    'Microneedling & PRP',
    'Omega Light Therapy',
    'Permanent Makeup (PMU)',
];

const CONTACT_ITEMS = [
    {icon: locIco, label: 'No 13, Aranganathan subway Road, North Saidapet, Chennai – 600015', isLink: false},
    {icon: phoneIco, label: '+91-9500311077', link: 'tel:+919500311077'},
    {icon: emailIco, label: 'contact@mysahaesthetics.com', link: 'mailto:contact@mysahaesthetics.com'},
    {icon: igIco, label: '@mysahaesthetics', link: 'https://instagram.com/mysahaesthetics'},
];

const InfoRow = ({icon, label, link}) => (
    <div className="flex gap-3 items-start">
        <img src={icon} alt="" className="w-6 shrink-0"/>
        {link ? (
            <a href={link} target={link.startsWith('http') ? '_blank' : undefined}
               rel="noopener noreferrer"
               className="hover:text-primary transition">
                {label}
            </a>
        ) : (
            <address className="not-italic text-left">{label}</address>
        )}
    </div>
);

export default function ContactPage() {
    const formRef = useRef(null);

    const [preferredDate, setPreferredDate] = useState('');
    const [preferredTime, setPreferredTime] = useState('');
    const [loading, setLoading] = useState(false);

    const sendEmail = useCallback(async (e) => {
        e.preventDefault();
        if (loading) return; // prevent accidental double click

        setLoading(true);
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            toast.success('Appointment request sent! We will contact you shortly.', {
                position: 'top-center',
                autoClose: 300000,
                style: {whiteSpace: 'nowrap', width: "auto"},
            });
            formRef.current.reset();
            setPreferredDate('');
            setPreferredTime('');
        } catch (err) {
            toast.error('Oops, something went wrong. Please try again.', {
                position: 'top-center',
                autoClose: 3000,
                style: {whiteSpace: 'nowrap'},
            });
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [loading]);

    return (
        <main className="overflow-hidden">
            <ToastContainer/>
            <ContactHero/>

            <section className="py-24 bg-gradient-to-b from-rose-50 via-white to-rose-50
                          ">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                        {/* ───── Left column – clinic info ───── */}
                        <aside className="flex-1 space-y-6 text-gray-700 ">
                            <h2 className="text-2xl font-bold">Mysah Aesthetic Clinic</h2>
                            {CONTACT_ITEMS.map((c) => (
                                <InfoRow key={c.label} {...c} />
                            ))}
                        </aside>

                        {/* ───── Right column – appointment form ───── */}
                        <div className="flex-1 bg-white/80  backdrop-blur
                            rounded-2xl p-6 sm:p-8 shadow-lg border border-white/60">
                            <h3 className="text-2xl font-bold text-gray-800  mb-6">
                                Schedule Your Visit
                            </h3>

                            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                                {/* Name + Phone */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Input label="Name" id="name" name="user_name"/>
                                    <Input label="Phone" id="phone" name="user_phone" type="tel"/>
                                </div>

                                {/* Email + Service */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Input label="Email" id="email" name="user_email" type="email"/>
                                    <Select label="Service Requested" id="service" name="service"
                                            options={SERVICE_OPTS}/>
                                </div>


                                <div className="grid sm:grid-cols-2 gap-6">
                                    {/* Input Fields */}
                                    <div>
                                        <label htmlFor="preferred_date"
                                               className="block text-sm font-medium text-gray-700 mb-1">Preferred
                                            Date</label>
                                        <input
                                            id="preferred_date"
                                            name="preferred_date"
                                            type="date"
                                            value={preferredDate}
                                            onChange={(e) => setPreferredDate(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300
                                             rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 text-gray-800"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="preferred_time"
                                               className="block text-sm font-medium text-gray-700 mb-1">Preferred
                                            Time</label>
                                        <input
                                            id="preferred_time"
                                            name="preferred_time"
                                            type="time"
                                            value={preferredTime}
                                            onChange={(e) => setPreferredTime(e.target.value)}
                                            className="w-full px-4 py-2 border
                                            border-gray-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 text-gray-800"
                                            required
                                        />
                                    </div>

                                    {/* Preview (Optional) */}
                                    {(preferredDate && preferredTime) && (
                                        <div className="sm:col-span-2 mt-4 p-4 bg-gray-50 rounded-md text-gray-700">
                                            <p><strong>Selected
                                                Date:</strong> {format(new Date(preferredDate), "EEE, d MMMM yyyy")}</p>
                                            <p><strong>Selected
                                                Time:</strong> {format(new Date(`${preferredDate}T${preferredTime}`), "hh:mm a")}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Message */}
                                <Textarea label="Message (Optional)" id="message" name="message"/>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full rounded-full font-semibold px-8 py-3 shadow-md transition btn
                                        ${loading ? 'bg-rose-300 cursor-not-allowed' : 'hover:cursor-pointer'}
                                      `}
                                >
                                    {loading ? 'Sending...' : 'Request Appointment'}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

/* ---------- small presentational helpers ---------- */
const baseInput =
    'rounded-md border border-gray-300 px-4 py-2 focus:ring-rose-400 focus:border-rose-400 outline-none';

const Input = ({label, id, name, type = 'text'}) => (
    <div className="flex flex-col gap-2">
        <label htmlFor={id} className="font-medium">{label}</label>
        <input required id={id} name={name} type={type} className={baseInput}/>
    </div>
);

const Select = ({label, id, name, options}) => (
    <div className="flex flex-col gap-2">
        <label htmlFor={id} className="font-medium">{label}</label>
        <select required id={id} name={name} defaultValue="" className={`${baseInput} bg-white`}>
            <option value="" disabled>Select a service</option>
            {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

const Textarea = ({label, id, name}) => (
    <div className="flex flex-col gap-2">
        <label htmlFor={id} className="font-medium">{label}</label>
        <textarea id={id} name={name} rows="3"
                  className={`${baseInput} resize-none`}/>
    </div>
);
