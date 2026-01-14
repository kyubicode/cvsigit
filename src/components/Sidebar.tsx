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
            {/* Mengubah left-6 menjadi left-2 agar lebih mepet ke pinggir kiri */}
            <aside className="fixed hidden md:flex top-0 left-2 h-screen w-20 flex-col items-center py-10 z-50 pointer-events-none">
                <div className="flex flex-col space-y-4 pointer-events-auto p-3 bg-white/40 backdrop-blur-2xl rounded-[2rem] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">

                    <button
                        onClick={toggleProfile}
                        className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500 shadow-sm cursor-pointer
                        ${isProfileVisible ? 'bg-teal-900 text-white' : 'bg-white text-teal-600 hover:bg-teal-50 border border-teal-100'}`}
                    >
                        {isProfileVisible ? <FaRegCaretSquareLeft size={20} /> : <FaAddressCard size={20} />}
                    </button>

                    <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-teal-200 to-transparent mx-auto" />

                    <nav className="flex flex-col space-y-4">
                        {mainMenuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500 cursor-pointer
                                ${activeSection === item.id
                                    ? `${item.activeBg} text-white shadow-xl ${item.shadow} scale-110`
                                    : `bg-white/80 hover:bg-white text-gray-400 border border-gray-50 shadow-sm`}`}
                            >
                                <div className={`transition-all duration-300 ${activeSection === item.id ? 'scale-110' : `${item.color} group-hover:scale-110`}`}>
                                    <item.icon size={18} />
                                </div>
                                {/* Tooltip label */}
                                <span className={`absolute left-full ml-4 px-3 py-2 ${item.activeBg} text-white text-[10px] font-black uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-xl backdrop-blur-md whitespace-nowrap`}>
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </nav>

                    <div className="flex-grow" />

                    <button
                        onClick={handleLogout}
                        className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 text-rose-400 border border-rose-50 hover:bg-rose-500 hover:text-white transition-all duration-500 cursor-pointer shadow-sm"
                    >
                        <FaSignOutAlt size={18} />
                    </button>
                </div>
            </aside>

            {/* --- MOBILE BOTTOM NAVIGATION --- */}
            <nav className="md:hidden fixed bottom-6 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-white/50 p-1.5 flex items-center z-[100] shadow-[0_15px_35px_rgba(0,0,0,0.1)] rounded-2xl">

                {/* Profile Toggle (Paling Kiri) */}
                <button
                    onClick={toggleProfile}
                    className={`p-3 rounded-xl transition-all flex-shrink-0 ${isProfileVisible ? 'bg-teal-600 text-white shadow-md' : 'text-teal-600 bg-teal-50'}`}
                >
                    <FaAddressCard size={18} />
                </button>

                <div className="w-[1px] h-6 bg-gray-100 mx-2 flex-shrink-0" />

                {/* Menu Items (Mampat ke Kiri mengikuti Profile) */}
                <div className="flex flex-1 items-center justify-start gap-0.5 overflow-x-auto no-scrollbar">
                    {mainMenuItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className={`relative p-2.5 rounded-xl transition-all duration-300 flex-shrink-0
                                ${isActive ? 'bg-gray-50 scale-105' : 'opacity-50'}`}
                            >
                                <div className={`${item.color}`}>
                                    <item.icon size={17} />
                                </div>
                                {isActive && (
                                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 ${item.activeBg} rounded-full`} />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="w-[1px] h-6 bg-gray-100 mx-2 flex-shrink-0" />

                {/* Logout (Paling Kanan) */}
                <button
                    onClick={handleLogout}
                    className="p-3 text-rose-400 flex-shrink-0 active:scale-90 transition-transform"
                >
                    <FaSignOutAlt size={18} />
                </button>
            </nav>
        </>
    );
};

export default Sidebar;
