import { NavLink } from 'react-router-dom';
import {useEffect, useState} from "react";
import useAuth from "../store/useAuth.ts";
import IfLoginFalse from "../shared/components/IfLoginFalse";

const BottomNav = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const isLoggedIn = useAuth();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  // useEffect(() => {
  //   const user = getUserInfo();
  //   if (user && user.userName) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);s

  const handleMyReservationClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isLoggedIn) {
      event.preventDefault(); // 기본 동작 방지
      setShowLoginModal(true); // 로그인 모달 표시
    }
  };

  return (
    <>
      <nav className="fixed bottom-0 w-full bg-main-black text-white flex justify-around border-t border-gray-700">
        <NavLink to="/" className="flex flex-col items-center py-3 min-w-[60px] ">
          <span>🏠</span>
          <span className="text-sm">홈</span>
        </NavLink>
        <NavLink to="/reservation" className="flex flex-col items-center py-3 gap-1 min-w-[60px]">
          <span>📅</span>
          <span className="text-sm">예약</span>
        </NavLink>
        <NavLink to="/my-reservation"
                 className="flex flex-col items-center py-3 gap-1 min-w-[60px]"
                 onClick={handleMyReservationClick}>
          <span>✅</span>
          <span className="text-sm">예약확인</span>
        </NavLink>
        <NavLink to="/community" className="flex flex-col items-center py-3 gap-1 min-w-[60px]">
          <span>💬</span>
          <span className="text-sm">커뮤니티</span>
        </NavLink>
        <NavLink to="/my-info"
                 className="flex flex-col items-center py-3 gap-1 min-w-[60px]"
                 onClick={handleMyReservationClick}>
          <span>👤</span>
          <span className="text-sm">마이페이지</span>
        </NavLink>
      </nav>

      <IfLoginFalse isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
};

export default BottomNav;
