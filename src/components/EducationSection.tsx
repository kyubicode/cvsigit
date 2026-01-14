import React from 'react';
import * as DataTypes from '../data/types';
import { FaCheck, FaBookOpen } from 'react-icons/fa';

interface EducationSectionProps {
    data: DataTypes.CvData;
}

const TimelineCard: React.FC<{
    children: React.ReactNode;
    index: number;
}> = ({ children, index }) => {
    const formattedIndex = (index + 1).toString().padStart(2, '0');

    return (
        <div className="flex group relative mb-6 last:mb-0"> {/* Dikurangi dari mb-8 ke mb-6 */}
            {/* 1. Penanda Nomor & Garis (Sidebar Timeline) */}
            <div className="flex flex-col items-center mr-4 sm:mr-8">
                {/* Lingkaran Nomor */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl
                                bg-teal-700 text-white font-black text-lg sm:text-xl
                                shadow-lg shadow-teal-900/20 z-20 transition-transform
                                duration-500 group-hover:rotate-[360deg]">
                    {formattedIndex}
                </div>
                {/* Garis Vertikal penghubung */}
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

const EducationSection: React.FC<EducationSectionProps> = ({ data }) => {
    return (
        /* PERBAIKAN: py-12/16 dikurangi menjadi pt-2 pb-12 */
        <section id="education" className="pt-2 pb-12 sm:pt-4 sm:pb-16">

            {/* Header Section: mb-12 dikurangi menjadi mb-8 */}
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl shadow-inner border border-teal-100">
                    <FaBookOpen size={20} /> {/* Ukuran ikon sedikit diperkecil agar proporsional */}
                </div>
                <div>
                    <h2 className="text-[10px] uppercase font-bold text-teal-600 tracking-[0.2em] mb-0.5">Learning Path</h2>
                    <h3 className="text-2xl sm:text-4xl font-black text-gray-900">
                        My <span className="text-teal-600 text-shadow-sm">Education</span>
                    </h3>
                </div>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative">
                {data.education.map((edu, idx) => (
                    <TimelineCard key={idx} index={idx}>
                        {/* Header Card: mb-6 dikurangi menjadi mb-4 */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                            <span className="inline-block w-fit px-3 py-1 rounded-lg bg-teal-50
                                           text-teal-700 text-[9px] sm:text-[10px] font-black uppercase tracking-widest shadow-sm">
                                {edu.startDate} — {edu.endDate}
                            </span>
                            <div className="h-px flex-grow bg-gray-50 hidden sm:block mx-4"></div>
                            <span className="text-[10px] font-bold text-gray-400 italic">Academic Record</span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-black text-gray-800 leading-tight mb-1">
                            {edu.institution}
                        </h4>

                        <div className="flex items-center gap-2 text-teal-600 font-bold text-xs sm:text-sm mb-4">
                            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></span>
                            {edu.degree} in {edu.fieldOfStudy}
                        </div>

                        {/* List Details: pt-6 dikurangi menjadi pt-4 */}
                        {edu.details && (
                            <div className="grid grid-cols-1 gap-2 border-t border-gray-50 pt-4">
                                {edu.details.map((detail, i) => (
                                    <div key={i} className="flex items-start gap-2.5 group/item">
                                        <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-teal-50
                                                      text-teal-500 flex items-center justify-center
                                                      group-hover/item:bg-teal-500 group-hover/item:text-white transition-colors">
                                            <FaCheck size={8} />
                                        </div>
                                        <p className="text-xs text-gray-600 leading-snug group-hover/item:text-gray-900 transition-colors font-medium">
                                            {detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </TimelineCard>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
