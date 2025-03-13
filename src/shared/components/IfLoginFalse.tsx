import React from "react";
import { useNavigate } from "react-router-dom";

interface IfLoginFalseProps {
  isOpen: boolean;
  onClose: () => void;
}

const IfLoginFalse: React.FC<IfLoginFalseProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null; // 모달이 열려있지 않으면 렌더링 안 함

  const handleGoHome = () => {
    onClose(); // 모달 닫기
    navigate('/'); // 홈으로 이동
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-main-black text-main-white p-5 rounded-lg w-80 text-center shadow-lg">
        <h2 className="text-lg font-semibold text-main-orange">로그인이 필요합니다</h2>
        <p className="text-sm mt-2">이 기능을 이용하려면 먼저 로그인해주세요.</p>
        <div className="mt-4 flex justify-center gap-3">
          <button className="px-4 py-2 bg-main-orange text-black rounded-md font-bold"
                  onClick={handleGoHome}>
            확인
          </button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded-md" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default IfLoginFalse;