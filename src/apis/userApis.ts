import axios from 'axios';

// 유저 회원가입 API (POST /user)
export const registerUser = async (userData: {
  userName: string;
  aptName: string;
  aptDong: string;
  aptHo: string;
}) => {
  try {
    const response = await axios.post('http://localhost:8080/user/join', userData);
    return response.data;
  } catch (error) {
    console.error('회원가입 중 오류 발생:', error);
    throw error;
  }
};

// // 유저 로그인 API (POST /auth/login)
// export const loginUser = async (loginData: { userName: string }) => {
//   try {
//     const response = await axios.post('http://localhost:8080/auth/login', loginData, {
//       withCredentials: true, // 인증 쿠키 필요 시 추가
//     });
//     return response.data;
//   } catch (error) {
//     console.error('로그인 중 오류 발생:', error);
//     throw error;
//   }
// };

// 로그인한 유저 정보 가져오기 (GET /user/me)
export const getUser = async () => {
  try {
    const response = await axios.get('http://localhost:8080/user/me', {
      withCredentials: true, // 인증 쿠키 필요 시 추가
    });
    return response.data;
  } catch (error) {
    console.error('유저 정보를 가져오는 중 오류 발생:', error);
    throw error;
  }
};

