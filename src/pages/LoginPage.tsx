import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, isAuthenticated } from '../auth/auth';
import LoadingScreen from '../components/LoadingScreen';

// --- Impor Ikon dari React Icons (Tambahkan FaEye dan FaEyeSlash) ---
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // --- STATE BARU UNTUK KONTROL VISIBILITAS TOKEN/PASSWORD ---
    const [showToken, setShowToken] = useState(false);
    // -------------------------------------------------------------

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isAuthenticated()) {
                navigate('/cv', { replace: true });
            } else {
                setLoading(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [navigate]);

    const submit = () => {
        setLoading(true);
        setError('');

        setTimeout(() => {
            const success = login(token);

            if (!success) {
                setError('Kode tidak valid. Silakan coba lagi.');
                setLoading(false);
                return;
            }

            navigate('/cv', { replace: true });
        }, 400);
    };

    if (loading) return <LoadingScreen />;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 w-full max-w-sm rounded-xl shadow-lg border border-gray-200">

                {/* 3. Ikon Kunci (Menggunakan FaLock) */}
                <div className="flex justify-center mb-4">
                    <FaLock className="w-10 h-10 text-teal-600" size={40} />
                    {/* ^ RED 600 -> TEAL 600 */}
                </div>

                {/* 4. Judul */}
                <h1 className="font-bold text-2xl text-center text-gray-800 mb-2">
                    Masuk Ke CV
                </h1>
                <p className="text-center text-sm text-gray-500 mb-8">
                    Verifikasi Kode untuk Melanjutkan
                </p>

                {/* Area Input dengan Ikon dan Tombol Toggle */}
                <div className="relative mb-4">
                    <input
                        className={`border w-full p-3 pl-10 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 transition duration-150 ${
                            // ^ focus:ring-RED 500 -> focus:ring-TEAL 500
                            error ? 'border-teal-500' : 'border-gray-300'
                            // ^ border-RED 500 -> border-TEAL 500
                        }`}
                        placeholder="Kode Akses"
                        // --- UBAH TIPE SECARA DINAMIS ---
                        type={showToken ? 'text' : 'password'}
                        // --------------------------------
                        value={token}
                        onChange={(e) => {
                            setToken(e.target.value);
                            setError('');
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') submit();
                        }}
                    />

                    {/* Ikon di dalam input (FaLock) */}
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" size={16} />

                    {/* --- TOMBOL SHOW/HIDE PASSWORD (TOKEN) --- */}
                    <button
                        type="button"
                        onClick={() => setShowToken(prev => !prev)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-teal-600 transition duration-150 focus:outline-none"
                        // ^ hover:text-RED 600 -> hover:text-TEAL 600
                        aria-label={showToken ? "Sembunyikan Kode" : "Tampilkan Kode"}
                    >
                        {/* Ikon dinamis berdasarkan state showToken */}
                        {showToken ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    </button>
                    {/* ---------------------------------------------------- */}
                </div>

                {/* Pesan Error */}
                {error && (
                    <p className="text-teal-600 text-sm text-center mb-4">{error}</p>
                    // ^ text-RED 600 -> text-TEAL 600
                )}


                <button
                    className="bg-teal-600 text-white font-medium w-full p-3 rounded-lg hover:bg-teal-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    // ^ bg-RED 600 -> bg-TEAL 600, hover:bg-RED 700 -> hover:bg-TEAL 700
                    onClick={submit}
                    disabled={!token || loading}
                >
                    {loading ? 'Memverifikasi...' : 'Masuk'}
                </button>

                {/* Info Keamanan */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    Akses Terbatas.
                </p>

            </div>
        </div>
    );
};

export default LoginPage;
