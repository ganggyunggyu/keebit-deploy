
import React from 'react';
import { useNavigate } from 'react-router';
import { removeItem } from '../lib/localStorage';
import { UserProfileIcon } from '../shared/icons/UserProfileIcon';
import { RightButtonIcon } from '../shared/icons/RightButtonIcon';
import { getUserInfo } from '../store/atoms';
import { useAuthStore } from '../store/useAuthStore';

export const MyInfo: React.FC = () => {
  const userInfo = getUserInfo();
  const navigate = useNavigate();
  const { checkLogin } = useAuthStore();

  const submitLogout = () => {
    removeItem('userName');
    removeItem('aptName');
    removeItem('aptDong');
    removeItem('aptHo');

    checkLogin();
    navigate('/');
  };

  const redirectMyReservation = () => {
    navigate('/my-reservation');
  };

  return (
    <main className="flex flex-col">
      <section className="mt-10 flex flex-col items-center gap-5">
        <UserProfileIcon />
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-xl text-neutral-200 font-bold">{userInfo.userName}</p>
          <p className="text-sm text-neutral-400">
            {userInfo.aptName} {userInfo.aptDong}동 {userInfo.aptHo}호
          </p>
        </div>
      </section>
      <section className="pt-7 pb-10">
        <figure onClick={redirectMyReservation} className="border-b border-main-orange text-neutral-200 flex items-center justify-between pl-3 pr-4 py-5">
          <button>내 예약</button>
          <RightButtonIcon />
        </figure>
        <figure className="border-b border-main-orange text-neutral-200 flex items-center justify-between pl-3 pr-4 py-5">
          <button onClick={submitLogout}>내 정보</button>
          <RightButtonIcon />
        </figure>
        <figure className="border-b border-main-orange text-neutral-200 flex items-center justify-between pl-3 pr-4 py-5">
          <button onClick={submitLogout}>로그아웃</button>
          <RightButtonIcon />
        </figure>
      </section>
    </main>
  );
};
export default MyInfo;
