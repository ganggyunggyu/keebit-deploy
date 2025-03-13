import { create } from 'zustand';

type SheetStore = {
  isGolfZoneListOpen: boolean;
  openGolfZoneList: () => void;
  closeGolfZoneList: () => void;
  toggleGolfZoneList: () => void;
};
export const useSheetStore = create<SheetStore>((set) => ({
  isGolfZoneListOpen: false,

  openGolfZoneList: () => set({ isGolfZoneListOpen: true }),
  closeGolfZoneList: () => set({ isGolfZoneListOpen: false }),
  toggleGolfZoneList: () =>
    set((state) => ({ isGolfZoneListOpen: !state.isGolfZoneListOpen })),
}));
