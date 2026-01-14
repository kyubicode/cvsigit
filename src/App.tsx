import React, { useState, useCallback } from 'react';
import { data } from './data/cvData';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import WorksSection from './components/WorksSection';
import ContactSection from './components/ContactSection';
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(true);

    const toggleProfile = () => {
        setIsProfileVisible(prev => !prev);
    };

    const handleSectionChange = useCallback((newSection: string) => {
        if (newSection === activeSection) return;

        setIsTransitioning(true);
        // Timeout disesuaikan agar sinkron dengan animasi CSS Tailwind
        const timeout = setTimeout(() => {
            setActiveSection(newSection);
            setIsTransitioning(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [activeSection]);

    const renderSection = () => {
        const sharedProps = { data, isProfileVisible };
        switch (activeSection) {
            case 'about': return <AboutSection {...sharedProps} />;
            case 'experience': return <ExperienceSection {...sharedProps} />;
            case 'education': return <EducationSection {...sharedProps} />;
            case 'skills': return <SkillsSection {...sharedProps}/>;
            case 'works': return <WorksSection {...sharedProps} />;
            case 'contact': return <ContactSection {...sharedProps} />;
            default: return <AboutSection {...sharedProps} />;
        }
    };

    // Koreksi Grid Template: Menggunakan min-content untuk Sidebar agar pas 80px
    const gridTemplate = isProfileVisible
        ? 'md:grid-cols-[80px_320px_1fr]'
        : 'md:grid-cols-[80px_0px_1fr]';

    return (
        <div className={`min-h-screen bg-[#F8FAFC] font-sans flex flex-col md:h-screen md:grid ${gridTemplate}
                        overflow-x-hidden transition-all duration-500 ease-in-out`}>

            {/* 1. Sidebar (Fixed Left) */}
            <div className="hidden md:block z-[60]">
                <Sidebar
                    activeSection={activeSection}
                    setActiveSection={handleSectionChange}
                    isProfileVisible={isProfileVisible}
                    toggleProfile={toggleProfile}
                />
            </div>

            {/* 2. Profile Card Section */}
            <div
                className={`hidden md:block bg-white z-40 md:h-screen transition-all duration-500 ease-in-out border-r border-gray-100
                           ${isProfileVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                style={{ width: isProfileVisible ? '320px' : '0px' }}
            >
                <div className="w-[320px] h-full">
                    <ProfileCard data={data} />
                </div>
            </div>

            {/* 3. Main Content Area */}
            <main
                className="relative flex flex-col min-w-0 bg-[#F8FAFC] md:h-screen overflow-y-auto custom-scroll"
            >
                {/* Dekorasi Background Halus */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-teal-50/50 to-transparent -z-0 pointer-events-none" />

                <div
                    className={`relative z-10 p-6 md:p-12 lg:p-16 pb-32 md:pb-16 max-w-7xl mx-auto w-full
                                transition-all duration-500 ease-in-out
                                ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                >
                    {renderSection()}
                </div>

                {/* Footer Sederhana (Opsional) */}
                <footer className="mt-auto py-8 text-center text-gray-400 text-xs border-t border-gray-100 bg-white/50 backdrop-blur-sm">
                    © 2024 {data.name}. Built with TypeScript React & Tailwind.
                </footer>
            </main>

            {/* 4. Mobile Navigation (Hanya muncul di HP) */}
            <div className="md:hidden">
                <Sidebar
                    activeSection={activeSection}
                    setActiveSection={handleSectionChange}
                    isProfileVisible={true}
                    toggleProfile={() => {}}
                />
            </div>
        </div>
    );
};

export default App;
