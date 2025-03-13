import { create } from 'zustand';
import { getUserInfo } from '../store/atoms'; // 기존 atoms.js 유지

interface AuthState {
  isLoggedIn: boolean;
  userInfo: {
    userName: string | null;
    aptName: string | null;
    aptDong: string | null;
    aptHo: string | null;
  };
  checkLogin: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: getUserInfo().userName ? true : false,
  userInfo: getUserInfo(),

  checkLogin: () => {
    const userInfo = getUserInfo();
    set({
      isLoggedIn: userInfo.userName ? true : false,
      userInfo,
    });
  },
}));
