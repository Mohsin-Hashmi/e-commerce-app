import { BASE_URL } from "../utils/contants";
import axios from 'axios'
export const LoginAPI = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      { email, password },
      { withCredentials: true }
    );
    console.log("login user is", response)
    return response?.data?.user;
  } catch (err) {
    throw new Error(err.response?.data || err.message)
  }
};
