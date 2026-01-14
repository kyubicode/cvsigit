import React from 'react';
import * as DataTypes from '../data/types';
import {
    FaLinkedin,
    FaGithub,
    FaDownload,
    FaPaperPlane,
    FaWhatsappSquare
} from 'react-icons/fa';

interface ProfileCardProps {
    data: DataTypes.CvData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ data }) => {
    const PROFILE_SIZE = 'w-28 h-28 sm:w-36 sm:h-36';

    return (
        <div className="bg-white w-full md:max-w-xs flex-shrink-0 relative z-20
                        flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden rounded-3xl">

            {/* -------------------- Top Background Section -------------------- */}
            <div className="relative h-32 sm:h-44 group overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-500 transition-transform duration-700 group-hover:scale-110">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
            </div>

            {/* -------------------- Gambar Profil (Avatar) -------------------- */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-32 sm:top-44`}>
                <div className={`rounded-3xl ${PROFILE_SIZE} bg-white p-1.5 shadow-2xl transition-transform duration-500 hover:rotate-3`}>
                    <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-gray-50">
                        <img
                            src={data.foto}
                            alt={data.name}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* -------------------- Content Section -------------------- */}
            <div className="flex flex-col items-center text-center pt-16 sm:pt-24 pb-8 px-6 flex-grow">
                <h1 className="text-xl sm:text-2xl font-black text-gray-900 mb-1 tracking-tight">
                    {data.name}
                </h1>

                <div className="inline-block px-3 py-1 bg-teal-50 rounded-lg mb-6">
                    <p className="text-teal-700 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                        {data.title}
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-2 mb-8">
                    {[
                        { icon: FaLinkedin, href: `https://${data.contact.linkedin}`, label: 'LinkedIn' },
                        { icon: FaGithub, href: `https://${data.contact.github}`, label: 'GitHub' },
                        { icon: FaWhatsappSquare, href: 'https://wa.me/yournumber', label: 'Whatsapp' },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-teal-600 hover:text-white hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300"
                            aria-label={social.label}
                        >
                            <social.icon size={16} />
                        </a>
                    ))}
                </div>

                <div className="space-y-2 border-t border-gray-50 pt-6 w-full">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Base Location</p>
                    <p className="text-sm font-bold text-gray-700">{data.location}</p>
                </div>
            </div>

            {/* -------------------- Bottom Action Buttons -------------------- */}
            <div className="grid grid-cols-2 mt-auto flex-shrink-0">
                {/* PENTING:
                   Path dimulai dengan '/' yang merujuk ke folder 'public'.
                   Sesuai instruksi Anda: public/doc/CVSF.pdf -> menjadi /doc/CVSF.pdf
                */}
                <a
                    href="/doc/CVSF.pdf"
                    download="CVSF.pdf"
                    className="py-5 flex bg-gray-900 items-center justify-center text-[10px] font-black text-white hover:bg-black transition-all duration-300 uppercase tracking-widest group border-r border-white/5 no-underline"
                    aria-label="Download CV"
                >
                    DOWNLOAD CV <FaDownload className="ml-2 group-hover:animate-bounce" />
                </a>

                <a href={`mailto:${data.contact.email}`}
                    className="py-5 flex bg-teal-600 items-center justify-center text-[10px] font-black text-white hover:bg-teal-700 transition-all duration-300 uppercase tracking-widest group no-underline"
                    aria-label="Contact Me"
                >
                    Hire <FaPaperPlane className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
