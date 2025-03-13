import axios from 'axios';

export const LOCAL_API = 'http://localhost:8080';

export const createUser = async () => {
  try {
    const result = await axios.post(`${LOCAL_API}/user/join`);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async () => {};

export const useCreateUserMutation = () => {};
