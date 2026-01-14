import React, { useState, useEffect } from 'react';
import * as DataTypes from '../data/types';
import {
    FaEnvelope,
    FaPhoneAlt,
    FaLaptopCode,
    FaDatabase,
    FaCogs,
    FaRocket,
    FaCheckCircle,
    FaBuilding,
    FaGlobe,
    FaUserTie,
    FaLightbulb
} from 'react-icons/fa';

interface AboutSectionProps {
    data: DataTypes.CvData;
    isProfileVisible: boolean;
}

const getIconForCategory = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('language') || lowerCategory.includes('frontend')) return <FaLaptopCode />;
    if (lowerCategory.includes('backend') || lowerCategory.includes('cms')) return <FaDatabase />;
    if (lowerCategory.includes('mobile')) return <FaRocket />;
    return <FaCogs />;
};

const ServiceCard: React.FC<{
    skillGroup: DataTypes.SkillGroup,
    categoryIcon: React.ReactElement,
    index: number
}> = ({ skillGroup, categoryIcon, index }) => {
    return (
        <div
            className="group relative bg-white border border-gray-100 p-5 rounded-3xl shadow-sm
                       transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10
                       hover:-translate-y-2 hover:border-teal-200 flex flex-col h-full"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-teal-50 text-teal-600 group-hover:bg-teal-700 group-hover:text-white transition-all duration-500 shadow-inner shrink-0">
                    {React.cloneElement(categoryIcon, { className: 'text-lg' })}
                </div>
                <h4 className="font-black text-gray-800 text-[10px] uppercase tracking-widest leading-tight group-hover:text-teal-700 transition-colors">
                    {skillGroup.category}
                </h4>
            </div>

            <div className="space-y-2 flex-grow">
                {skillGroup.items.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-center text-gray-500 text-[11px] font-medium">
                        <FaCheckCircle className="text-teal-400 mr-2 flex-shrink-0" size={10} />
                        <span className="truncate">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AboutSection: React.FC<AboutSectionProps> = ({ data, isProfileVisible }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const personalInfo = [
        { icon: <FaGlobe />, label: 'Residence', value: 'Indonesia' },
        { icon: <FaBuilding />, label: 'Location', value: 'Jakarta (Remote)' },
        { icon: <FaEnvelope />, label: 'Email', value: data.contact.email },
        { icon: <FaPhoneAlt />, label: 'Phone', value: data.contact.phone },
    ];

    return (
        /* Padding pt-2 pb-12 sesuai dengan WorksSection */
        <section id="about" className="pt-2 pb-12 animate-fade-in">

            {/* Header: Margin mb-8 & Gap-4 sesuai WorksSection */}
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl shadow-inner border border-teal-100">
                    <FaUserTie  size={20} />
                </div>
                <div>
                    <h2 className="text-[10px] uppercase font-bold text-teal-600 tracking-[0.2em] mb-0.5">Discovery</h2>
                    <h3 className="text-2xl sm:text-4xl font-black text-gray-900">
                        About <span className="text-teal-600">Me.</span>
                    </h3>
                </div>
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

                {/* Bio Card */}
                <div className={`${isProfileVisible ? 'lg:col-span-12' : 'lg:col-span-7 xl:col-span-8'}`}>
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm h-full hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-1.5 h-5 bg-teal-500 rounded-full"></span>
                            <h4 className="text-lg font-black text-gray-800 uppercase tracking-tight">Introduction</h4>
                        </div>
                        <div className="text-gray-500 font-medium leading-relaxed text-sm md:text-base text-justify whitespace-pre-line">
                            {data.summary}
                        </div>
                    </div>
                </div>

                {/* Details Card */}
                {!isProfileVisible && (
                    <div className="lg:col-span-5 xl:col-span-4">
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col justify-center">
                            <div className="space-y-5">
                                {personalInfo.map((info, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:bg-teal-700 group-hover:text-white transition-all duration-500">
                                            {React.cloneElement(info.icon as React.ReactElement, { size: 14 })}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[9px] uppercase font-black text-gray-400 tracking-widest mb-1">{info.label}</p>
                                            <p className="text-xs font-bold text-gray-800 truncate leading-none">{info.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Core Expertise Header & Grid */}
            <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-2.5 bg-teal-50 text-teal-600 rounded-xl shadow-inner border border-teal-100">
                        <FaLightbulb size={16} />
                    </div>
                    <h3 className="text-lg font-black text-gray-800 uppercase tracking-tight">Core Expertise</h3>
                    <div className="h-px flex-1 bg-gray-100"></div>
                </div>

                {/* Grid tetap: 1 (mobile), 2 (md), 4 (2xl) */}
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
                    {data.skills
                        .filter((_, index) => [0, 1, 2, 8].includes(index))
                        .map((skill, index) => (
                            <ServiceCard
                                key={index}
                                skillGroup={skill}
                                categoryIcon={getIconForCategory(skill.category)}
                                index={index}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
