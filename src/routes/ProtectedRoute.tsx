import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isAuthenticated } from '../auth/auth';
import LoadingScreen from '../components/LoadingScreen';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllowed(isAuthenticated());
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  // 🔥 FIX DI SINI
  if (!allowed) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
