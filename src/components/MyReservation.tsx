
import React, { useEffect, useState } from 'react';
import { getGolfReservationTable, getUserInfo } from '../store/atoms';
import { getListItem, setListItem } from '../lib/localStorage';

interface Reservation {
  zoneId: number;
  hour: number;
}

export const MyReservation: React.FC = () => {
  const userInfo = getUserInfo();
  const [isCancelModal, setIsCancelModal] = useState<boolean>(false);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);

  const reservations = useGolfStore((state) => state.reservations);
  const setReservations = useGolfStore((state) => state.setReservations);

  const handleCancelClick = (zoneId: number, hour: number) => {
    setSelectedReservation({ zoneId, hour });
    setIsCancelModal(true);
  };

  const handleModalBackgroundClick = () => {
    setIsCancelModal(false);
    setSelectedReservation(null);
  };

  const confirmCancelReservation = () => {
    if (!selectedReservation) return;

    const updatedReservations = reservations.filter(
      (el) => !(el.zoneId === selectedReservation.zoneId && el.hour === selectedReservation.hour)
    );

    setReservations([...updatedReservations]);
    setListItem('golfReservationTable', updatedReservations);

    setIsCancelModal(false);
    setSelectedReservation(null);
  };

  useEffect(() => {
    setReservations([...getGolfReservationTable()]);
  }, []);

  return (
    <main className="w-screen">
      <section className="px-10 pt-30 pb-7 text-center">
        <p className="font-bold text-xl text-main-white">{userInfo.userName}님의 예약</p>
        <p className="font-sm text-neutral-500">예약 변경과 취소를 할 수 있습니다.</p>
      </section>
      <section className="flex flex-col gap-2 w-full big-bottom-sheet">
        {reservations.map((el, index) => (
          <article key={index} className="flex gap-3 px-8 w-full">
            <figure className="w-full py-3 px-7 flex justify-between text-main-white text-center text-xl font-semibold rounded-xl border border-main-orange bg-main-black">
              <p>{el.zoneId}관</p>
              <p>{el.hour} : 00 ~ {el.hour} : 55</p>
            </figure>
            <div className="min-w-fit">
              <button className="h-full flex items-center justify-center px-3 rounded-xl bg-main-orange"
                onClick={() => handleCancelClick(el.zoneId, el.hour)}>
                취소
              </button>
            </div>
          </article>
        ))}
      </section>
      {isCancelModal && (
        <main className="fixed top-0 left-0 w-screen">
          <div onClick={handleModalBackgroundClick} className="fixed top-0 left-0 bg-black opacity-70 z-10 w-full h-full" />
          <div className="fixed top-1/2 left-1/2 w-10/12 flex flex-col items-center justify-center rounded-2xl h-40 bg-main-black z-20 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-brown text-2xl font-semibold">{selectedReservation?.hour} : 00 ~ {selectedReservation?.hour} : 55</p>
            <p className="text-sm pt-1 pb-5">예약을 취소하시겠습니까?</p>
            <div className="w-full flex items-center justify-between px-10 font-bold">
              <button className="bg-main-orange text-black py-3 px-10 rounded-2xl" onClick={confirmCancelReservation}>
                확인
              </button>
              <button className="bg-white-border border py-3 px-10 rounded-2xl font-bold" onClick={handleModalBackgroundClick}>
                취소
              </button>
            </div>
          </div>
        </main>
      )}
      <div className="h-40" />
    </main>
  );
};

export default MyReservation;