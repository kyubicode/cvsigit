// src/data/types.ts
// Tipe Data untuk setiap item Keahlian
export interface SkillItem {
  name: string;
  level: number; // Persentase (misalnya 1-100) untuk Skill Bar
}

// Tipe Data untuk kelompok Keahlian (misalnya Languages, Frameworks)
export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

// Tipe Data untuk Pengalaman Kerja
export interface Experience {
  company: string;
  position: string;
  duration: string;
  achievements: string[]; // Daftar pencapaian (bullet points)
}

// Tipe Data untuk Proyek Portofolio
export interface Project {
  title: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  description: string;
}

// --- TIPE DATA BARU: PENDIDIKAN ---
export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  details?: string[]; // Daftar mata kuliah atau prestasi (opsional)
}
// ------------------------------------


// Tipe Data utama yang menyatukan semua bagian CV
export interface CvData {
  foto:string;
  name: string;
  title: string;
  summary: string;
  location:string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  skills: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
  // --- INTEGRASI TIPE BARU ---
  education: Education[];
  // ---------------------------
}
