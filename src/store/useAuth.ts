import { useAuthStore } from './useAuthStore.ts';
import { useEffect } from 'react';

const useAuth = () => {
  const { isLoggedIn, checkLogin } = useAuthStore();

  useEffect(() => {
    const handleStorageChange = () => {
      checkLogin();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [checkLogin]);

  return isLoggedIn;
};

export default useAuth;
