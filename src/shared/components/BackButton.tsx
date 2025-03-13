import React from "react";

import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-router-dom';


const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBackClick} className="fixed top-6 left-6 z-10">
      <MdArrowBackIos />
    </button>
  );
};

export default BackButton;
