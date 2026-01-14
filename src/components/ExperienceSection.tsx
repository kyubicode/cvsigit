import React from 'react';
import * as DataTypes from '../data/types';
import { FaBriefcase, FaCheck } from 'react-icons/fa';

interface ExperienceSectionProps {
    data: DataTypes.CvData;
}

const TimelineCard: React.FC<{
    children: React.ReactNode;
    index: number;
}> = ({ children, index }) => {
    const formattedIndex = (index + 1).toString().padStart(2, '0');

    return (
        <div className="flex group relative mb-6 last:mb-0"> {/* Dikurangi dari mb-8 ke mb-6 */}
            {/* 1. Sidebar Timeline */}
            <div className="flex flex-col items-center mr-4 sm:mr-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl
                                bg-teal-700 text-white font-black text-lg sm:text-xl
                                shadow-lg shadow-teal-900/20 z-20 transition-transform
                                duration-500 group-hover:rotate-[360deg]">
                    {formattedIndex}
                </div>
                <div className="w-0.5 h-full bg-gradient-to-b from-teal-500/50 to-transparent -mt-2 z-10"></div>
            </div>

            {/* 2. Konten Card */}
            <div className="flex-grow pb-6"> {/* Dikurangi dari pb-10 ke pb-6 */}
                <div className="bg-white p-5 sm:p-7 rounded-2xl border border-gray-100 shadow-sm
                                hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300
                                group-hover:border-teal-200 group-hover:-translate-y-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
    return (
        /* PERBAIKAN: pt-2 sm:pt-4 untuk merapatkan jarak dengan section di atasnya */
        <section id="experience" className="pt-2 pb-12 sm:pt-4 sm:pb-16">

            {/* Header Section: mb-8 agar seragam dengan Education */}
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl shadow-inner border border-teal-100">
                    <FaBriefcase size={20} />
                </div>
                <div>
                    <h2 className="text-[10px] uppercase font-bold text-teal-600 tracking-[0.2em] mb-0.5">Career Path</h2>
                    <h3 className="text-2xl sm:text-4xl font-black text-gray-900">
                        Work <span className="text-teal-600">Experience</span>
                    </h3>
                </div>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative">
                {data.experiences.map((exp, idx) => (
                    <TimelineCard key={idx} index={idx}>
                        {/* Header Card: mb-4 untuk tampilan lebih ringkas */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                            <span className="inline-block w-fit px-3 py-1 rounded-lg bg-teal-50
                                           text-teal-700 text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-sm">
                                {exp.duration}
                            </span>
                            <div className="h-px flex-grow bg-gray-50 hidden sm:block mx-4"></div>
                            <span className="text-[10px] font-bold text-gray-400 italic">Professional Record</span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-black text-gray-800 leading-tight mb-1">
                            {exp.position}
                        </h4>

                        <div className="flex items-center gap-2 text-teal-600 font-bold text-xs sm:text-sm mb-4">
                            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></span>
                            at {exp.company}
                        </div>

                        {/* List Achievements: gap-2 dan pt-4 agar lebih rapat */}
                        <div className="grid grid-cols-1 gap-2 border-t border-gray-50 pt-4">
                            {exp.achievements.map((ach, i) => (
                                <div key={i} className="flex items-start gap-2.5 group/item">
                                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-teal-50
                                                  text-teal-500 flex items-center justify-center
                                                  group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors">
                                        <FaCheck size={8} />
                                    </div>
                                    <p className="text-xs text-gray-600 leading-snug group-hover/item:text-gray-900 transition-colors font-medium">
                                        {ach}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </TimelineCard>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
