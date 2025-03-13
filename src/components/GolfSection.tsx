import { useSheetStore } from '../store/useSheetStore';
import useAuth from "../store/useAuth.ts";
import IfLoginFalse from "../shared/components/IfLoginFalse";
import {useState} from "react";

const GolfSection  = () => {
  const toggleGolfZoneList = useSheetStore((state) => state.toggleGolfZoneList);
  const isLoggedIn = useAuth();
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const handleReservationClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      toggleGolfZoneList();
    }
  };

  return (
    <section className="w-screen pt-30 flex flex-col justify-center items-center gap-8">
      <h1 className="text-3xl font-bold text-main-orange">골프 연습장</h1>
      <button className="py-3 px-10 bg-main-orange border-0 rounded-sm"
              onClick={handleReservationClick}>
        예약하기
      </button>
      <img src="https://unicorn-images.b-cdn.net/b9cabfed-26a5-4f9c-aeae-0b03dd5a2708?optimizer=gif" alt="골프 연습장" />

      <IfLoginFalse isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />

    </section>
  );
};

export default GolfSection;
