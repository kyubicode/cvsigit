/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // Pastikan semua warna kustom yang ditambahkan di masa depan
      // menggunakan format yang kompatibel (HEX atau RGB/A)
    },
  },

  // === PERBAIKAN PENTING UNTUK HTML2PDF ===
  // Gunakan prefixer CSS yang lebih konservatif atau atur mode warna.
  // Cara paling sederhana adalah menambahkan properti ini (jika versi Tailwind mendukungnya):
  // Konfigurasi ini biasanya ada di file postcss.config.js, tapi bisa jadi
  // ada konfigurasi yang harus di override.
  // Jika ini adalah proyek Tailwind CSS v3.2+, pastikan tidak ada variabel
  // CSS yang tidak perlu tergenerate.
  // Coba jalankan ulang server dev atau build setelah ini:

  // Jika masalah tetap ada, kita harus memastikan html2pdf.js mengabaikan
  // elemen yang menggunakan oklch.

  // SOLUSI SEMENTARA YANG SERING BERHASIL: Ganti seluruh skema warna Tailwind ke RGB
  corePlugins: {
    // Dengan tidak menentukan color, Tailwind akan menggunakan default RGB
    // yang lebih kompatibel daripada sintaks modern.
  },

  // PENTING: Jika Anda menggunakan versi Tailwind yang sangat baru (misalnya versi 3.4+),
  // Anda mungkin perlu menonaktifkan fitur warna baru secara eksplisit jika tersedia.

}
