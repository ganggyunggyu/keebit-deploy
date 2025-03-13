
import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { GOLF_TIME_TABLE } from '../constants/GOLF_TABLE';
import { getListItem, setListItem } from '../lib/localStorage';
import { getGolfReservationTable } from '../store/atoms';

export const Reservation: React.FC = () => {
  const golfReservationTable = getGolfReservationTable();
  const params = useParams<{ zoneId: string }>();
  const navigate = useNavigate();
  const currentZoneId = Number(params.zoneId);

  const [isReservationModal, setIsReservationModal] = useState<boolean>(false);
  const [isStandByModal, setIsStandByModal] = useState<boolean>(false);
  const clikedHour = useRef<number | null>(null);

  const handleTimeClick = (hour: number) => {
    const isReservation = golfReservationTable.some(
      (el) => el.zoneId === currentZoneId && el.hour === hour
    );

    if (isReservation) {
      if (isReservationModal) setIsReservationModal(false);
      setIsStandByModal(true);
      clikedHour.current = hour;
    } else {
      if (isStandByModal) setIsStandByModal(false);
      setIsReservationModal(true);
      clikedHour.current = hour;
    }
  };

  const handleReservationClick = () => {
    if (clikedHour.current === null) return;

    const payload = { zoneId: currentZoneId, hour: clikedHour.current };
    golfReservationTable.push(payload);

    setListItem('golfReservationTable', golfReservationTable);
    navigate('/profile/my-reservation');
  };

  const handleModalBackgroundClick = () => {
    setIsReservationModal(false);
    setIsStandByModal(false);
  };

  return (
    <main className="w-screen h-screen overflow-hidden">
      <section className="py-5 px-9 flex flex-col gap-1">
        <p className="font-bold text-2xl text-center">{currentZoneId}번 타석</p>
        <p className="text-sm opacity-50 text-center">
          예약이 필요하시면 시간 선택 후 등록을 눌러주세요.
        </p>
      </section>
      <section className="w-full flex flex-col items-center gap-2 overflow-scroll h-11/12 pt-1 pb-40">
        {GOLF_TIME_TABLE.map((el) => {
          const golfReservationTable = getListItem('golfReservationTable');
          const isReservation = golfReservationTable.some(
            (value) => value.zoneId === currentZoneId && value.hour === el.hour
          );
          return (
            <p
              onClick={() => handleTimeClick(el.hour)}
              key={el.hour}
              className={`p-2 w-10/12 text-center text-xl font-semibold rounded-xl border bg-white-border ${
                isReservation ? `bg-brown` : ''
              }`}
            >
              {el.timeRange}
            </p>
          );
        })}
      </section>
    </main>
  );
};
