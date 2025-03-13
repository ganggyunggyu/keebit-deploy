
import React, { useEffect, ReactNode } from 'react';
import {Reservation, useGolfStore} from '../store/useGolfStore';
import { getGolfReservationTable } from '../store/atoms';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  const golfReservationTable: Reservation[] = getGolfReservationTable();
  const setReservations = useGolfStore((state) => state.setReservations);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    setReservations([...golfReservationTable]);
  }, [isOpen, setReservations, golfReservationTable]);

  return (
    <div className={`fixed inset-0 z-50 flex items-end transition-opacity duration-300 ${isOpen ? 'visible bg-black/50 opacity-100' : 'invisible opacity-0'}`} onClick={onClose}>
      <div className={`w-full max-h-[95vh] bg-black rounded-t-2xl shadow-lg transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
