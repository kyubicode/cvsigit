// src/data/cvData.ts
// Menggunakan namespace import untuk kompatibilitas yang lebih luas
import * as DataTypes from './types.ts';


export const data: DataTypes.CvData = {
  // HEADER
 foto: "images/ss.jpg",
  name: "Sigit Santoso",
  // ...
export const data: DataTypes.CvData = {
  // HEADER
  foto: "ss.jpg",
  name: "Sigit Santoso",
  title: "Web Developer | Full Stack",
  summary: `Full Stack Developer profesional dengan keahlian dalam mengelola siklus hidup pengembangan perangkat lunak (SDLC) secara komprehensif.
  Memiliki kemampuan adaptasi yang tinggi serta logika pemrograman yang kuat di berbagai teknologi,
  memungkinkan saya untuk menghadirkan solusi digital yang inovatif baik pada platform Web maupun Mobile.
  Berkomitmen untuk membangun sistem yang skalabel, stabil, dan selaras dengan tujuan strategis serta kebutuhan bisnis yang dinamis.`,
  location:"Jakarta Selatan, Indonesia",
  contact: {
    email: "sigitxlsantoso@gmail.com",
    phone: "+62 857-7308-5601",
    linkedin: "www.linkedin.com/in/sigit-santoso-165a7529b/",
    github: "github.com/kyubicode",
  },

  // SKILLS
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML & CSS", level: 95 },
        { name: "Python", level: 65 },
        { name: "C++", level: 65 },
        { name: "Java", level: 65 },
      ],
    },
    {
      category: "Backend Frameworks & Technologies",
      items: [
        { name: "Laravel", level: 95 },
        { name: "PHP Native", level: 95 },
        { name: "Codeigniter", level: 85 },
      ],
    },
    {
      category: "Frontend Frameworks & Libraries",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Redux / Redux Toolkit", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Mobile Application Development",
      items: [
        { name: "React Native", level: 75 },
        { name: "Kotlin (Android Native)", level: 75 },
      ],
    },
    {
      category: "Content Management Systems (CMS)",
      items: [
        { name: "WordPress", level: 90 },
        { name: "Plugin & Theme Development", level: 80 },
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
        { name: "Custom Model Training Tools", level: 60 },
        { name: "Data Preprocessing", level: 60 },
        { name: "Python Libraries (TensorFlow, PyTorch, Pandas)", level: 70 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", level: 98 },
        { name: "SQLite", level: 98 },
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Vite", level: 85 },
        { name: "Docker", level: 50 },
      ],
    },
    {
  category: "Soft Skills & Professional Attributes",
  items: [
      { name: "Fast Learner & Adaptability", "level": 100 },
      { name: "Cross-Platform Programming Logic", "level": 95 },
      { name: "Problem Solving", "level": 90 },
    ],
  },
  ],

  // EXPERIENCE
  experiences: [
    {
      company: "RED Tech",
      position: "Junior Web Developer",
      duration: "Agustus 2017 – Agustus 2019",
      achievements: [
        "Mengembangkan antarmuka pengguna yang responsif untuk lima proyek klien menggunakan HTML, CSS, dan JavaScript.",
        "Berpartisipasi aktif dalam proses code review serta mengimplementasikan standar penulisan kode berbasis ESLint.",
      ],
    },
    {
      company: "Freelance",
      position: "Freelance Web Developer",
      duration: "2024 – Present",
      achievements: [
        "Merancang dan mengembangkan aplikasi web kustom yang responsif sesuai dengan kebutuhan spesifik klien.",
        "Mengimplementasikan solusi digital modern untuk meningkatkan efisiensi operasional bisnis klien.",
        "Menjamin kualitas performa dan keamanan website melalui pengujian rutin sebelum tahap publikasi."
      ]
    },
  ],

  // PROJECTS
  projects: [
    {
      title: "E-commerce LOGO JEANS",
      techStack: ["React.js", "Laravel", "MySQL"],
      liveLink: "https://logojeans.com/",
      githubLink: "",
      description:
        "Membangun platform e-commerce full-stack yang responsif dengan integrasi RESTful API. Mengoptimalkan performa sisi klien menggunakan React dan memastikan skalabilitas manajemen data di sisi server dengan Laravel.",
    },
    {
      title: "Kino Corporate Profile & Product Catalog",
      techStack: ["WordPress", "CMS", "MySQL", "PHP"],
      liveLink: "https://kino.co.id/id/",
      githubLink: "",
      description:
        "Mengembangkan situs profil perusahaan dan katalog produk digital yang dinamis. Fokus pada kustomisasi tema dan manajemen konten (CMS) untuk memudahkan pembaruan data produk secara real-time.",
    },
    {
      title: "AI-Powered Mobile Document Scanner",
      techStack: ["Kotlin", "ML Kit", "Machine Learning", "SQLite"],
      liveLink: "",
      githubLink: "https://github.com/kyubicode",
      description:
        "Mengembangkan aplikasi Android untuk pemindaian dokumen cerdas yang mengintegrasikan Google ML Kit. Mengimplementasikan algoritma deteksi objek untuk otomatisasi cropping dan peningkatan kualitas visual dokumen.",
    },
    {
      title: "Desktop Payroll & Attendance System",
      techStack: ["Electron JS", "Node.js", "SQLite"],
      liveLink: "",
      githubLink: "",
      description:
        "Merancang aplikasi desktop lintas platform untuk manajemen absensi dan penggajian karyawan. Menggunakan arsitektur modular dan penyimpanan data lokal (standalone) untuk menjamin keamanan dan integritas data sensitif perusahaan.",
    },
  ],
  // EDUCATION
  education: [
    {
      institution: "Bina Sarana Informatika (BSI)",
      degree: "Ahli Madya (A.Md.Kom)",
      fieldOfStudy: "Manajemen Informatika",
      startDate: "September - 2011",
      endDate: "September - 2014",
      details: [
        "Lulus dengan Indeks Prestasi Kumulatif (IPK) 2.85.",
        "Tugas Akhir: Perancangan Sistem Penjualan Online Berbasis Web (E-Commerce).",
      ],
    },
    {
      institution: "Lembaga Pendidikan Indonesia Amerika (LPIA)",
      degree: "Pendidikan non formal",
      fieldOfStudy: "Design Grapich & Bahasa Inggris",
      startDate: "Maret - 2012",
      endDate: "September - 2012",
      details: [
        "Selesai dengan sertifikat Design Grpich & Bahasa Inggris",
      ],
    },
  ],
};
