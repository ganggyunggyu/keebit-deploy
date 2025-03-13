import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css'
import { Home } from './pages/Home';
import { More } from './widgets/More';
import { Header } from './widgets/Header';
import { FirstLoading } from './components/FirstLoading';
import { useSheetStore } from './store/useSheetStore';
import { GolfZoneListSheet } from './components/GolfZoneListSheet';
import { useLocation } from 'react-router';
import { getItem, setListItem } from './lib/localStorage';
import { useGolfStore } from './store/useGolfStore';
import {
  GOLF_REPAIR_TABLE,
  GOLF_RESERVATION_TABLE,
} from './constants/GOLF_TABLE';
import { getGolfReservationTable } from './store/atoms';
import GolfSection from "./components/GolfSection";
import Community from "./components/Community";
import MyInfo from "./components/MyInfo";
import MyReservation from "./components/MyReservation";
import BottomNav from "./widgets/BottomNav";

const App: React.FC = () => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const completeZone = useGolfStore((state) => state.completeZone);
  const location = useLocation();

  const toggleMore = (): void => {
    setIsMore(!isMore);
  };

  const isGolfZoneListOpen = useSheetStore((state) => state.isGolfZoneListOpen);

  useEffect(() => {
    const golfReservationTable = getGolfReservationTable();
    const isFirst = getItem('golfReservationTable') === null;
    setIsAuth(getItem('aptName') !== null);

    if (isFirst) {
      setListItem('golfReservationTable', GOLF_RESERVATION_TABLE);
      setListItem('golfRepairTable', GOLF_REPAIR_TABLE);
    }
  }, [location.pathname]);

  useEffect(() => {
    console.log(completeZone);
  }, [completeZone]);

  return (
    <>
      <FirstLoading />
      <Header isMore={isMore} toggleMore={toggleMore} />

      {/* 라우팅 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<GolfSection />} />
        <Route path="/my-reservation" element={<MyReservation />} />
        <Route path="/community" element={<Community />} />
        <Route path="/my-info" element={<MyInfo />} />
      </Routes>

      {/* 푸터 & 하단 네비게이션 */}
      <BottomNav />

      {/* 추가 UI */}
      {isMore && <More />}
      {isGolfZoneListOpen && <GolfZoneListSheet />}
    </>
  );
};

export default App;
