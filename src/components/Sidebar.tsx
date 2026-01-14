import React from 'react';
import {
    FaBriefcase,
    FaEnvelope,
    FaHouseUser,
    FaSignOutAlt,
    FaTools,
    FaUserGraduate,
    FaRocket,
    FaAddressCard,
    FaRegCaretSquareLeft
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { logout } from '../auth/auth';

interface SidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
    isProfileVisible: boolean;
    toggleProfile: () => void;
}

/**
 * KOMPOSISI WARNA:
 * Menambahkan 'contact' ke dalam list agar otomatis dirender oleh desktop sidebar.
 */
const mainMenuItems = [
    { id: 'about', label: 'About', icon: FaHouseUser, color: 'text-emerald-500', activeBg: 'bg-emerald-500', shadow: 'shadow-emerald-200' },
    { id: 'education', label: 'Education', icon: FaUserGraduate, color: 'text-teal-500', activeBg: 'bg-teal-500', shadow: 'shadow-teal-200' },
    { id: 'experience', label: 'Experience', icon: FaBriefcase, color: 'text-sky-600', activeBg: 'bg-sky-600', shadow: 'shadow-sky-200' },
    { id: 'skills', label: 'Skills', icon: FaTools, color: 'text-cyan-500', activeBg: 'bg-cyan-500', shadow: 'shadow-cyan-200' },
    { id: 'works', label: 'Projects', icon: FaRocket, color: 'text-indigo-500', activeBg: 'bg-indigo-500', shadow: 'shadow-indigo-200' },
    { id: 'contact', label: 'Contact', icon: FaEnvelope, color: 'text-orange-500', activeBg: 'bg-orange-500', shadow: 'shadow-orange-200' },
];

const Sidebar: React.FC<SidebarProps> = ({
    activeSection,
    setActiveSection,
    isProfileVisible,
    toggleProfile
}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (typeof logout === 'function') logout();
        navigate('/login', { replace: true });
    };

    const handleScroll = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 40;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* --- DESKTOP SIDEBAR --- */}
            <aside className="fixed hidden md:flex top-0 left-6 h-screen w-24 flex-col items-center py-10 z-50 pointer-events-none">
                <div className="flex flex-col space-y-6 pointer-events-auto p-4 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">

                    <button
                        onClick={toggleProfile}
                        className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500 shadow-sm cursor-pointer
                        ${isProfileVisible
                            ? 'bg-teal-900 text-white'
                            : 'bg-white text-teal-600 hover:bg-teal-50 border border-teal-100'}`}
                    >
                        {isProfileVisible ? <FaRegCaretSquareLeft size={20} /> : <FaAddressCard size={20} />}
                    </button>

                    <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-teal-200 to-transparent mx-auto" />

                    <nav className="flex flex-col space-y-5">
                        {mainMenuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleScroll(item.id)}
                                    className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500 cursor-pointer
                                    ${isActive
                                        ? `${item.activeBg} text-white shadow-xl ${item.shadow} scale-110`
                                        : `bg-white/80 hover:bg-white text-gray-400 border border-gray-50 shadow-sm`}`}
                                >
                                    <div className={`transition-all duration-300 ${isActive ? 'scale-110' : `${item.color} group-hover:scale-110`}`}>
                                        <Icon size={18} />
                                    </div>

                                    <span className={`absolute left-full ml-5 px-3 py-2 ${item.activeBg} text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-xl opacity-0 group-hover:opacity-100 transition-all -translate-x-3 group-hover:translate-x-0 pointer-events-none shadow-2xl backdrop-blur-md`}>
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </nav>

                    <div className="flex-grow" />

                    <button
                        onClick={handleLogout}
                        className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 text-rose-400 border border-rose-50 hover:bg-rose-500 hover:text-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-rose-200"
                    >
                        <FaSignOutAlt size={18} />
                    </button>
                </div>
            </aside>

            {/* --- MOBILE BOTTOM NAVIGATION --- */}
            <nav className="md:hidden fixed bottom-6 left-6 right-6 bg-white/80 backdrop-blur-2xl border border-white/50 p-3 flex justify-between items-center z-[100] shadow-[0_15px_35px_rgba(0,0,0,0.1)] rounded-[2.5rem]">
                <div className="flex flex-1 justify-around items-center">
                    {mainMenuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className="relative p-2.5 transition-all duration-500 cursor-pointer"
                            >
                                <div className={`transition-all duration-500 ${isActive ? `${item.color} scale-125 drop-shadow-md` : `${item.color} opacity-40`}`}>
                                    <Icon size={20} />
                                </div>
                                {isActive && (
                                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 ${item.activeBg} rounded-full animate-pulse`} />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Tombol Logout kecil untuk mobile (opsional) */}
                <div className="w-[1px] h-8 bg-gray-100 mx-2" />
                <button
                    onClick={handleLogout}
                    className="p-3 text-rose-400"
                >
                    <FaSignOutAlt size={18} />
                </button>
            </nav>
        </>
    );
};

export default Sidebar;
