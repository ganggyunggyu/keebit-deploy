
import React, { useEffect, useState, ReactNode } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimate(true);
    return () => setIsAnimate(false);
  }, []);

  return (
    <main className="h-screen w-screen fixed left-0 top-0 z-30">
      <section className={`absolute bottom-0 left-0 w-screen overflow-scroll h-fit pb-10 bg-main-black transition-all z-40 ${isOpen && isAnimate ? 'translate-y-0' : 'translate-y-full'}`}>
        <header className="sticky w-full top-0 bg-main-black p-5 flex justify-between z-50">
          <button onClick={onClose}>취소</button>
          <button>다음</button>
        </header>
        {children}
      </section>
      <div className="w-full h-full bg-black opacity-50 z-30 touch-none overflow-hidden" />
    </main>
  );
};

export default BottomSheet;
