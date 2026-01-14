import React from 'react';
import * as DataTypes from '../data/types';
import { FaGithub, FaExternalLinkAlt, FaCodeBranch, FaTags } from 'react-icons/fa';

interface WorksSectionProps {
    data: DataTypes.CvData;
    isProfileVisible?: boolean;
}

const WorksSection: React.FC<WorksSectionProps> = ({ data, isProfileVisible = false }) => {
    const dynamicGridClass = isProfileVisible
        ? 'xl:grid-cols-2'
        : 'xl:grid-cols-3';

    return (
        <section id="works" className="pt-2 pb-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl shadow-inner border border-teal-100">
                    <FaCodeBranch size={20} />
                </div>
                <div>
                    <h2 className="text-[10px] uppercase font-bold text-teal-600 tracking-[0.2em] mb-0.5">Portfolio</h2>
                    <h3 className="text-2xl sm:text-4xl font-black text-gray-900">
                        My <span className="text-teal-600">Works</span>
                    </h3>
                </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${dynamicGridClass} gap-6 transition-all duration-500`}>
                {data.projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm
                                   hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500
                                   flex flex-col h-full hover:-translate-y-2 hover:border-teal-200"
                    >
                        {/* Visual Thumbnail Area */}
                        <div className="h-40 w-full relative overflow-hidden bg-gray-100 shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-teal-600 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                                <div className="w-16 h-16 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <span className="text-2xl font-black text-white">{project.title.substring(0, 2).toUpperCase()}</span>
                                </div>
                            </div>

                            {/* Action Overlay */}
                            <div className="absolute inset-0 bg-teal-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">

                                {/* LOGIKA DISABLE/ENABLE GITHUB: Hanya muncul jika link tersedia */}
                                {project.githubLink && project.githubLink.trim() !== "" && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 bg-white text-teal-700 rounded-xl hover:bg-teal-50 hover:scale-110 transition-all shadow-xl"
                                        title="View Source Code"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                )}

                                {project.liveLink && project.liveLink !== "N/A (Backend)" && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3 bg-teal-600 text-white rounded-xl hover:bg-teal-500 hover:scale-110 transition-all shadow-xl"
                                        title="View Live Demo"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                                <span className="text-[9px] font-black text-teal-600 uppercase tracking-widest">Featured Project</span>
                            </div>

                            <h4 className="text-lg font-black text-gray-800 mb-2 group-hover:text-teal-700 transition-colors leading-tight">
                                {project.title}
                            </h4>

                            <p className="text-xs text-gray-500 leading-relaxed mb-4 font-medium whitespace-pre-line">
                                {project.description}
                            </p>

                            {/* Tech Stack Footer */}
                            <div className="mt-auto pt-4 border-t border-gray-50">
                                <div className="flex items-center gap-2 mb-2">
                                    <FaTags size={9} className="text-teal-400" />
                                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.techStack.map((tech, tIdx) => (
                                        tech && (
                                            <span
                                                key={tIdx}
                                                className="text-[9px] font-bold bg-gray-50 text-gray-600 px-2 py-0.5 rounded-md
                                                         group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorksSection;
