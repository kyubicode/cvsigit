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
        /* PERBAIKAN: Mengganti h-full menjadi h-fit agar tidak molor di layar besar */
        <div className="bg-white w-full md:max-w-xs flex-shrink-0 relative z-20
                        flex flex-col h-fit shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden rounded-3xl">

            {/* -------------------- Top Background Section -------------------- */}
            {/* PERBAIKAN: h-32 sudah cukup, jangan terlalu tinggi */}
            <div className="relative h-32 sm:h-40 group overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-500 transition-transform duration-700 group-hover:scale-110">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
            </div>

            {/* -------------------- Gambar Profil (Avatar) -------------------- */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-32 sm:top-40`}>
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
            {/* PERBAIKAN: Padding diperkecil agar lebih compact */}
            <div className="flex flex-col items-center text-center pt-16 sm:pt-24 pb-6 px-6">
                <h1 className="text-xl font-black text-gray-900 mb-1 tracking-tight">
                    {data.name}
                </h1>

                <div className="inline-block px-3 py-1 bg-teal-50 rounded-lg mb-4">
                    <p className="text-teal-700 font-black text-[10px] uppercase tracking-[0.2em]">
                        {data.title}
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-2 mb-6">
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
                            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-teal-600 hover:text-white transition-all duration-300"
                            aria-label={social.label}
                        >
                            <social.icon size={16} />
                        </a>
                    ))}
                </div>

                {/* Detail Lokasi */}
                <div className="space-y-1 border-t border-gray-50 pt-4 w-full">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Base Location</p>
                    <p className="text-sm font-bold text-gray-700">{data.location}</p>
                </div>
            </div>

            {/* -------------------- Bottom Action Buttons -------------------- */}
            <div className="grid grid-cols-2 flex-shrink-0">
                <a
                    href="/doc/CVSF.pdf"
                    download="CVSF.pdf"
                    className="py-4 flex bg-gray-900 items-center justify-center text-[10px] font-black text-white hover:bg-black transition-all duration-300 uppercase tracking-widest group border-r border-white/5 no-underline"
                >
                    CV <FaDownload className="ml-2 group-hover:animate-bounce" />
                </a>

                <a href={`mailto:${data.contact.email}`}
                    className="py-4 flex bg-teal-600 items-center justify-center text-[10px] font-black text-white hover:bg-teal-700 transition-all duration-300 uppercase tracking-widest group no-underline"
                >
                    Hire <FaPaperPlane className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
