
import { useState, useEffect } from 'react';
import { useSheetStore } from '../store/useSheetStore';
import BottomSheet from '../components/BottomSheet';
import { Login } from '../components/Login';
import { MyReservation } from '../components/MyReservation';
import { MyInfo } from '../components/MyInfo';
import { Golf } from '../components/Golf';

const Home = () => {
  const [isSheetOpen, setSheetOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string | null>(null);

  const openBottomSheet = (type: string) => {
    setSheetOpen(true);
    setContent(type);
  };

  const isGolfZoneListOpen = useSheetStore((state) => state.isGolfZoneListOpen);
  const toggleGolfZoneList = useSheetStore((state) => state.toggleGolfZoneList);

  const [opacity, setOpacity] = useState<string>('opacity-0');

  useEffect(() => {
    setTimeout(() => {
      setOpacity('opacity-100');
    }, 3200);
  }, []);

  return (
    <main
      className={`flex flex-col items-center w-screen h-screen pt-35 bg-image transition-all overflow-x-hidden ${opacity} text-white ${
        isGolfZoneListOpen ? 'overflow-hidden' : ''
      }`}
    >
      <div>
        <section className="mb-7">
          <h1 className="logo-font text-main-orange font-semibold text-3xl text-center p-3">
            KEEBIT
          </h1>
          <p className="font-light text-md text-center p-1 px-6 text-main-white">
            우리의 서비스를 통해 아파트 커뮤니티의 모든 예약을 쉽게 관리하세요.
          </p>
        </section>
        <section className="w-screen flex flex-col justify-center items-center gap-3.5">
          <button
            className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg"
            onClick={() => openBottomSheet('login')}
          >
            아파트 연동
          </button>
          <button className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg">
            AI 매칭 예약
          </button>
        </section>
        <div className="p-12">
          <img
            src="https://unicorn-images.b-cdn.net/62c76b76-fc3b-46fc-99a5-35151ff43bf6?optimizer=gif"
            alt="배경이미지1"
          />
        </div>
      </div>
      <div className="mt-10 mb-56">
        <section className="flex flex-col gap-3 text-main-white">
          <p className="text-center">공지사항</p>
          <ul className="text-center font-light">
            <li>커뮤니티 시설 이용 안내</li>
            <li>운영 시간 및 예약 필수 안내</li>
            <li>외부인 출입 및 무단 이용 금지 안내</li>
          </ul>
        </section>
        <section className="mt-13 w-screen flex flex-col justify-center items-center">
          <button className="p-3 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-sm">
            더보기
          </button>
        </section>
      </div>
      <div className="flex flex-col items-center">
        <section className="w-screen flex flex-col justify-center items-center gap-8">
          <h1 className="text-2xl text-main-orange">골프 연습장</h1>
          <button
            className="py-3 px-10 text-center text-sm bg-main-orange border-0 rounded-sm"
            onClick={toggleGolfZoneList}
          >
            예약하기
          </button>
        </section>
        <section className="p-5">
          <img
            src="https://unicorn-images.b-cdn.net/b9cabfed-26a5-4f9c-aeae-0b03dd5a2708?optimizer=gif"
            alt="배경이미지2"
          />
        </section>
        <section className="w-screen flex flex-col items-center gap-3.5 mt-5 mb-28">
          <button
            className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg"
            onClick={() => openBottomSheet('myReservation')}
          >
            예약확인
          </button>
          <button
            className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg"
            onClick={() => openBottomSheet('myInfo')}
          >
            내 정보
          </button>
          <button className="p-3.5 w-11/12 text-main-orange text-center text-main-orange text-sm items-center justify-center border-2 rounded-lg">
            로그아웃
          </button>
        </section>
      </div>
      <div className="flex flex-col items-center">
        <section className="w-screen flex flex-col justify-center items-center gap-3 text-main-white">
          <h1 className="text-3xl font-semibold text-main-orange">FAQ</h1>
          <p>궁금하신 점 있으신가요? 무엇이든 물어보세요.</p>
        </section>
        <section className="w-screen flex flex-col justify-center items-center py-24 p-7">
          <img
            src="https://unicorn-images.b-cdn.net/25e93e5c-0733-4fb7-bc9a-350c13430615?optimizer=gif"
            alt="배경이미지3"
          />
        </section>
        <section className="w-screen flex flex-col items-center gap-8">
          <div className="w-screen flex flex-col border-0 px-14 gap-5">
            <div className="w-screen flex items-center gap-13">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <circle
                    fill="#FED2C5"
                    className="fill-bg-light"
                    cx="20"
                    cy="20"
                    r="20"
                  ></circle>
                  <path
                    fill="#EB512F"
                    className="fill-main"
                    d="M28.686 14.008l-9 9.085-3.6-3.6-1.2 1.2 4.8 4.8L29.97 15.208z"
                  ></path>
                  <path
                    d="M25.086 16.208l-1.2-1.2-5.4 5.4 1.2 1.2 5.4-5.4zM11 20.693l4.8 4.8 1.2-1.2-4.8-4.8-1.2 1.2z"
                    fill="#00396B"
                    className="fill-secondary"
                    fillRule="nonzero"
                  ></path>
                </g>
              </svg>
              <p className="font-semibold text-xs text-main-white">
                어떻게 예약을 하나요?
              </p>
            </div>
            <p className="w-screen flex text-main-orange text-sm gap-1.5">
              질문하기{' '}
              <span className="text-main-orange font-light">&rarr;</span>
            </p>
          </div>
          <button className="p-2.5 w-11/12 text-main-orange text-center text-main-orange text-sm font-semibold items-center justify-center border-2 rounded-sm">
            Visit FAQs
          </button>
        </section>
      </div>
      <footer className="w-screen flex flex-col items-center justify-center">
        <section className="w-screen flex pt-15 py-8 font-light items-start px-4 text-main-white">
          &#9426; 2025 키빗 (주)코드클립
        </section>
        <section className="w-screen flex gap-2 px-5 pb-5">
          <a className="invert brightness-60">
            <img
              src="https://cdn.unicornplatform.com/static/img/icons/social/white/facebook.svg"
              alt="페이스북아이콘"
            />
          </a>
          <a className="invert brightness-60">
            <img
              src="https://cdn.unicornplatform.com/static/img/icons/social/white/x.svg"
              alt="트위터아이콘"
            />
          </a>
          <a className="w-5 h-5 invert brightness-60">
            <img
              src="https://cdn.unicornplatform.com/static/img/icons/social/white/instagram.svg"
              alt="인스타그램아이콘"
            />
          </a>
        </section>
      </footer>

      <BottomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)}>
        {content === 'login' && <Login setSheetOpen={setSheetOpen} />}
        {content === 'reservation' && <Golf />}
        {content === 'myReservation' && <MyReservation />}
        {content === 'myInfo' && <MyInfo />}
      </BottomSheet>
    </main>
  );
};

export { Home };
