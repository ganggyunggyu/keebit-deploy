import { getItem, getListItem } from '../lib/localStorage';

// ✅ 타입 정의
export const getGolfReservationTable = (): unknown[] => {
  return getListItem('golfReservationTable') || [];
};

export const getGolfRepairTable = (): unknown[] => {
  return getListItem('golfRepairTable') || [];
};

// ✅ `UserInfo` 인터페이스 정의
interface UserInfo {
  userName: string | null;
  aptName: string | null;
  aptDong: string | null;
  aptHo: string | null;
}

export const getUserInfo = (): UserInfo => {
  return {
    userName: getItem('userName'),
    aptName: getItem('aptName'),
    aptDong: getItem('aptDong'),
    aptHo: getItem('aptHo'),
  };
};
