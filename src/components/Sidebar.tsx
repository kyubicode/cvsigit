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
            <aside className="fixed hidden md:flex top-10 left-3 h-auto z-50 pointer-events-none">
                <div className="flex flex-col space-y-4 pointer-events-auto p-3 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] border border-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] items-center">

                    {/* Profile Toggle (Hanya di Desktop) */}
                    <button
                        onClick={toggleProfile}
                        className={`flex items-center justify-center w-11 h-11 rounded-2xl transition-all duration-500 shadow-sm cursor-pointer
                        ${isProfileVisible ? 'bg-teal-900 text-white' : 'bg-white text-teal-600 border border-teal-50 hover:bg-teal-50'}`}
                    >
                        {isProfileVisible ? <FaRegCaretSquareLeft size={18} /> : <FaAddressCard size={18} />}
                    </button>

                    <div className="w-8 h-[1px] bg-gray-200/60 mx-auto" />

                    {/* Nav Items */}
                    <nav className="flex flex-col space-y-3">
                        {mainMenuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className={`group relative flex items-center justify-center w-11 h-11 rounded-2xl transition-all duration-500 cursor-pointer
                                ${activeSection === item.id
                                    ? `${item.activeBg} text-white shadow-lg ${item.shadow}`
                                    : `bg-white/80 hover:bg-white text-gray-400 border border-gray-50 shadow-sm`}`}
                            >
                                <div className={`transition-all duration-300 ${activeSection === item.id ? 'scale-110' : `${item.color} group-hover:scale-110`}`}>
                                    <item.icon size={18} />
                                </div>
                                <span className="absolute left-full ml-4 px-3 py-1.5 bg-gray-800 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </nav>

                    <div className="w-8 h-[1px] bg-gray-200/60 mx-auto" />

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/80 text-rose-400 border border-rose-50 hover:bg-rose-500 hover:text-white transition-all duration-500 cursor-pointer shadow-sm"
                    >
                        <FaSignOutAlt size={18} />
                    </button>
                </div>
            </aside>

            {/* --- MOBILE BOTTOM NAVIGATION --- */}
            {/* Menghilangkan tombol Profile Toggle agar navigasi lebih bersih di Mobile */}
            <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] bg-white/95 backdrop-blur-2xl border border-white/60 p-1.5 flex items-center justify-between z-[100] shadow-[0_15px_35px_rgba(0,0,0,0.12)] rounded-2xl">

                {/* Menu (Sekarang memenuhi area kiri ke tengah) */}
                <div className="flex flex-1 items-center justify-start gap-1 overflow-x-auto no-scrollbar pl-2">
                    {mainMenuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`relative p-3 rounded-xl transition-all duration-300 flex-shrink-0 ${activeSection === item.id ? 'bg-gray-50 scale-105 opacity-100' : 'opacity-40'}`}
                        >
                            <div className={`${item.color}`}>
                                <item.icon size={18} />
                            </div>
                        </button>
                    ))}
                </div>

                <div className="w-[1px] h-6 bg-gray-200 mx-2 flex-shrink-0" />

                {/* Logout (Tetap di Kanan) */}
                <button
                    onClick={handleLogout}
                    className="p-3 text-rose-400 flex-shrink-0 active:scale-90"
                >
                    <FaSignOutAlt size={19} />
                </button>
            </nav>
        </>
    );
};

export default Sidebar;
