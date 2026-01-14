import React, { useRef, useState } from 'react';
import * as DataTypes from '../data/types';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCheckCircle, FaComments, FaPaperPlane, FaSpinner } from 'react-icons/fa';

interface ContactSectionProps {
    data: DataTypes.CvData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
    const formRef = useRef<HTMLFormElement>(null);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
        type: null,
        message: ''
    });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        const SERVICE_ID = 'service_e0xatds';
        const TEMPLATE_ID = 'template_ugke4p7';
        const PUBLIC_KEY = 'O2aS_YnAnMF8_fdZC';

        if (!formRef.current) return;

        setLoading(true);
        setStatus({ type: null, message: '' });

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus({
                    type: 'success',
                    message: 'Terima kasih! Pesan Anda telah berhasil dikirim.'
                });
                formRef.current?.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStatus({
                    type: 'error',
                    message: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.'
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const renderContactCard = (Icon: React.ElementType, title: string, content: string | React.ReactNode) => (
        <div className="group bg-white border border-gray-100 p-5 rounded-2xl text-center shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200">
            <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-xl mb-3 bg-teal-50 text-teal-600 group-hover:bg-teal-700 group-hover:text-white transition-all duration-500 shadow-inner">
                <Icon className="text-lg" />
            </div>
            <h4 className="font-black text-gray-800 text-[10px] uppercase tracking-widest mb-1">{title}</h4>
            <div className="text-gray-500 text-xs font-medium break-words leading-relaxed">{content}</div>
        </div>
    );

    return (
        /* PERBAIKAN: Spasi atas dirapatkan agar menyatu dengan WorksSection */
        <section id="contact" className="pt-2 pb-12 animate-fade-in">

            {/* Header Title: mb-8 agar konsisten */}
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl shadow-inner border border-teal-100">
                    <FaComments size={20} />
                </div>
                <div>
                    <h2 className="text-[10px] uppercase font-bold text-teal-600 tracking-[0.2em] mb-0.5">Communication</h2>
                    <h3 className="text-2xl sm:text-4xl font-black text-gray-900">
                        Get In <span className="text-teal-600">Touch</span>
                    </h3>
                </div>
            </div>

            {/* Grid Info Cards: Jarak bawah dirapatkan menjadi mb-8 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                {renderContactCard(FaPhoneAlt, "Phone", data.contact.phone)}
                {renderContactCard(FaEnvelope, "Email", data.contact.email)}
                {renderContactCard(FaMapMarkerAlt, "Location", data.location)}
                {renderContactCard(FaCheckCircle, "Freelance", <span className="text-teal-600 font-bold">Available</span>)}
            </div>

            {/* Form Section: Padding internal p-6 sm:p-8 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-1.5 h-5 bg-teal-500 rounded-full"></span>
                    <h3 className="text-lg font-black text-gray-800 uppercase tracking-tight">Send a Message</h3>
                </div>

                {/* Notifikasi Status */}
                {status.type && (
                    <div className={`mb-6 p-4 rounded-xl text-xs font-bold flex items-center transition-all ${
                        status.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-100'
                        : 'bg-red-50 text-red-700 border border-red-100'
                    }`}>
                        {status.type === 'success' ? <FaCheckCircle className="mr-3 text-sm" /> : null}
                        {status.message}
                    </div>
                )}

                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase text-gray-400 ml-1 tracking-widest">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="e.g. John Doe"
                                className="w-full border border-gray-100 rounded-xl px-4 py-2.5 bg-gray-50 focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm font-medium"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[9px] font-black uppercase text-gray-400 ml-1 tracking-widest">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="name@example.com"
                                className="w-full border border-gray-100 rounded-xl px-4 py-2.5 bg-gray-50 focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[9px] font-black uppercase text-gray-400 ml-1 tracking-widest">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            placeholder="How can I help you?"
                            className="w-full border border-gray-100 rounded-xl px-4 py-2.5 bg-gray-50 focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/5 transition-all text-sm font-medium resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full md:w-auto flex items-center justify-center space-x-3 bg-teal-700 text-white font-black py-3 px-8 rounded-xl hover:bg-teal-800 transition-all uppercase text-[10px] tracking-[0.2em] shadow-lg shadow-teal-900/20 disabled:opacity-70 active:scale-95"
                    >
                        {loading ? (
                            <><FaSpinner className="animate-spin" /> <span>Sending...</span></>
                        ) : (
                            <><FaPaperPlane /> <span>Send Message Now</span></>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
