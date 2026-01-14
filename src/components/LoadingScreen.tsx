const LoadingScreen = () => {
    return (
        // 1. Latar Belakang: Putih Murni atau sedikit transparan
        <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-50">
            <div className="flex flex-col items-center gap-4">

                {/* 2. Spinner Teal Modern */}
                <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
                {/* ^ border-RED 600 -> border-TEAL 600 */}

                {/* 3. Teks Loading Teal/Abu-abu */}
                <p className="text-base font-medium text-gray-700 tracking-wider">
                    Loading...
                </p>

                {/* Opsional: Indikator/Pesan Tambahan */}
                <p className="text-xs text-teal-500 mt-1 animate-pulse">
                {/* ^ text-RED 500 -> text-TEAL 500 */}
                    Mohon Tunggu Sebentar
                </p>

            </div>
        </div>
    );
};

export default LoadingScreen;
