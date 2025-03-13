import { useState, useEffect } from 'react';
import { getUserInfo } from '../store/atoms'; // 유저 정보 가져오는 함수

const NoticeSection = ({ openBottomSheet }: { openBottomSheet: (type: string) => void }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const user = getUserInfo();
    if (user && user.userName) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <section className="mb-7 w-screen">
      <h1 className="logo-font text-main-orange text-center font-semibold text-3xl p-3">KEEBIT</h1>
      <p className="font-light text-md text-center px-6 text-main-white">
        우리의 서비스를 통해 아파트 커뮤니티의 모든 예약을 쉽게 관리하세요.
      </p>

      {/* 예약 버튼 */}
      <div className="w-screen flex flex-col justify-center items-center gap-3.5 mt-5">
        {/* 아파트 연동 버튼 */}
        <button className="p-3.5 w-11/12 text-main-orange border-2 rounded-lg" onClick={() => openBottomSheet('login')}>
          아파트 연동
        </button>

        {/* 로그인한 경우에만 AI 매칭 예약 버튼 표시 */}
        {isLoggedIn && (
          <button className="p-3.5 w-11/12 text-main-orange border-2 rounded-lg">
            AI 매칭 예약
          </button>
        )}
        <div className="px-20">
          <img
            src="https://unicorn-images.b-cdn.net/62c76b76-fc3b-46fc-99a5-35151ff43bf6?optimizer=gif"
            alt="배경이미지1"
          />
        </div>
      </div>

      {/* 공지사항 */}
      <div className="mt-10 border-2 m-4 p-7 rounded-lg bg-main-black border-main-orange">
        <h2 className="text-lg font-semibold text-main-orange">공지사항</h2>
        <ul className="font-light text-main-white space-y-0.5 mt-3 list-disc list-inside">
          <li>🏠 커뮤니티 시설 이용 안내</li>
          <li>⏰ 운영 시간 및 예약 필수 안내</li>
          <li>🚫 외부인 출입 및 무단 이용 금지 안내</li>
        </ul>
        {/*<button className="mt-3 p-2 w-11/12 text-main-orange border-2 rounded-sm">*/}
        {/*  더보기*/}
        {/*</button>*/}
      </div>
    </section>
  );
};

export default NoticeSection;
