import { useState, useEffect } from 'react';
import BottomSheet from '../components/BottomSheet';
import Login from '../components/Login';
import MyReservation from '../components/MyReservation';
import MyInfo from '../components/MyInfo';
import Golf from '../components/Golf';
import NoticeSection from '../components/NoticeSection';
import GolfSection from '../components/GolfSection';
import FAQSection from '../components/FAQSection';
import Footer from '../widgets/Footer';

const Home = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  const [opacity, setOpacity] = useState('opacity-0');

  useEffect(() => {
    setTimeout(() => {
      setOpacity('opacity-100');
    }, 3200);
  }, []);

  const openBottomSheet = (type: string) => {
    setSheetOpen(true);
    setContent(type);
  };

  return (
    <main className={'flex flex-col items-center w-screen h-screen pt-20 bg-image transition-all overflow-x-hidden text-white ${opacity}'}>
      <NoticeSection openBottomSheet={openBottomSheet} />
      {/*<GolfSection />*/}
      {/*<FAQSection />*/}
      <Footer />/

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
