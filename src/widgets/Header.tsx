import React from 'react';

interface HeaderProps {
  isMore: boolean;
  toggleMore: () => void;
};

export const Header: React.FC<HeaderProps> = ({ isMore, toggleMore }) => {
  const [isDelay, setIsDelay] = React.useState(false);
  const [isHamberger, setIsHamberger] = React.useState(true);
  const [isHeaderBackground, setIsHeaderBackground] = React.useState(true);

  React.useEffect(() => {
    if (!isMore) {
      setIsDelay(false);
      setTimeout(() => {
        setIsHamberger(true);
      }, 300);
    } else {
      setIsHamberger(false);
      setTimeout(() => {
        setIsDelay(true);
      }, 300);
    }
  }, [isMore]);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsHeaderBackground(false);
      } else {
        setIsHeaderBackground(true);
      }
    });
  }, [window.scrollY]);
  return (
    <header
      className={`w-screen flex items-center justify-between fixed top-0 left-0 z-30 text-white p-4 transition-all ${
        isHeaderBackground ? '' : ''
      }`}
    >
      <p className="text-lg">아파트 커뮤니티 예약 시스템</p>
      <button
        className="relative flex flex-col justify-center items-center gap-1.5 bg-white rounded-full h-10 w-10"
        onClick={toggleMore}
      >
        <div
          className={` bg-main-black h-0.5 min-w-3 rounded-lg ${
            isMore ? 'top' : 'top-rotate-reverse'
          } ${isDelay ? 'top-rotate' : ''} ${isHamberger ? 'top-origin' : ''}`}
        ></div>

        <div
          className={`bg-main-black h-0.5 w-3 rounded-lg ${
            isMore ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>

        <div
          className={`bg-main-black h-0.5 w-3 rounded-lg ${
            isMore ? 'bottom' : 'bottom-rotate-reverse'
          } ${isDelay ? 'bottom-rotate' : ''} ${
            isHamberger ? 'bottom-origin' : ''
          }`}
        ></div>
      </button>
    </header>
  );
};
