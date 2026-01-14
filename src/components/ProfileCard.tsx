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
        <div className="bg-white/40 backdrop-blur-2xl w-full md:max-w-xs flex-shrink-0 relative z-20
                        flex flex-col min-h-[580px] h-fit shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                        border border-white/60 rounded-[2.5rem] overflow-hidden isolate">

            {/* -------------------- Top Background Section -------------------- */}
            <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-teal-500 transition-transform duration-700 hover:scale-110">
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
            </div>

            {/* -------------------- Gambar Profil (Avatar) -------------------- */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-40 sm:top-48 z-30">
                <div className={`rounded-3xl ${PROFILE_SIZE} bg-white/80 p-1.5 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-3`}>
                    <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white">
                        <img
                            src={data.foto}
                            alt={data.name}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* -------------------- Content Section -------------------- */}
            <div className="flex flex-col items-center text-center pt-20 sm:pt-28 pb-10 px-8 flex-grow">
                <h1 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                    {data.name}
                </h1>

                <div className="inline-block px-4 py-1.5 bg-teal-500/10 backdrop-blur-md rounded-xl mb-6 border border-teal-500/20">
                    <p className="text-teal-700 font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em]">
                        {data.title}
                    </p>
                </div>

                <div className="flex space-x-3 mb-10">
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
                            className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/60 text-gray-400 hover:bg-teal-600 hover:text-white hover:shadow-lg transition-all duration-300 border border-white"
                            aria-label={social.label}
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>

                <div className="space-y-2 border-t border-gray-900/5 pt-8 w-full mt-auto">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Base Location</p>
                    <p className="text-sm font-bold text-gray-700 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
                        {data.location}
                    </p>
                </div>
            </div>

            {/* -------------------- Bottom Action Buttons -------------------- */}
            {/* PERBAIKAN: Menambahkan padding kecil agar tidak menempel ke border dan memastikan radius mengikuti card */}
            <div className="flex w-full gap-0 flex-shrink-0 mt-auto p-0">
                <a
                    href="/doc/CVSF.pdf"
                    download="CVSF.pdf"
                    className="flex-1 py-5 flex bg-gray-900 items-center justify-center text-[9px] sm:text-[10px] font-black text-white hover:bg-black transition-all duration-300 uppercase tracking-widest group border-r border-white/10 no-underline rounded-bl-[2.5rem]"
                >
                    <span className="hidden xs:inline">DOWNLOAD</span> CV <FaDownload className="ml-2 group-hover:animate-bounce" />
                </a>

                <a href={`mailto:${data.contact.email}`}
                    className="flex-1 py-5 flex bg-teal-600 items-center justify-center text-[9px] sm:text-[10px] font-black text-white hover:bg-teal-700 transition-all duration-300 uppercase tracking-widest group no-underline rounded-br-[2.5rem]"
                >
                    HIRE <span className="hidden xs:inline">ME</span> <FaPaperPlane className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
