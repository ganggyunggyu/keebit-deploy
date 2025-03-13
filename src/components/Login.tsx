import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { registerUser, loginUser } from "../apis/userApis.ts";

interface LoginProps {
  setSheetOpen: (isOpen: boolean) => void;
}

export const Login: React.FC<LoginProps> = ({ setSheetOpen }) => {
  const [userName, setUserName] = useState<string>('');
  const [aptName, setAptName] = useState<string>('');
  const [aptDong, setAptDong] = useState<string>('');
  const [aptHo, setAptHo] = useState<string>('');
  const navigate = useNavigate();

  // const submitLogin = () => {
  //   setItem('userName', userName);
  //   setItem('aptName', aptName);
  //   setItem('aptDong', aptDong);
  //   setItem('aptHo', aptHo);
  //
  //   setSheetOpen(false);
  //   navigate('/');
  // }

  const handleRegisterAndLogin = async () => {
    try {
      const registerResponse = await registerUser({ userName, aptName, aptDong, aptHo });
      console.log('회원가입 성공!', registerResponse);

      setSheetOpen(false);
      navigate('/');
    } catch (error) {
      console.error('회원가입 또는 로그인 실패:', error);
      alert('회원가입 또는 로그인에 실패했습니다.');
    }
  };

  return (
    <main className="w-screen">
      <form className="pt-10 pb-10 w-full px-5 flex flex-col gap-5 text-lg">
        <input className="border w-full p-2.5 rounded-lg border-main-orange"
               onChange={(event) => setUserName(event.target.value)}
               value={userName} type="text" placeholder="성함을 입력해주세요." />
        <input className="border w-full p-3 rounded-lg border-main-orange"
               onChange={(event) => setAptName(event.target.value)}
               value={aptName} type="text" placeholder="아파트 이름을 입력해주세요." />
        <div className="flex gap-3">
          <input className="border w-full p-3 rounded-lg border-main-orange"
                 onChange={(event) => setAptDong(event.target.value)}
                 value={aptDong} type="text" placeholder="아파트 동" />
          <input className="border w-full p-3 rounded-lg border-main-orange"
                 onChange={(event) => setAptHo(event.target.value)}
                 value={aptHo} type="text" placeholder="아파트 호수" />
        </div>
        <button className="w-full p-2.5 rounded-lg bg-main-orange" type="button"
                onClick={handleRegisterAndLogin}>
          등록
        </button>
      </form>
    </main>
  );
};

export default Login;