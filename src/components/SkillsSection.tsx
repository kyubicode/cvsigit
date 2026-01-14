import React, { useState, useEffect } from 'react';
import * as DataTypes from '../data/types';
import { FaLaptopCode, FaCheck } from 'react-icons/fa';

interface SkillsSectionProps {
    data: DataTypes.CvData;
    isProfileVisible?: boolean;
}

const SkillBar: React.FC<{ skill: DataTypes.SkillItem }> = ({ skill }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth(skill.level);
        }, 300);
        return () => clearTimeout(timer);
    }, [skill.level]);

    return (
        <div className="group/item">
            <div className="flex justify-between mb-1.5"> {/* Dikurangi dari mb-2 ke mb-1.5 */}
                <span className="text-sm font-bold text-gray-700 group-hover/item:text-teal-700 transition-colors">
                    {skill.name}
                </span>
                <span className="text-[10px] font-black text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded-md">
                    {skill.level}%
                </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden border border-gray-50">
                <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(20,184,166,0.4)]"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ data, isProfileVisible = false }) => {
    const dynamicGridClass = isProfileVisible
        ? 'lg:grid-cols-2'
        : 'lg:grid-cols-3';

    return (
        /* PERBAIKAN: Mengurangi py-12 menjadi pt-2 pb-12 */
        <section id="skills" className="pt-2 pb-12 animate-fade-in">

            {/* Header Title: mb-12 dikurangi menjadi mb-8 */}
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl shadow-inner border border-teal-100">
                    <FaLaptopCode size={20} />
                </div>
                <div>
                    <h2 className="text-[10px] uppercase font-bold text-teal-600 tracking-[0.2em] mb-0.5">Capabilities</h2>
                    <h3 className="text-2xl sm:text-4xl font-black text-gray-900">
                        My <span className="text-teal-600">Skills</span>
                    </h3>
                </div>
            </div>

            {/* Grid Kartu Skill: gap-6 tetap, tapi padding internal kartu dikurangi */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${dynamicGridClass} gap-6`}>
                {data.skills.map((group, idx) => (
                    <div
                        key={idx}
                        className="group bg-white p-5 sm:p-7 rounded-3xl border border-gray-100 shadow-sm
                                   hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-500
                                   hover:border-teal-200 hover:-translate-y-1"
                    >
                        {/* Kategori Skill: mb-8 dikurangi menjadi mb-5 */}
                        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-50">
                            <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center shadow-lg shadow-teal-700/20 group-hover:rotate-[360deg] transition-transform duration-700">
                                <FaCheck size={10} />
                            </div>
                            <h4 className="text-md font-black text-gray-800 uppercase tracking-tighter">
                                {group.category}
                            </h4>
                        </div>

                        {/* List Skill Bars: space-y-6 dikurangi menjadi space-y-4 */}
                        <div className="space-y-4">
                            {group.items.map((skill, sIdx) => (
                                <SkillBar key={sIdx} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
