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
    const PROFILE_SIZE = 'w-32 h-32 sm:w-40 sm:h-40';

    return (
        /* PERBAIKAN:
           - h-screen pada mobile agar menutupi seluruh layar.
           - overflow-y-auto agar konten di tengah bisa di-scroll jika layar sangat pendek.
        */
        <div className="bg-white/60 backdrop-blur-3xl w-full md:max-w-xs flex-shrink-0 relative z-20
                        flex flex-col h-screen md:h-full shadow-[10px_0_40px_rgba(0,0,0,0.04)] border-r border-white/40 rounded-none">

            {/* Scrollable Area (Isi Profile) */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-32 md:pb-0">

                {/* -------------------- Top Background Section -------------------- */}
                <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-600 to-teal-500">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    </div>
                </div>

                {/* -------------------- Gambar Profil (Avatar) -------------------- */}
                <div className="relative flex justify-center -mt-16 sm:-mt-20 z-30">
                    <div className={`rounded-2xl ${PROFILE_SIZE} bg-white p-1 shadow-2xl`}>
                        <div className="w-full h-full rounded-xl overflow-hidden border-2 border-gray-50">
                            <img
                                src={data.foto}
                                alt={data.name}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* -------------------- Content Section -------------------- */}
                <div className="flex flex-col items-center text-center pt-8 pb-12 px-8">
                    <h1 className="text-2xl font-black text-gray-900 mb-2 tracking-tight uppercase">
                        {data.name}
                    </h1>

                    <div className="inline-block px-4 py-1 bg-teal-600 rounded-sm mb-8">
                        <p className="text-white font-bold text-[10px] uppercase tracking-[0.3em]">
                            {data.title}
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-3 mb-12">
                        {[
                            { icon: FaLinkedin, href: `https://${data.contact.linkedin}` },
                            { icon: FaGithub, href: `https://${data.contact.github}` },
                            { icon: FaWhatsappSquare, href: '#' },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center bg-gray-900/5 text-gray-500 hover:bg-gray-900 hover:text-white transition-all duration-300"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Information List */}
                    <div className="w-full space-y-6 text-left border-t border-gray-900/5 pt-10">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</span>
                            <span className="text-xs font-bold text-teal-600 flex items-center gap-1">
                                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                                Available
                            </span>
                        </div>
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</span>
                            <span className="text-xs font-bold text-gray-800">{data.location}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------- Bottom Action Buttons -------------------- */}
            {/* PERBAIKAN:
                - Menggunakan absolute pada mobile agar tetap di bawah layar profile.
                - Z-index tinggi agar tidak tertutup elemen lain.
            */}
            <div className="flex flex-col flex-shrink-0 border-t border-white/20 z-50 bg-white/10 backdrop-blur-md">
                <a
                    href="doc/CVSF.pdf"
                    download
                    className="w-full py-5 flex bg-gray-900 items-center justify-center text-[11px] font-black text-white hover:bg-black transition-all duration-300 uppercase tracking-[0.2em] group no-underline"
                >
                    Download CV <FaDownload className="ml-3 group-hover:animate-bounce" />
                </a>

                <a href={`mailto:${data.contact.email}`}
                    className="w-full py-5 flex bg-teal-600 items-center justify-center text-[11px] font-black text-white hover:bg-teal-700 transition-all duration-300 uppercase tracking-[0.2em] group no-underline"
                >
                    Hire Me <FaPaperPlane className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;
