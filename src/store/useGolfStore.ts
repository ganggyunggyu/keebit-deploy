import { create } from 'zustand';

type ZoneInfo = {
  id: string;
  name: string;
};

export type Reservation = {
  id: string;
  user: string;
  time: string;
};

type GolfStore = {
  selectedZone: string | null;
  completeZone: ZoneInfo | null;
  reservations: Reservation[];

  selectZone: (zoneId: string) => void;
  setCompleteZone: (zoneInfo: ZoneInfo) => void;
  setReservations: (table: Reservation[]) => void;
};

export const useGolfStore = create<GolfStore>((set) => ({
  selectedZone: null,
  completeZone: null,
  reservations: [],

  selectZone: (zoneId) => set({ selectedZone: zoneId }),
  setCompleteZone: (zoneInfo) => set({ completeZone: zoneInfo }),
  setReservations: (table) => set({ reservations: table }),
}));
